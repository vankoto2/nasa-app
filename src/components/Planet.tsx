import "./Planet.css";

const Planet = () => {
  return (
    <div className="flex justify-center">
      <div className="scene">
        <div className="wrapper">
          <div className="globe">
            <span className="ring"></span>
            <span className="ring"></span>
            <span className="ring"></span>
            <span className="ring"></span>
            <span className="ring"></span>
            <span className="ring"></span>
            <span className="ring"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;