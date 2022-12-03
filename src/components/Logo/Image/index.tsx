import React from "react";

interface ILogoImageProps {
  size: number;
  color: string;
}

const Image: React.FC<ILogoImageProps> = (props) => {
  const logo = require("../../../assets/images/logo.png");

  return <img src={logo} width={"100%"} alt={"logo "} />;
};

export default Image;
