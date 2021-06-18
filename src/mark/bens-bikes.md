---
title: Ben's Bikes
about: Front End e-commerce app to purchase bikes and bike gear
author: Higginbotham, a Ben
date: 2020-12-10
url: https://bens-bikes-frontend.vercel.app/
primaryTech: React.js - JavaScript framework to manage data in state & to employ JS methods and functions| Ruby on Rails - ORM to scaffold back end API| CSS-Components - Styling tool to add custom design to components| Click link for full tech specs & my personal video walkthru of the code!
---

This is a front end e-commerce web application built with React. Users can create an account, browse thru products, add items to a cart & checkout. It accesses a full CRUD API built with Ruby on Rails that follows RESTful convention.

## [Video Walkthru](https://www.youtube.com/playlist?list=PLjYC3ZkfhqCpDJl-34_mycn5KZcrrsPKR)

> ### Git Urls:
>
> [Front End](https://github.com/bicycleben88/bens_bikes_frontend)
>
> [Back End](https://github.com/bicycleben88/bens_bikes_backend)

## [Video Walkthru](https://www.youtube.com/watch?v=NjY_tzMZuSY)

![Landing page to Ben's Bikes](https://i.imgur.com/Kt3juRq.jpg)

## Technologies Used

> ### Front End:
>
> - React.js
> - JavaScript
> - CSS Components
> - JWT
>
> ### Back End:
>
> - Ruby on Rails
> - PostgresQL
> - JWT
> - BCrypt

## Features & Functions

> ## Custom Hooks
>
> #### useCart()
>
> use createContext() to create Provider component
>
```
 const LocalStateContext = createContext();
 const LocalStateProvider= LocalStateContext.Provider;
```
>
> create higher level component
>
> - add state & functions
> - return Provider component w/ all values that will be passed down as props to child components
>
> ![cart state provider](https://i.imgur.com/ymSXt0m.png)
>
> create custom hook using useContext()
>
> ![use cart hook](https://i.imgur.com/WRMtv1D.png)
>
> export hook & provider component
>
> ![export](https://i.imgur.com/4vwOCVi.png)

> ## Store JWT Tokens in Local Storage
>
> Keeps a user logged in if page is reloaded
>
> Make fetch request to API end point
>
> 1. will return a JWT token
> 1. save token in local storage thru the window object
>
> ![set item local storage](https://i.imgur.com/2SKQmfh.png)
>
> In App.js
>
> 1. look for token in local storage
> 1. add it to globalState
>
> ![app global state](https://i.imgur.com/XaCXrc0.png)
>
> To log out
>
> 1. remove token from local storage
> 1. set token in globalState to null
>
> ![log out button](https://i.imgur.com/qY7Xmyq.png)

> ## Cart
>
> use custom hook to open & close the cart (see above)
>
> make api request to get the user's cart
>
> useEffect to get cart when the component mounts & anytime it's opened
>
> ![fetch request & useEffecthook](https://i.imgur.com/qHXR4EV.png)
>
> loop thru user's cart & return a new \<CartItem> w/ each item in it
>
> ![display cart items](https://i.imgur.com/inaqhHn.png)
>
> invoke deleteCartItem() to delete item from cart
>
> - use id from cartItem to access correct API endpoint
>
> addToCart()
>
> - fetch post request to /cartitems API endpoint
> - headers include JWT token & content-type
> - send user id & item id in the request body
>
> ![add to cart function](https://i.imgur.com/245G9Wh.png)

> ## Add (Multiple) Cart Items
>
> handle POST request from front end to /cartitems
>
> use .find\_\_by to determine if a cart item with an item_id already exists
>
> if so, then update the quantity of that item by 1
>
> otherwise, create a new cart item with the params outlined in cartitem_params
>
> ![create cart  item](https://i.imgur.com/Pn1brh5.png)

> ## Stripe Credit Card Payments
>
> Create Stripe account to get API keys
>
> ### Stripe w/ Ruby on Rails API
>
> Create file stripe.rb in /config/initializers
>
> - Add API keys (stored as environmental variables)
>
> ![stripe.rb](https://i.imgur.com/aNp8b1h.png)
>
> Add Environmental variables
>
> - Create file called local_env.yml & add it to .gitignore
> - Store key/value pairs e.g. STRIPE_KEY: "api key"
>
> In application.rb add the following code before loading default config
>
> ![application.rb add env variables](https://i.imgur.com/eQr0fkr.png)
>
> In orders_controllers use the PaymentIntents module to create a new payment, passing the Stipe token from the request body
>
> ![payment intent](https://i.imgur.com/V3smX7b.png)
>
> update order to include the charge
>
> ![update order with stripe payment](https://i.imgur.com/sGTHfrq.png)
>
> ### Stripe w/ React front end
>
> Add .env.local file to root directory & add it to .gitignore
>
> Add key/value pairs e.g. REACT\_\_APP\_\_SECRET_KEY="api secret key"
>
> CheckOut Component
>
> - imports from stripe:
> - ![stripe imports](https://i.imgur.com/auPgVBP.png)
> - configure stripe w/API key
> - ![stripe config](https://i.imgur.com/5fc5y6N.png)
> - return Stripe Element w/ checkout form, passing down stripe configuration & user as props
> - ![checkout component](https://i.imgur.com/iuDTapI.png)
>
> CheckOut Form
>
> - create state to handle loading & errors
> - ![checkout form state](https://i.imgur.com/PSjHAIQ.png)
> - return \<form> w/ messages to handle loading and errors, & Stripe \<CardElement>
> - ![checkout form component](https://i.imgur.com/Hty3dEG.png)
> - save Stripe hooks to variables that will be used when submitting checkout form
> - ![stripe hooks](https://i.imgur.com/Qvwg2u1.png)
>
> handleCheckout()
>
> - preventDefault() - stop page from reloading
> - setLoading(true) - prints loading message
> - create Stripe payment method w/ async function
> - ![stripe payment method](https://i.imgur.com/l7Ip7RG.png)
> - handle error w/ if() statement - prints error message
> - make post request to API to create Order w/ order details & Stripe payment token
> - ![order API](https://i.imgur.com/DjLsvgA.png)
> - redirect to order page, clear form, close cart, reset loading and error state
> - ![clear form](https://i.imgur.com/f7qTkSP.png)

> ## Pagination
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

## Notes

> - Context.Provider allows consuming components to subscribe to context changes

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
