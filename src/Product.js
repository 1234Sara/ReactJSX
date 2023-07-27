import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Description from "./Components/Description";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Image from "./Components/Image";

const Product = () => {
  const firstName = "Sara";
  return (
    <div className="App">
      <Card style={{ width: "18rem" }} className="Card">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        {/* <Image /> */}
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          {/* <Button variant="primary">
            <Price />
          </Button> */}
          <h2>
            <Price />
          </h2>
          <div>
            <p>Hello, {firstName ? firstName : "there"}!</p>

            {/* <p>Hello, {firstName || "there"}.</p> */}
            <p>{firstName && <Image />}</p>
          </div>
        </Card.Body>
      </Card>
      {/* <div>
        <Name />
        <Price />
        <Image />
        <Description />
      </div> */}
    </div>
  );
};

export default Product;
