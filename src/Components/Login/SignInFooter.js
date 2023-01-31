import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";
import { color } from "@mui/system";

export function SignInFooter() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Link onClick={toResetPassword}>Reset your password</Link>
      <Link href="https://eu-west-1.quicksight.aws.amazon.com/sn/dashboards/db31d222-3861-4b26-b66c-329e62a70e5a" target="_blank">Manager Login</Link>
    </Flex>
  );  
}

