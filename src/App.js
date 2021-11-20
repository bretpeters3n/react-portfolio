import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

// Import our list of users from users.js
import portfolioContent from "./portfolioContent";

const App = () => <PortfolioContainer portfolioContent={portfolioContent} />;

export default App;
