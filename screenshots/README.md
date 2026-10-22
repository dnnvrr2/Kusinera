# Submission screenshots and verification

Captured from the running Expo web app at phone width on October 22, 2026. These are actual app screenshots, not mockups or Android device captures.

- `home.jpg`: Home menu with the five dishes.
- `home-menu.jpg`: another Home capture after navigating through the menu.
- `details-1.jpg` through `details-5.jpg`: each selected dish, its dynamic ID, description, ingredients, and Back button.
- `item-not-found.jpg`: graceful handling of an unknown ID.
- `route-checks.json`: recorded browser checks for all five menu selections.

## Browser verification

| Selection | URL after pressing card | Matching ID, name, description | Back to Home |
| --- | --- | --- | --- |
| Chicken Adobo | `/details/1` | Passed | Passed |
| Sinigang na Baboy | `/details/2` | Passed | Passed |
| Kare-Kare | `/details/3` | Passed | Passed |
| Pancit Canton | `/details/4` | Passed | Passed |
| Halo-Halo | `/details/5` | Passed | Passed |

Additional checks passed:

- A fresh tab opened directly at `/details/3` and its Back button returned to Home without existing app history.
- `/details/999` showed the missing-item screen, and Back returned to Home.
- Empty registration showed validation. A made-up account could register, log in, visit details, return with its session intact, and log out.
- No browser console errors were recorded during these interactions.
- Expo Doctor passed all 21 checks, and SDK dependency validation passed.
- The Expo Router Android bundle exported successfully.

Native phone gestures, keyboard behavior, and physical Android/iOS devices have not been tested here. Run the app in Expo Go before class to check the device experience.
