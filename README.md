# Portfolio

This is a basic markdown blog built with Gatsby.js. It uses React components styled with CSS Styled-Components & uses graphQL to query for markdown files within a local directory.

> ## Live Earl
>
> https://higginbotham.fun

## [Video Tour](https://www.youtube.com/playlist?list=PLjYC3ZkfhqCrW7ZReWiaeS47UHlwkku1R)

![Landing Page of Portfolio](https://i.imgur.com/zDXMqX8.png)

## Technologies Used:

> - Gatsby.js
> - React.js
> - JavaScript
> - CSS Components

## Features & Functions

#### Clock

> - Create Clocks component
>   - render Clock components
>   - pass down as props to Clock components the name of a city
> - ![clocks component](src/images/clocks.png)
> - Create Clock component
>   - create state for seconds, minutes & hour
>   - create css object that I will pass to the hands of the clock
> - ![clock state and css variables](src/images/clock-state.png)
>   - create functions to get the current seconds, minutes & hour
>     - calculate time difference for the hour for each city
> - ![get time functions](src/images/time-functions.png)
>   - call all three functions inside of a useEffect hook to get the time when the component first loads
>   - pass the css variables to the hands as inline styling
> - ![clock component](src/images/clock.png)

#### Css Variables Bar

> - Create CSS variables in a high level element like root or html & pass them to an element
> - ![css variables](src/images/css-vars.png)
> - Create VarsBar component
>   - create state to hold values for css variables
> - ![css state](src/images/css-state.png)
>   - set values of \<input> to state, name them w/ the name of the css variable & use handleChange() when they change
> - ![input tag](src/images/css-input.png)
>   - handleChange()
>     - set state to value from \<input> tags
>     - use the tag's name & value to set the css variable
> - ![handle change function](src/images/css-handle-change.png)

## Source

> Alex Merced Create-markdown-blog: https://tuts.alexmercedcoder.com/2020/gatsbyportfolio/
>
> Wes Bos JavaScript30: https://javascript30.com/

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://higginbotham.fun/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
