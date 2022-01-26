---
title: Pagination with React and Ruby on Rails
about: I make the home page of an e-commerce app look super slick with pagination. Like all shiny things, it takes a lot of work to make it look good.
primaryTech: React.js, Ruby on Rails
---

If I had a million unique gemstones to sell on my e-commerce web app, then I wouldn’t have much space on my home page to display them all. Pagination separates those million little gemstones and displays only a few at a time. With React and Ruby on Rails, pagination requires getting a count of all the items in inventory, dynamically routing & creating pages, and displaying the correct items on each page.

How many pages will I need to evenly split up all the items in inventory? Count the total number of items and divide the count by however many items each page will display. On the backend, to get the count, add the following line to routes.rb, which directs a Get request from the end point /items_count to a function called count.

```
 get "/items_count", to: "items#count"
```

In the file items_controller.rb the function count uses a method, count, on the model Item and returns the total count of all the items in inventory.

```
 def count
    @count = Item.count
    render json: @count
 end
```

On the frontend, create a component, Pagination, and make a Get request using fetch to the end point the backend is now equipped to handle. The backend sends a response with the count of all of the items in inventory, which I store in state.

```
  const getCount = async () => {
    const response = await fetch(`${url}/items_count`);
    const data = await response.json();
    await setItemCount(data);
  };

  React.useEffect(() => {
    getCount();
  }, []);
```

Now that I have a count, I can determine the number of pages to create and create routes to each one. I don’t want to hard code each page or routes for each page. Instead I will dynamically create and route pages, telling React how to figure what page it’s on. React Router, the service I use to navigate between pages, comes with a component, Switch, that has child components, Route, which render components that correspond to specific url endpoints. Since I want to add pagination to my home page, I tell Route to render the component ItemsPage any time the url ends with “/”, “/items”, or “/items/:id”. The last route, “/items/:id”, is how React will know what page to render.

```
 <Route
    path={["/items/:id", "/", "/items"]}
    component={ItemsPage}
 />
```

### React front end

Render \<ItemsPage> component for routes "/", "/items", & "/items/:id"

Create \<Pagination> component

- get url from global state for API request
- create state to hold item count
- create perPage & pageCount variables to calculate the number of pages needed

```
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [itemCount, setItemCount] = React.useState();
  const perPage = 2;
  const pageCount = Math.ceil(itemCount / perPage);
```

- return \<Link>s to next or previous page, disabling link when on first or last page

```
 <Link to={page > 1 && `/items/${page - 1}`}>
```

```
 <Link to={page < pageCount && `/items/${page + 1}`}>
```

Add \<Pagination> component to \<ItemsPage>

- get page number from query param in URL

```
  const page = parseInt(props.match.params.id);
```

- return \<Items> & \<Pagination> components, passing as props the page number

```
  return (
    <div>
      <Pagination page={page || 1} />
      <Items page={page || 1} />
    </div>
  );
```

Create \<Items> component

1.  get url from global state for API request
1.  create state to hold items

```
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [items, setItems] = React.useState([]);
```

1.  make get request to API

    - include page number as query param
    - will return the items that will display on that page

```
  const getItems = async () => {
    const repsonse = await fetch(`${url}/items?page=${page}`);
    const data = await repsonse.json();
    setItems(data);
  };

  React.useEffect(() => {
    getItems();
  }, [page]);
```

- return \<Item> component for each item in state

```
 {items.map((item) => (
   <Item item={item} key={item.id} />
 ))}
```

### Ruby on Rails back end

Add 'will_paginate' to Gemfile

```
gem 'will_paginate', '~> 3.1.0'
```

Use 'will_paginate' in items index route to render a specific number of items per page

- in items_controller.rb index route use .paginate method, passing it as arguments the page number and the number of items per page to display

```
 def index
    @items = Item.paginate(page: params[:page], per_page: 2)
    render json: @items
 end
```
