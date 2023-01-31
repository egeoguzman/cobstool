import { useState, useEffect } from "react";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import {
  useTheme,
  Heading,
  Tabs,
  TabItem,
  Flex,
  Card,
  Grid,
  Table,
  Image,
  Link,
  View,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  ThemeProvider,
  Theme,
  Button,
  Alert,
} from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { PulseSurvey } from "../pulseSurvey-ui-components";
import { AddCustomers } from "../addCustomer-ui-components";
import pulsesurveyqr from "../../Images/pulse-survey-qr.png";
import { listCustomers } from "../../graphql/queries";

//import { Customertable } from 'Users/rachowa/cobstool/src/Components/Customercontroller-ui-components/Customertable';
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const theme: Theme = {
  name: "table-theme",
  tokens: {
    components: {
      table: {
        row: {
          hover: {
            backgroundColor: { value: "{colors.orange.20}" },
          },

          striped: {
            backgroundColor: { value: "{colors.orange.10}" },
          },
        },

        header: {
          color: { value: "{colors.orange.80}" },
          fontSize: { value: "{fontSizes.xl}" },
        },

        data: {
          fontWeight: { value: "{fontWeights.semibold}" },
        },
      },
    },
  },
};

export function SAPage(us) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const customerData = await API.graphql(graphqlOperation(listCustomers));
      const customerList = customerData.data.listCustomers.items;
      console.log("customers", customerList);
      setCustomers(customerList);
    } catch (error) {
      console.log("error on fetching customers", error);
    }
  };

  const items = [];
        for (const customer of customers) {
            items.push(<TableRow>
                <TableCell> {customer.full_name} </TableCell>  
                <TableCell> {customer.email} </TableCell>  
                <TableCell> {customer.company_name}</TableCell>
                <TableCell> {customer.job_title}</TableCell>
                <TableCell> {customer.is_technical}</TableCell>
                <TableCell> {customer.salesforce}</TableCell>
                <TableCell> {customer.automatic_survey_sender}</TableCell>
                <TableCell> <Button
                        variation="primary"
                        size="small"
                        loadingText="Please wait while we redirect you :) "
                        onClick={() => alert("Send Survey")}
                        ariaLabel=""
                      >
                        Send Survey
                      </Button></TableCell>
                </TableRow>)
        }

  // console.log(customers)
  const { tokens } = useTheme();
  const { u } = us;
  const [index, setIndex] = useState(0);
  return (
    <Grid columnGap="0.5rem" rowGap="0.5rem" templateColumns="1fr 1fr 1fr">
      <Card columnStart="1" columnEnd="-1">
        <Heading width="30vw" level={2}>
          {" "}
          {u.attributes["custom:Full-Name"]}{" "}
        </Heading>
      </Card>
      <Card columnStart="1" columnEnd="-1">
        <Tabs
          currentIndex={index}
          spacing="relative"
          justifyContent="center"
          onChange={(i: number) => setIndex(i)}
        >
          <TabItem title="My Customers">
            <br></br>
            <Alert
              variation="success"
              isDismissible={true}
              hasIcon={true}
              heading="Success!!"
            >
              One of your customers has completed your survey, click the button
              below to see how many have been completed to date
              <Button
                isFullWidth={true}
                variation="primary"
                size="small"
                loadingText="Loading.... "
                onClick={() => alert("5 out of 10 surveys have been completed")}
                ariaLabel=""
              >
                Click me!
              </Button>
            </Alert>

            <br />

            <ThemeProvider theme={theme} colorMode="light">
              <Table highlightOnHover variation="striped" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell as="th">Customer Name</TableCell>
                    <TableCell as="th">Email</TableCell>
                    <TableCell as="th">Company</TableCell>
                    <TableCell as="th">Job Title</TableCell>
                    <TableCell as="th">Technical / Non-Technical</TableCell>
                    <TableCell as="th">Salesforce Account Link</TableCell>
                    <TableCell as="th">Automatic Sending</TableCell>
                    <TableCell as="th">Send Survey Now</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items}
                </TableBody>
              </Table>
            </ThemeProvider>
          </TabItem>
          <TabItem title="Create Customer">
            <AddCustomers />
          </TabItem>
          <TabItem title="Pulse Survey Preview">
            <Grid templateColumns="2fr 1fr" gap={tokens.space.small}>
              <Card columnStart="1" columnEnd="2">
                <PulseSurvey />
              </Card>
              <Card columnStart="2" columnEnd="-1">
                <Image
                  alt="pulse-survey-qr"
                  src={pulsesurveyqr}
                  padding={tokens.space.medium}
                />
                <Link
                  href="https://dev.d2z7h9t7m3t599.amplifyapp.com"
                  color="#007EB9"
                  objectFit="cover"
                >
                  https://dev.d2z7h9t7m3t599.amplifyapp.com
                </Link>
              </Card>
            </Grid>
          </TabItem>
          <TabItem title="CSAT Survey Preview">Tab content #3</TabItem>
        </Tabs>
      </Card>
    </Grid>
  );
}
