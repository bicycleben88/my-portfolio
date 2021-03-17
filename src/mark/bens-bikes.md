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

> ### Custom Hooks
>
> #### useCart()
>
> use createContext() to create Provider component
>
> ![local state provider](https://i.imgur.com/XtDjpIt.png)
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

## Notes

> - Context.Provider allows consuming components to subscribe to context changes

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
