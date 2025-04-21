# React News App

A responsive React application that displays the most popular news articles from The New York Times. The app fetches data from the NYT API and presents it in a clean, user-friendly interface using Material-UI components.

## Features

- **Dynamic News Feed**: Fetches and displays the most popular news articles from The New York Times.
- **Responsive Design**: Optimized for desktop and mobile devices using Material-UI.
- **Loading State**: Displays a spinner while fetching data.
- **Error Handling**: Gracefully handles API errors.
- **Reusable Components**: Modular design with reusable `Card` and `Main` components.
- **Unit Testing**: Includes tests for key components using React Testing Library.

## Demo

![App Screenshot](https://via.placeholder.com/800x400)  
*Replace this with an actual screenshot of your app.*

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/news-app.git
   cd news-app

2. npm install

3. Create a .env file in the root directory and add your NYT API key:

REACT_APP_API_KEY=your-nyt-api-key

4. npm start

5. For running jest test cases: npm test

6. For running end to end cyprus test cases: npx cyprus open 

Project Structure:

src/
├── components/
│   ├── Card.js          # Reusable card component for displaying articles
│   ├── Main.js          # Main component for rendering the news feed
│   ├── NewsDetails.js   # Component for detailed article view (optional)
├── css/
│   ├── Main.css         # Styles for the Main component
├── test/
│   ├── mockdata.js      # Mock data for testing
│   ├── News.test.js     # Unit tests for the Main component
├── App.js               # Root component
├── index.js             # Entry point
├── App.css              # Global styles