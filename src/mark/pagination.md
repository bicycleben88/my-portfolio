---
title: Pagination with React and Ruby on Rails
about: I make the home page of an e-commerce app look super slick with pagination. Like all shiny things, it takes a lot of work to make it look good.
primaryTech: React.js, Ruby on Rails
---

> ## Pagination
>
> ---
>
> ### React front end
>
> Render \<ItemsPage> component for routes "/", "/items", & "/items/:id"
>
> - ![routes for items page](https://i.imgur.com/fxhPhdl.png)
>
> Create \<Pagination> component
>
> - get url from global state for API request
> - create state to hold item count
> - create perPage & pageCount variables to calculate the number of pages needed
> - ![pagination variables](https://i.imgur.com/oUA4Ezw.png)
> - make get request to API that will return a count of items in the inventory
> - ![count api](https://i.imgur.com/4p3pxMg.png)
> - return \<Link>s to next or previous page, disabling link when on first or last page
> - ![link next](https://i.imgur.com/s8JVOz0.png)
> - ![link prev](https://i.imgur.com/zhmnrMY.png)
>
> Add \<Pagination> component to \<ItemsPage>
>
> - get page number from query param in URL
> - ![page query param](https://i.imgur.com/VebOecR.png)
> - return \<Items> & \<Pagination> components, passing as props the page number
> - ![items page component](https://i.imgur.com/PQyyUnY.png)
>
> Create \<Items> component
>
> 1. get url from global state for API request
> 1. create state to hold items
>
>    ![items variables](https://i.imgur.com/yZRb23h.png)
>
> 1. make get request to API
>
>    - include page number as query param
>    - will return the items that will display on that page
>
>      ![items api](https://i.imgur.com/96m5HZ7.png)
>
> - return \<Item> component for each item in state
>
>   ![items component](https://i.imgur.com/4aQ7Sox.png)
>
> ### Ruby on Rails back end
>
> Create API endpoint that returns a count of the items in the inventory
>
> - in routes.rb add route that runs the function 'count' when it recieves a get request from ".../items_count"  
>   ![count route](https://i.imgur.com/qBOoMtM.png)
>
> Write count function
>
> - in items_controller.rb use method .count on Item model to return the total number of items in the inventory
>
> ![count function](https://i.imgur.com/1mDqfTK.png)
>
> Add 'will_paginate' to Gemfile
>
> ![paginate gem](https://i.imgur.com/dgdEZIE.png)
>
> Use 'will_paginate' in items index route to render a specific number of items per page
>
> - in items_controller.rb index route use .paginate method, passing it as arguments the page number and the number of items per page to display
>
> ![paginate index route](https://i.imgur.com/EfFIhKq.png)
