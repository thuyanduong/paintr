# [React Router](https://reactrouter.com/docs/en/v6/getting-started/installation)

## What is Client Side Routing and How does it differ from Server Side Routing?
* Everytime we requested a new URL in express, explain the request response cycle
* How does JS handle changes in the URL?
* `history.back()`, `history.forward()`, `history.pushState({}, "", "/maya")`
* React Router uses these tools to change the URL and uses conditional rendering to display only certain components!!

### Paintr
```
* App
    |- Navbar
    |- About
    |- PaintingDetails
    |- Gallery
        |- Searchbar
        |- PaintingsContainer
              |- PaintingCard
```

### Goal:
1. Build out many 'views'
1a. the URLs take you to a certain view
2. Build out navigation tools to get from one page to another

### Set Up
- `npm install react-router-dom`

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased
- `import {BrowserRouter as Router} from 'react-router-dom'`
- Wrap all `<Route>` components in a `<Routes>` component

If the URL is `/about` => render the About component

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- `path` prop
- `element` prop

## How can we render a 404 Page? What about a Redirect?
- `<Navigate to="">` component

### Link
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Route components will re-render and show components based on new url
- works with the browser's native back and forward controls

### Routes Params `/:id`
- `<Route path="/paintings/:id" element={<PaintingDetails/>}/>`
- Then, you can use the `useParams` Hook in the component!
- But we need to figure out which painting to display
      Solution: 
      * we have a state called `paintings`
      * iterate through our `paintings` state to find painting that matches `:id`


