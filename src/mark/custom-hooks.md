---
title: How to Create Custom Hooks
about: I built a custom hook in React to create a shopping cart. Learn more about creating context and a provider component
primaryTech: React.js
---

Children inherit things from their parents all the time. It’s the natural order of things. Do siblings inherit from their brothers and sisters? Not in React. If I want sibling components to share things such as the state of a component or the functions needed to change state, then I need to write a custom hook that any component can import and use. If I want the custom hook to share state, then I need to create a provider component that wraps around all the other components in my app. Let’s get granular and I’ll show you how it’s done.

Or you can [watch my youtube video](https://www.youtube.com/watch?v=BDGOFTtQL60&list=PLjYC3ZkfhqCpDJl-34_mycn5KZcrrsPKR&index=2&t=82s) instead and skip all the reading.

I have a Cart component on an [e-commerce web app](https://bens-bikes-frontend.vercel.app/) that will slide onto the screen when the user selects it from the nav bar, and slide off the screen when the user hits the close button. The CSS that styles the Cart will change when a custom attribute is added to it, and the value of that attribute will be a simple true or false that is held in state. Two sibling components, the nav bar and Cart, need to access the state and the functions that set it. I’m going to make a custom hook called useCart().

useCart lives in a file called cartState that I put inside the src directory. First, I import from React a hook called createContext and save it to a variable. Then I use the Provider component from createContext that I will soon use to create a custom provider component.

```
const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider
```

CartStateProvider, created using LocalStateProvider, is the higher level component I’m creating to pass down state and the functions that set it to other components in the app; the sibling components are passed down as children. State, cartOpen, is a boolean, and the functions toggleCart, closeCart, & openCart set the state of the cart. In an object called value I include everything I want other components to have access to.

```
const CartStateProvider = ({ children }) => {
 const [cartOpen, setCartOpen] = useState(false);

const toggleCart = () => {
   setCartOpen(!cartOpen);
 };

 const closeCart = () => {
  setCartOpen(false);
 };

 const openCart = () => {
   setCartOpen(true);
 };

 return (
   <LocalStateProvider
     value={{
       cartOpen,
       setCartOpen,
       closeCart,
       openCart,
       toggleCart,
     }}
   >
     {children}
   </LocalStateProvider>
 );
};
```

Finally, create the custom hook, useCart, with the help of another React hook, useContext. useContext takes the variable LocalStateContext, made earlier. Save the result of useContext to a variable, all, and return it. To make the custom hook and provider component, useCart and CartStateProvider, available for import, export. In app.js place CartStateProvider somewhere high up the tree, and in the Cart component and the nav bar import useCart().

```
const useCart = () => {
 const all = useContext(LocalStateContext);
 return all;
};

export { CartStateProvider, useCart };
```
