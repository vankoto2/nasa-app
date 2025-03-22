import React from "react";
import Planet from "./Planet";

const HomePage: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-center space-y-6 text-[#A0AEB6]">
      <h1 className="text-4xl font-extrabold">Welcome to NASA</h1>
      <Planet />
      <p className="text-lg leading-relaxed">
        Dive into the cosmos! This project showcases NASA's APIs, bringing amazing space content to your fingertips. 
        Explore the wonders of the universe with interactive features and breathtaking images.
      </p>
    </div>
  );
};

export default HomePage;
