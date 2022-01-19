---
title: Shopping Cart on an E-commerce Web App
about: Hold onto your inner tubes, creating a full CRUD shopping cart requires a React front end and a Ruby on Rails back end
primaryTech: React.js, Ruby on Rails
---

What’s an e-commerce app without a shopping cart? A bad app(le). A shopping cart is where a user can Create a cart item, Read the items in the cart, Update the quantity of a cart item, & Delete a cart item if the feeling just isn’t right. To create a shopping part it's important to understand what a cart item is, and how the frontend and backend communicate to perform all the CRUD operations.

A cart item is its own model, and it requires its own schema. I use Ruby on Rails to create the cart item model, which includes a reference to an item (e.g. a product), a reference to a user, & a quantity. In a bit, the frontend will send the backend id's from the user and the product to create a cart item.

```
  create_table "cartitems", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.bigint "item_id"
    t.integer "quantity", default: 1
    t.index ["item_id"], name: "index_cartitems_on_item_id"
    t.index ["user_id"], name: "index_cartitems_on_user_id"
  end
```

In a Post request from the frontend, the Create route will first look at the item id to check if it already exists as a cart item, updating the quantity of the cart item if it does. If no such item id exists in the cart, then a new cart item is created using the id's of the item and the user, passed as cartitem_params.

```
 def create
   if
     Cartitem.find_by(item_id: params[:item_id].to_i)
     @cartitem = Cartitem.find_by(item_id: params[:item_id].to_i)
     @cartitem.update(quantity: @cartitem.quantity + 1)
     render json: @cartitem
   else
     @cartitem = Cartitem.new(cartitem_params)
     if @cartitem.save
       render json: @cartitem, status: :created, location: @cartitem
     else
       render json: @cartitem.errors, status: :unprocessable_entity
     end
   end
end
```

Now that it’s clear what a cart item is and how the backend creates or updates it, let’s take a look at the frontend to see how a user interacts with the shopping cart.

When a user opens the Cart component from the nav bar, the frontend sends a Get request to the backend, which responds with the user and an array of its cart items; data I keep in state. Anytime the user opens the cart, i.e. cartOpen, the frontend will send another Get request. Read [my post on creating custom hooks](/custom-hooks) to understand where cartOpen comes from and how it works. A user can now Read its cart items.

```
 const getUser = async () => {
   const response = await fetch(`${url}/auto_login`, {
     headers: {
       "Content-Type": "application/JSON",
       Authorization: `bearer: ${token}`,
     },
   });
   const data = await response.json();
   await setUser(data);
 };

 React.useEffect(() => {
   getUser();
 }, [cartOpen]);
```

Loop through the user's cart items and return a new component, CartItem, to display all the data of the cart item (e.g. quantity, price, etc).

```
   <ul>
       user.cartitems &&
           user.cartitems.map((cartItem) => {
             return (
               <CartItem
                 item={cartItem}
                 key={cartItem.id}
                 handleDelete={deleteCartItem}
               />
             );
           })}
   </ul>
```

A user can Delete a cart item by invoking deleteCartItem(), passing the function the id of the cart item.

```
  const deleteCartItem = async (cartItemId) => {
    await fetch(`${url}/cartitems/${cartItemId}`, {
      method: "DELETE",
    });
    getUser();
  };
```

Since the Create route in the backend checks for an existing cart item before it creates a new one, a user can Create or Update a cart item using the same function (i.e. accessing the same backend API endpoint). It sends a Post request that includes the id's of the user and the item (product).

```
 const addToCart = async () => {
   const response = await fetch(`${url}/cartitems`, {
     method: "POST",
     headers: {
       "content-type": "application/json",
       Authorization: `bearer: ${token}`,
     },
     body: JSON.stringify({
       item_id: id,
       user_id: userId,
     }),
   });
   const data = await response.json();
 };
```
