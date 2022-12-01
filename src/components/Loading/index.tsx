import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function LoadingComponent() {
  return (
    <div>
      {
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#849b87", "#849b87", "#849b87", "#849b87", "#849b87"]}
        />
      }
    </div>
  );
}
