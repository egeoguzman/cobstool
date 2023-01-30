import { Amplify, Auth } from "aws-amplify";
import { useTheme, Heading, Tabs, TabItem, Flex, Card, Grid, Image, Link, Button, CheckboxField, TextField } from "@aws-amplify/ui-react";
import { withAuthenticator, useAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import { Header } from "./Components/General/Header";
import { Footer } from "./Components/General/Footer";
import { SignInHeader } from "./Components/Login/SignInHeader";
import { SignInFooter } from "./Components/Login/SignInFooter";
import { SAPage } from "./Components/Main/SAPage";
import "./styles.css";

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
Auth.configure(awsconfig);


export function App({ signOut, user }) {
  return (
    <main>
      <div>
      <Flex justifyContent="flex-end">
      <Button onClick={signOut}>Sign Out</Button>
      </Flex> 
      </div>
      <div>
      <SAPage u={user}/>
      </div>
    </main>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    SignUp: {
      FormFields() {
        const { validationErrors } = useAuthenticator();

        return (
          <>
            
            <Authenticator.SignUp.FormFields />

            <TextField
              //errorMessage={validationErrors.acknowledgement as string}
              placeholder="Enter Your Alias"
              label="Alias"
              name="custom:Alias"
              errorMessage="Please enter your AWS alias"
            />
            <TextField
              //errorMessage={validationErrors.acknowledgement as string}
              placeholder="Enter Your Full Name"
              label="Full Name"
              name="custom:Full-Name"
              errorMessage="Please enter your Full Name"
            />
          </>
        );
      },
    },
    Footer
  }
});