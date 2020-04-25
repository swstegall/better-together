import React from "react";
import ExampleComponent from "react-rounded-image";
import ExamplePhoto from "./images/example.jpg";

export const MyStatsHeader = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <h1>
        My Stats
      </h1>
      <div>
        <ExampleComponent
          image={ExamplePhoto}
          roundedSize="0"
          imageWidth="64"
          imageHeight="64"
        />
      </div>
    </div>
  );
};
