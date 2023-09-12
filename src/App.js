import React from "react";
import "./styles.css";
import cn from "classnames";

function App() {
  return (
    <main>
      <div className="moon" />
      <div className="content-container">
        <div className="santa-container">
          <SantaLeg />
          <SantaLeg inverted />
        </div>
        <div className="chimney-container">
          <div className="chimney-top" />
          <div className="chimney">
            {[...Array(4).keys()].map((index) => {
              return (
                <BrickRow
                  offset={index % 2 === 0 ? "offset-even" : "offset-odd"}
                  isTopRow={index === 0}
                  isBottomRow={index === 3}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="roof" />
    </main>
  );
}

const BrickRow = ({ offset, isTopRow, isBottomRow }) => {
  return (
    <div className={`brick-row ${offset}`}>
      {[...Array(6).keys()].map((index) => {
        return (
          <Brick
            key={index}
            isTopBrick={isTopRow}
            isBottomBrick={isBottomRow}
          />
        );
      })}
    </div>
  );
};

const Brick = ({ isTopBrick, isBottomBrick }) => {
  return (
    <div
      className={cn("brick", {
        "top-brick": isTopBrick,
        "bottom-brick": isBottomBrick
      })}
    ></div>
  );
};

const SantaLeg = ({ inverted }) => {
  return (
    <div className={`leg-container ${inverted ? "leg2" : "leg1"}`}>
      <div className="foot boot-color">
        <div className="boot-color curve" />
      </div>
      <div className="ankle boot-color" />
      <div className="pant-cuff" />
      <div className="pant" />
    </div>
  );
};

export default App;
