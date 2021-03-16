---
title: Creepy Costumes
author: Higginbotham, a Ben
about: Front End app to make creative Halloween costumes
date: 2020-11-17
url: https://costumes-app-client.vercel.app/
primaryTech: React.js - JavaScript framework to DRY code w/ reusable components| Node.js - JavaScript framework for back end API that follows RESTful convention| BCrypt & JWT - Authentication tech to secure user data| Click link for full tech specs & my personal video walkthru of the code!
---

This is a front end web application built with React. It allows a user to Create, Read, Update & Delete (CRUD) a halloween costume from an inventory of festive items. It accesses a back end API I buit with Node that uses RESTful routes to serve data from a non-relational database (MongoDB)

> ### Git Urls:
>
> [Front End](https://github.com/bicycleben88/costumes_app_client)
>
> [Back End](https://github.com/bicycleben88/costumes_api)

## [Video Walkthru](https://www.youtube.com/playlist?list=PLjYC3ZkfhqCpN1r8fTiDEfQJJgdzxw8QG)

![Landing page to Creepy Costumes](https://i.imgur.com/5C3nDAZ.png)

## Technologies Used

> ### Front End:
>
> - React.js
> - JavaScript
> - JWT
> - CSS Flexbox
>
> ### Back End:
>
> - Node.js
> - MongoDB
> - Mongoose
> - JWT
> - BCrypt

## Features & Functions

> ### Drawing Canvas
>
> create canvas context
>
> 1. useRef() creates reference object to be used in \<canvas ref={referenceObject}> tag
>    ![use ref](https://i.imgur.com/BGFmRir.png) ![canvas reference](https://i.imgur.com/w5r6g7q.png)
> 1. useEffect() defines canvas's context, configures it & invokes draw() function, passing the context as an argument.
>
> ![use effect](https://i.imgur.com/ZL6mp5L.png)
>
> define draw variables
>
> ![canvas variables](https://i.imgur.com/rgfGWZY.png)
>
> add event listeners to \<canvas>
>
> 1.  mouse down - set isDrawing to true & define values of lastX & lastY
> 1.  mouse move - invoke draw() function
> 1.  mouse up & mouse out - set isDrawing to false
>     ![event listeners](https://i.imgur.com/OJxUbZn.png)
>
> draw()
>
> 1. return if mouse isn't clicked & over the canvas
> 1. use context methods to draw the line
> 1. store values of the last place the user had the mouse clicked
>    ![draw function](https://i.imgur.com/s9OT9OY.png)
>
> .clearRect method clears the canvas
>
> ![clear canvas button](https://i.imgur.com/CLhIp0l.png)
>
> .strokeStyle defines the color of the line
>
> ![color picker input](https://i.imgur.com/QndaAh1.png)

## Notes

> - Create Canvas in React: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
> - useRef(): returns a mutable ref object whose .current property is initialized to the passed argument

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
