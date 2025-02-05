# Dog Finder App

## Features
- **Login Screen**: Users enter their name and email to authenticate and begin searching for dogs.
- **Dog Search**: Users can filter available dogs by breed and view details such as breed, age, and location.
- **Favorites**: Users can mark their favorite dogs and view them in a separate tab.
- **Match**: After selecting favorites, users can click the **"View Match"** button to find a dog match, displayed in a modal.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For navigation between pages and tabs.
- **Axios**: For API calls to Fetch's backend.
- **React Modal**: For displaying the dog match in a modal window.

## Getting Started

### Prerequisites
Before starting, ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn

### Installing

1. Clone the repository:
  
   ```
   git clone https://github.com/your-username/dog-adoption-app.git
   cd dog-adoption-app
   ```

3. Install the dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```
The app should now be running on http://localhost:3000.


Project Structure
```
/src
  /components
    AuthForm.js        // Login Form
    DogList.js         // Dog search and favorites
    DogItem.js         // Dog details card
    MatchModal.js      // Modal for showing match
    Pagination.js      // Pagination component
  /api
    fetchDogs.js       // API functions for interacting with Fetch API
  /styles
    App.css            // Global styles
    DogList.css        // DogList page styles
    Favorites.css      // Favorites tab styles
    MatchModal.css     // Modal styling
  App.js               // Main component that sets up routing and app structure
  index.js             // Entry point for React
  .eslintrc.json       // ESLint configuration
  .prettierrc          // Prettier configuration
  package.json         // Project dependencies and scripts
  README.md            // Project documentation
```

### How to Use
- Login: On the login screen, enter your name and email to authenticate. After authentication, you'll be redirected to the search page.
- Search Dogs: Use the Search Dogs tab to browse available dogs. You can filter by breed and view details.
- Favorites: Mark your favorite dogs by clicking the Add to Favorites button. The Favorites tab will show a list of all your favorite dogs.
- View Match: After selecting some favorite dogs, click the View Match button to see a randomly matched dog. The match will appear in a modal.

### Improvements to Consider if Given More Time
If I had more time to complete this project, I would consider implementing the following improvements:

- Additional filters: Enable filtering by age, size, or other dog attributes.
- Add more robust error handling and loading states when fetching data from the API. Display user-friendly messages if the API request fails or is loading.
- Show proper empty state messages if there are no dogs available or no favorites selected.
- Instead of managing favorites state directly in the DogList component, use React Context or a state management library like Redux to manage global state across components (favorites, user info, etc.).
- Implement lazy loading or code splitting for better performance when loading large sets of dog data.
Consider using memoization techniques or the React Suspense API for async data fetching and caching.
- Improve accessibility (a11y) by ensuring the app works with screen readers and adding ARIA roles to components for better navigation.
- Use keyboard navigation for modal interaction (i.e., close modal with Esc key, navigate buttons with arrow keys).
- Add unit tests for individual components (like DogItem, MatchModal) using a testing library like Jest and React Testing Library.
- Implement end-to-end tests with Cypress or Puppeteer to test user flows like login, search, and viewing matches.




