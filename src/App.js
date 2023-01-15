import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
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
      <SAPage u={user}/>
        <div>
        <button onClick={signOut}>Sign out</button>
        </div>
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
    Footer
  }
});