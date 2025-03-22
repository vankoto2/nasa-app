import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-800">Welcome to NASA</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Dive into the cosmos! This project showcases NASA's APIs, bringing amazing space content to your fingertips. 
        Explore the wonders of the universe with interactive features and breathtaking images.
      </p>
    </div>
  );
};

export default HomePage;
