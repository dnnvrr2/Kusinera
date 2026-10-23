# Kusinera

Kusinera is a simple restaurant app made with React Native and Expo for our class project. It shows Filipino dishes and lets users view their details.

## Features

- Register and log in
- Show or hide passwords
- Browse five Filipino dishes
- View a dish's price, description, ingredients, serving size, and preparation time
- Go back to the menu and log out

## How to run

Install Node.js, then open the project folder in a terminal and run:

```sh
npm install
npm start
```

Open the app using an Expo Go version that supports SDK 57. Your phone and computer should be connected to the same Wi-Fi.

To run it in a browser:

```sh
npm run web
```

## Project folders

- `app` - routes and navigation
- `screens` - app screens
- `components` - shared buttons, inputs, and layouts
- `context` - login and account state
- `data` - sample dishes
- `assets` - images and other assets

## Notes

This is a demo app. Accounts are only saved while the app is running and are lost when it reloads or closes. Use sample login details. There is no database, ordering, or payment system yet.
