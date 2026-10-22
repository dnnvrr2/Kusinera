# Kusinera

A restaurant app prototype built with React Native and Expo SDK 57 for our class progress check.

## Run the project

Install Node.js, then run these commands in the project folder:

```sh
npm install
npm start
```

Scan the QR code using an SDK 57 compatible version of Expo Go on your phone. Keep the phone and computer on the same network. Android builds for specific SDK versions are available at https://expo.dev/go.

After updating dependencies, stop any running Expo server and run `npm start -- --clear` to clear the old Metro cache.

The project uses Expo 57.0.31, React 19.2.3, and React Native 0.86.3. To check SDK dependency versions, run `npx expo install --check`. For project diagnostics, run `npx expo-doctor`.

## Current features

- Registration checks required fields, email format, an 8-character minimum password, matching passwords, and duplicate accounts.
- Login checks credentials against accounts created during the current app session.
- Password fields have a show/hide button.
- The home screen shows the signed-in username and a logout button.
- Home lists five sample Filipino dishes. The menu is also available to guests.
- Each dish opens a dynamic `/details/[id]` route showing its ID, description, price, ingredients, serving size, and preparation time.
- Details has a Back button and handles unknown IDs without crashing.
- Screens share their layout, colors, inputs, and buttons.

This is a local demonstration. Accounts are held in React state and disappear when the app reloads or closes. Passwords are kept in memory for this prototype; use made-up credentials. A real app would use a backend to verify credentials, hash passwords, and manage sessions. OTP and password reset are not implemented.

## How the code works

`context/AuthContext.js` owns the accounts and signed-in user using `useState`. The root layout wraps the routes in `AuthProvider`, so `useAuth()` can read that shared state from any route. Each form still owns its input values and error message.

The `app` folder defines routes; `screens` holds their visual content; `data/menuItems.js` holds the sample restaurant data. The `components` folder holds UI reused by these screens:

- `authInput.js` receives a label, value, and `onChangeText` callback through props. Typing calls the callback and updates state in the screen. Only password visibility is stored inside the input component.
- `authButton.js` receives a title and an `onPress` callback. Shared styling keeps the main buttons consistent.
- `AuthLayout.js` receives a title, subtitle, and `children`. Children are the form or content placed inside its shared card. Its scroll view allows longer forms to scroll, while its keyboard avoiding view adjusts space when the keyboard opens.
- `MenuCard.js` receives an `item` and an `onPress` function. Pressing the card calls `onPress(item.id)`. The Home route uses that ID to navigate, so the card does not need to know how routing works.
- `ScreenContainer.js` provides the menu and details screens with safe-area spacing, scrolling, and a shared maximum content width.

`handleRegister` checks each rule in order. A failed rule sets an error and returns early. Valid input goes to `onRegisterSuccess` in the registration route, which saves the account through context and replaces the route with `/login`.

Login uses `find` to look for a matching account. Usernames ignore letter case, but passwords must match exactly. Registration uses `some` to check for existing usernames or emails. Trimming removes accidental spaces around usernames and emails; passwords are left unchanged.

## Expo Router and dynamic routes

`package.json` uses `expo-router/entry`. Expo Router reads the files in `app` to create the screens. The root `app/_layout.js` renders a `Stack` that manages navigation history. Routes use JavaScript (`.js`) because the existing project uses JavaScript; `[id].js` works the same way as `[id].tsx` for dynamic routing.

```text
app/
  _layout.js        Shared provider and navigation stack
  index.js         / (Home menu)
  login.js         /login
  register.js      /register
  details/
    [id].js        /details/1, /details/2, and so on
data/
  menuItems.js     Five dishes with unique string IDs
```

In `app/index.js`, selecting a card calls:

```js
router.push({ pathname: "/details/[id]", params: { id } });
```

For Chicken Adobo, `id` is `"1"`, so the route becomes `/details/1`. The Details route reads the value and looks up the matching object:

```js
const { id } = useLocalSearchParams();
const item = menuItems.find((menuItem) => menuItem.id === id);
```

The ID is a string because it comes from a URL. `DetailsScreen` receives both the item and ID as props and displays them. All five dishes use the same route file and screen component.

The Back button calls `router.back()` when there is history. If someone opens a detail link directly without previous app history, it uses `router.replace("/")` to return to Home. An ID absent from the data displays an item-not-found message with the same Back button.

To add a sixth dish, add one object with a unique ID to `data/menuItems.js`. Home maps over the array, so the new card and its details work without a separate screen file. `router.push` preserves the previous screen; `router.replace` replaces the current history entry, which suits transitions between login and registration.

Setup reference: [Expo Router manual installation](https://docs.expo.dev/router/installation/).

## Routing demonstration

1. Run `npm start` and open Expo Go, or run `npm run web` for browser testing.
2. Tap each menu card, read its ID and description, and press Back to menu.
3. In the browser, show how the URL changes for each selection.
4. Open `/details/999` to demonstrate the missing-item case.
5. Add another data object to explain how the feature can be extended.

| Dish | Route | Dynamic ID |
| --- | --- | --- |
| Chicken Adobo | `/details/1` | 1 |
| Sinigang na Baboy | `/details/2` | 2 |
| Kare-Kare | `/details/3` | 3 |
| Pancit Canton | `/details/4` | 4 |
| Halo-Halo | `/details/5` | 5 |

Submission screenshots are in `screenshots/`. They show the real Expo web app at phone width; they are browser captures, not Android device captures. See `screenshots/README.md` for the verification record.

## Practice demonstration

1. Submit an empty registration form.
2. Try an invalid email, a short password, and mismatched passwords.
3. Register a made-up account and log in with it.
4. Toggle password visibility and show the personalized home screen.
5. Log out, try an incorrect password, then log back in.
6. Attempt to register the same username or email again.
7. Explain an `AuthInput`'s props, then follow its callback back to `useState`.

For a small modification, change the button color in `authButton.js` and explain why all shared buttons change. To add a registration field, add its state and input in `RegisterScreen.js`, validate it, and include it in the account object passed to the parent.

Review and practice the code before presenting. Describe your own contributions and any AI assistance accurately, and be ready to explain or change each part yourself.
