# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We are starting a website for our zoo. The backend is already done:

* We have `GET`, `POST`, `PUT`, and `DELETE` methods set up
* Base URL: https://65f394fe105614e654a0ac9d.mockapi.io/api/v1/
* End point: `animals`

GET /animals
GET /animals/:id
POST /animals
PUT /animals/:id
DELETE /animals/:id

You've been asked to create a UI for the zoo staff. The team wants this to be done in React using [MUI](https://mui.com/material-ui/)

They need a page that lists all the animals. This page should:
    - Include the type of animal, its name, its age, and when its next checkup is.
    - It should be filterable by animal type.
    - It should be sortable by animal type and age.
    - They would also like to be able to delete an animal from this page in case one dies (this is not a very good zoo it happens a lot).
    - A modal or popup that allows staff to update when an animal's next checkup is.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)