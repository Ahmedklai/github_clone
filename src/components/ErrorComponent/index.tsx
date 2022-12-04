import React from "react";
import { Section } from "../../pages/Profile/styles";
import logo from "../../assets/images/logo_error.png";
import { ButtonComponent } from "../Button/index";
import { useNavigate } from "react-router-dom";
export default function ErrorComponent() {
  const navigate = useNavigate();
  const handleSubmit = (event: { preventDefault: () => void }) => {
    // 👇️ redirect to Home
    navigate("/");
  };

  return (
    <Section>
      <h1>An Error occured please try again</h1>
      <img width={"90%"} src={logo} alt={"error logo"} />
      <form onSubmit={handleSubmit}>
        <ButtonComponent disabled={false} value="Go Back To Home Page" />
      </form>
    </Section>
  );
}

