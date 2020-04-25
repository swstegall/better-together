import React from "react";
import ExampleComponent from "react-rounded-image";
import ExamplePhoto from "./images/example.jpg";

export const MyStatsHeader = () => {
  return (
    <div className={"pt-3 pr-3"}>
      <ExampleComponent
          image={ExamplePhoto}
          roundedSize="0"
          imageWidth="64"
          imageHeight="64"
        />
    </div>
  );
};
