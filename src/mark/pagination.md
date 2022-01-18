---
title: Pagination with React and Ruby on Rails
about: I make the home page of an e-commerce app look super slick with pagination. Like all shiny things, it takes a lot of work to make it look good.
primaryTech: React.js, Ruby on Rails
---

### React front end

Render \<ItemsPage> component for routes "/", "/items", & "/items/:id"

```
 <Route
    path={["/items/:id", "/", "/items"]}
    component={ItemsPage}
 />
```

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

- make get request to API that will return a count of items in the inventory

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

Create API endpoint that returns a count of the items in the inventory

- in routes.rb add route that runs the function 'count' when it recieves a get request from ".../items_count"

```
 get "/items_count", to: "items#count"
```

Write count function

- in items_controller.rb use method .count on Item model to return the total number of items in the inventory

```
 def count
    @count = Item.count
    render json: @count
 end
```

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
