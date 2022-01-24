---
title: How to Persist User Session w/ JWT & Local Storage
about: Don't want to lose your session because you're browser died, or you checked out another site for a quick second? Here I show how to persist a user's session using JWT tokens and local storage
primaryTech: React.js, JWT, local storage
---

Don’t you dare refresh that page! Or, I mean, go ahead. You’ll still be logged in when you come back. That’s because I’ve built a feature that tells the app whether or not a user is already logged in. And don’t worry, I’m not saving your sensitive login information. Instead, I use JWT and local storage to persist a user’s session. Here’s how.

Save yourself some time and [watch my youtube video](https://www.youtube.com/watch?v=w0IXDeNa6fo&list=PLjYC3ZkfhqCpDJl-34_mycn5KZcrrsPKR&index=3) instead.

When a user logs in, JWT scrambles the username and password inside of a string of numbers, letters, and characters that isn’t human readable. The string is referred to as a token. In a React app, access the window object and use the setItem method. setItem takes two arguments, a label and a value, and stores them in the browser’s local storage. The user logs in via a Post request inside of an asynchronous function. The response includes the JWT token, which I pass to setItem after converting the token to a string.

```
await window.localStorage.setItem("token", JSON.stringify(data.token));
```

The token will stay in local storage until it’s deleted or the browser is closed. In app.js, use the hook useEffect to run a function which accesses the window object and the method getItem. Pass getItem the name of the label, ‘token’. If such a label exists, then add its value to state.

```
 React.useEffect(() => {
   const token = JSON.parse(window.localStorage.getItem("token"));
   if (token) {
     setGlobalState({ ...globalState, token: token });
   }
 }, []);
```

Since JWT is used when a user logs in, it makes sense to remove the token when the user logs out. To remove it, use the removeItem method passing it the label, ‘token’.

```
 const logOut = () => {
   return (
     <Link
       to="/"
       onClick={() => {
         setGlobalState({ ...globalState, token: null });
         window.localStorage.removeItem("token");
       }}
     >
       Log Out
     </Link>
   );
 };
```
