---
title: How to Persist User Session
about: Don't want to lose your session because you're browser died, or you checked out another site for a quick second? Here I show how to persist a user's session using JWT tokens and local storage
primaryTech: React.js, JWT, local storage
---

> ## Store JWT Tokens in Local Storage
>
> ---
>
> Keeps a user logged in if page is reloaded
>
> Make fetch request to API end point
>
> 1. will return a JWT token
> 1. save token in local storage thru the window object
>
> ```
> await window.localStorage.setItem("token", JSON.stringify(data.token));
> ```
>
> In App.js
>
> 1. look for token in local storage
> 1. add it to globalState
>
> ```
>  React.useEffect(() => {
>    const token = JSON.parse(window.localStorage.getItem("token"));
>    if (token) {
>      setGlobalState({ ...globalState, token: token });
>    }
>  }, []);
> ```
>
> To log out
>
> 1. remove token from local storage
> 1. set token in globalState to null
>
> ```
>  const logOut = () => {
>    return (
>      <Link
>        to="/"
>        onClick={() => {
>          setGlobalState({ ...globalState, token: null });
>          window.localStorage.removeItem("token");
>        }}
>      >
>        Log Out
>      </Link>
>    );
>  };
> ```
