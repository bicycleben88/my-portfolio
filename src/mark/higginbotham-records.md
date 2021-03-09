---
title: Higginbotham Records
author: Higginbotham, a Ben
about: Full Stack MERN app for users to upload and share their record collections
date: 2020-10-15
url: https://higginbotham-records.herokuapp.com/
primaryTech: Node.js - JavaScript framework to employ MVC architecture| Express - Node framework to create server & build API endpoints| Mongoose - Database tool (mongoDB) to employ CRUD commands| Bootstrap - CSS framework for responsive layout and mobile-first design| Click link for full tech specs & my personal video walkthru of the code!
---

---

This is a Full Stack application to post your record collection. It's built with the Mongo(DB/ose), Express, React & Node (MERN) stack. It has two full CRUD features, a user account & a record profile. It is styled with Bootstrap, featuring a mobile-first design. Lastly, you can play the drums with your keyboard and I hope you think it's as cool as I do.

> ### Git Url
>
> https://github.com/bicycleben88/higginbotham-records

![Landing page to Higginbotham Records](https://i.imgur.com/pv01sLr.png)

## Technologies Used

> - Node.js
> - React
> - Express
> - MongoDB
> - Mongoose
> - CSS Bootstrap
> - BCrypt

## Features & Functions

### Models, Views, Controllers (MVC) pattern

Models define the data of a piece of content (e.g. a record),

- ![record model](https://i.imgur.com/qc5nKLG.png)

Controllers

- define the routes associated with particular model
- follow RESTful convention (i.e. HTTP verb + endpoint = specific piece of data)
- ![record controller](https://i.imgur.com/U56M5A5.png)

Views

- are returned by a controller
- make up the front end of the user interface
- written in .jsx as React components
- ![record views](https://i.imgur.com/5s6I5im.png)

### Drum Kit

1.  Import router & tell server to use it when it recieves a request from "https:...../drum"
    ![drum router in server.js](https://i.imgur.com/v7dAKne.png)

1.  define get route in controller to return drum.jsx from views folder
1.  Create Views file

    - use custom data-key attribute to associate a keyboard key with an audio file
    - ![drum views](https://i.imgur.com/fy33BS6.png)

1.  Import app.js in \<Layout> to make it avaiable to all components
1.  Create JavaScript Logic

    Grab DOM elements & add event listeners

    - ![drum dom elements & event listeners](https://i.imgur.com/kUe1aQo.png)

    playAudio()

            - grab the audio file associated with the keyboard key that triggered the event
            - if there's an audio file, then play it from the beggining

    - ![play audio function](https://i.imgur.com/fuy2lp5.png)

    removeClass()

                - removes css effect

    - ![remove class function](https://i.imgur.com/RTQZnZj.png)

## Notes

> - RESTful - “Representational State Transfer”. It is a set of rules that developers follow when they create their API. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
