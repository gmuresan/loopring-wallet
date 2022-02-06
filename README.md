# Constants
1. Update NFT_CONTRACT_ADDRESS in src/constants.ts with any valid ERC-721 contract address


# Next steps
1. Improve table render performance
  1. Use useMemo to optimize unnecessary rerenders
  2. Add paging/infinite scroll to not render all rows at once
2. Use a thunk to connect chain API calls with store and put token results into store instead of querying at the component level
3. Finish implementing all the typescript type annotations
4. Use store for wallet connection state
5. Check for wallet connection on initial render
6. Add unit tests
7. Responsive styling
8. Add routing for additional views/features

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

