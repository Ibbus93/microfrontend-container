# Microfrontend React Container
A microfrontend project using React, Redux and Web Components

## Demo
https://ibbus93.github.io/microfrontend-container/

## Goals and motivations
I wanted to prove a personal microfrontend approach for various reason, especially the possibility to include this kind of architecture into my company, using probably Amazon S3 Buckets.
The main purpose of the project was to test how the various micro frontends could communicate with a container, considering even the possibility to configure a Redux store for each application, included the container. 

## Description
The approach chosen in this case is to load a micro frontend on a different path in the application, hence the container decides what frontend render depending on the route path.

In details:
*  `/sign-in` will load the [micro-login](https://github.com/Ibbus93/micro-login);
*  `/account` will load the [micro-bank-account](https://github.com/Ibbus93/micro-bank-account).

After the start, the application let the user make the login using the `micro-login`. The login will return to the container a UUID and a token of the user. This data will provided to the `micro-bank-account`: without them, the account will avoid the access to the page.

Each project has been deployed into the personal Github web space in order to work. This is needed by the core of the project, the [Microfrontend](https://github.com/Ibbus93/microfrontend-container/blob/master/src/shared/micro-frontend/MicroFrontend.js) function component: it receives the url of the application, it fetches the manifest and it attaches the `main.js` script file into a new DOM element, using a [render function](https://github.com/Ibbus93/micro-login/blob/master/src/index.js) exposed by each microfrontend. The element will be destroyed when the user change the page with the microfrontend loaded.

The login request, as long as each other HTTP request present into the platform, is submitted to a Postman Mock collection, so every username and password combination is acceptable.

## Project structure
The structure is very light and easy:
  *  `/public` contains the index.html to let the project work;
  *  `/src` contains the core of the project, in particular:
     *  `/api` contains a GET request to obtain some user informations;
     *  `/features` contains the loading of the two microfrontend and a landing page;
     *  `/shared` contains modules shared between the features, included the layout and the Microfrontend function component;
     *  `/store` contains the redux store with the saga effects to make an HTTP request.

## Technologies
This project is build using [React App Rewired](https://github.com/timarney/react-app-rewired), 
hence it requires a `config-overrides.js` file in order to work.

Other notable technologies used are:
  *  [Material UI](https://github.com/mui-org/material-ui)
  *  [Formik](https://github.com/jaredpalmer/formik)
  *  [Yup](https://github.com/jquense/yup)
  *  [Styled Components](https://github.com/styled-components/styled-components)
  *  [Axios](https://github.com/axios/axios)
  *  [Redux](https://github.com/reduxjs/react-redux)
  *  [Redux Saga](https://github.com/redux-saga/redux-saga)
  *  [Redux Actions](https://github.com/redux-utilities/redux-actions)
  
## Getting started

1. Clone the repository
2. `yarn install`
3. `yarn start`

## Other considerations
The authentication mechanism here used is missing some token validations and it's far from a production-ready security mechanism. Following more or less the same pattern, I would either suggest or use [aws-amplify](https://github.com/aws-amplify/amplify-js) in the authentication mechanism. In this way, the `micro-bank-account` could just retrieve the token from the cookies instead of waiting for the data from the container.

## Future developments
*  Include a custom components library to be shared between each micro frontend
*  To add aws-amplify to improve the authentication mechanism 

## Acknowledgements
This project, micro-login and micro-bank-account are inspired from the work of [Cam Jackson](https://github.com/camjackson) across [micro-frontends-demo](https://github.com/micro-frontends-demo) that is well described in [this Martin Fowler article](https://martinfowler.com/articles/micro-frontends.html) and that I suggest to read if you finished here someway.
