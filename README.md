# Drop Token

Drop Token takes place on a 4x4 grid. A token is dropped along a column and said token goes to the lowest
unoccupied row of the board. A player wins when they have 4 tokens next to each other either along a row, in a column, or on a diagonal. If the board is filled, and nobody has won then the game is a draw. Each player takes a turn, starting with player 1, until the game reaches either win or draw. If a player tries to put a token in a column that is already full, that results in an error state, and the player must play again until they play a valid move.

## Tech stack

Used react as UI framework, prop-types for components props validation, axios for making service call, styled-component for styling(CSS)  and finally jest and react-test-renderer for unit testing.

## How to run?
Clone the repo. Open project folder in command window or terminal

### `yarn install` or `npm install` 
To install all dependent packages

### `yarn start` or `npm start` 
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. please use chrome.

### `yarn test`  or `npm test` 

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Screen shots

### Initial screen
![Alt text](screen-shots/initial-screen.JPG?raw=true "Initial screen")

### Start game and choose play first or not
![Alt text](screen-shots/choose-playfirst.JPG?raw=true "Start game")

### Player 1 choose to play first 
![Alt text](screen-shots/player1-startedfirst.JPG?raw=true "Player 1 started first")

### Player 1 WON!
![Alt text](screen-shots/player1-won.JPG?raw=true "Winning board")

### Game Draw!
![Alt text](screen-shots/game-draw.JPG?raw=true "Draw")

### System WON!
![Alt text](screen-shots/system-won.JPG?raw=true "Winning board")

