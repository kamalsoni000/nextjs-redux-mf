# Redux Reducer Injection Example Microfrontends using Next.js and Module Federation Boilerplate by [Kamal Soni](https://kamalsoni.in/)

Module Federation is a plugin from Webpack 5 that helps to orchestrate micro-frontend architecture, thereby making it easier for organizational teams to decouple and share applications.

This example shows how you can share your redux store across your remote app and inject dynamically a reducer.

- host is the host application that create the store and add `injectReducer` to the `store` object.
- remote is the remote application that inject in own reducer to the store that was passed by the props by `app1`

# Running Demo

1. `yarn install && yarn start`
2. Browse to localhost:3001

You should see a `Welcome to Host App` and a `button`


