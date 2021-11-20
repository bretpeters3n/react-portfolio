import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import "./styles/Main.css";

export default function PortfolioContainer({ portfolioContent }) {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio portfolioContent={portfolioContent} />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main-container">
      <div className="container-fluid">
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <div className="container">{renderPage()}</div>
        <Footer />
      </div>
    </div>
  );
}
