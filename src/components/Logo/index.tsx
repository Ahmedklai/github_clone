import React from "react";
import styled from "styled-components";
import LogoImage from "../Logo/Image";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ILogoProps {
  title: {
    size: number;
    color: string;
    text: string;
  };
  image: {
    size: number;
    color: string;
  };
}

const Logo = (props: ILogoProps) => {
  const { image, title } = props;

  return (
    <Section>
      <LogoImage {...image} />
    </Section>
  );
};

export default Logo;
