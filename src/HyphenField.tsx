import { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import React from "react";
import "./hyphenfield.css";

const HyphenField: React.FC = () => {
  return (
    <div>
      <div className="hyphen-field text-center">
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
      </div>
      <div className="hyphen-field text-center">
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
        <FlipHyphen />
      </div>
    </div>
  );
};

const FlipHyphen: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <span
      style={{ fontSize: 30 }}
      onMouseEnter={() => flip()}
      onMouseLeave={() => flip()}
    >
      {flipped ? "/" : "-"}
    </span>
  );
};

export default HyphenField;
