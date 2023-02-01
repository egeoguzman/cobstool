import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";
import { color } from "@mui/system";

export function SignInFooter() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Link onClick={toResetPassword}>Reset your password</Link>
      <Link style={{textDecoration: 'none', color: "black"}} href="https://us-west-2.quicksight.aws.amazon.com/sn/start/dashboards" target="_blank">Manager Login</Link>
    </Flex>
  );  
}

