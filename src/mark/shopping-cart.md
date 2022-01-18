---
title: Shopping Cart on an E-commerce Web App
about: Hold onto your inner tubes, creating a full CRUD shopping cart requires a React front end and a Ruby on Rails back end
primaryTech: React.js, Ruby on Rails
---

use custom hook to open & close the cart (see above)

make api request to get the user's cart

useEffect to get cart when the component mounts & anytime it's opened

```
 const getUser = async () => {    const response = await fetch(`${url}/auto_login`, {
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

loop thru user's cart & return a new \<CartItem> w/ each item in it

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

invoke deleteCartItem() to delete item from cart

- use id from cartItem to access correct API endpoint

addToCart()

- fetch post request to /cartitems API endpoint
- headers include JWT token & content-type
- send user id & item id in the request body

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

## Add (Multiple) Cart Items

handle POST request from front end to /cartitems

use .find\_\_by to determine if a cart item with an item_id already exists

if so, then update the quantity of that item by 1

otherwise, create a new cart item with the params outlined in cartitem_params

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
