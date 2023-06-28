import { Flex, Link, useAuthenticator, useTheme, Card, Grid, View, Text } from "@aws-amplify/ui-react";
import { color } from "@mui/system";

export function SignInFooter() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  const aws_customer_agreement = <a href="https://aws.amazon.com/agreement/">AWS Customer Agreement</a>;
  const privacy = <a href="https://aws.amazon.com/privacy/">Privacy Policy</a>;
  const cookies = <a href="https://aws.amazon.com/legal/cookies/">Cookies</a>;
  const site_term = <a href="https://aws.amazon.com/terms/">Site Terms</a>;

  return (
    <Grid
    templateColumns="1fr"
    templateRows="1rem 5rem"
    gap={tokens.space.small}
  >
    <View>
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Link onClick={toResetPassword}>Reset your password</Link>
      <Link onClick={event =>  window.location.href="https://us-west-2.quicksight.aws.amazon.com/sn/start/dashboards"}>Manager Login</Link>
    </Flex>
    </View>
    <View padding="1rem">
    <Flex justifyContent="center"  padding={`0 0 ${tokens.space.large}`}>
      <Text fontWeight={400} fontSize="0.75rem" color='#3D3F43' lineHeight="1.66" style={{ fontFamily: "Amazon Ember"}}>
      ----STEM-DEMOOO------By continuing, you agree to the {aws_customer_agreement} or other agreements for AWS services, and the {privacy}. This site uses {cookies}.  See {site_term} .
      </Text>
    </Flex>
    </View>
    </Grid>
  );  
}

