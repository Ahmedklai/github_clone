import React from "react";
import { Section } from "../../pages/Profile/styles";
import { InputSubmit } from "../../styles/GlobalStyles";
import logo from "../../assets/images/logo_error.png";

export default function ErrorComponent() {
  return (
    <Section>
      <h1>
        AN ERROR HAS OCCURED WHILE FETCHING DATA FROM GITHUB API , PLEASE TRY
        AGAIN AND BE SURE OF THE VALIDITY OF YOUR TOKEN{" "}
      </h1>
      <img width={1000} src={logo} />
      <InputSubmit
        type="submit"
        value="Go Back To Home Page"
        //  disabled={!!(error.login || error.password)}
      />
    </Section>
  );
}

// export default function index() {
//   return (
//     <Section>
//       <h1>
//         AN ERROR HAS OCCURED WHILE FETCHING DATA FROM GITHUB API , PLEASE TRY
//         AGAIN AND BE SURE OF THE VALIDITY OF YOUR TOKEN{" "}
//       </h1>
//       <img width={1000} src={logo} />
//       <InputSubmit
//         type="submit"
//         value="Go Back To Home Page"
//         //  disabled={!!(error.login || error.password)}
//       />
//     </Section>
//   );
// }
