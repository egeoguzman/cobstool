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
  SearchField,
} from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { PulseSurvey } from "../pulseSurvey-ui-components";
import { AddCustomers } from "../addCustomer-ui-components";
import pulsesurveyqr from "../../Images/pulse-survey-qr.png";
import { listCustomers } from "../../graphql/queries";
import Swal from 'sweetalert2';
import{ QRCode, QRCodeCanvas} from "qrcode.react";
import * as moment from 'moment';

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
  const { tokens } = useTheme();
  const { u } = us;
  const [index, setIndex] = useState(0);
  const sa_mail = u.attributes["email"];
  const token = u.signInUserSession.idToken.jwtToken
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const customerData = await API.graphql(graphqlOperation(listCustomers));
      const customerList = customerData.data.listCustomers.items;
      //console.log("customers", customerList);
      setCustomers(customerList);
    } catch (error) {
      console.log("error on fetching customers", error);
    }
  };


  const fetchSurveyResults = async () => {
    try {
      const customerData = await API.graphql(graphqlOperation(listCustomers));
      const customerList = customerData.data.listCustomers.items;
      //console.log("customers", customerList);
      setCustomers(customerList);
    } catch (error) {
      console.log("error on fetching customers", error);
    }
  };

  const items = [];
        for (const customer of customers) {

            items.push(              
              <TableRow>
                <TableCell> {customer.full_name} </TableCell>  
                <TableCell> {customer.email} </TableCell>  
                <TableCell> {customer.company_name}</TableCell>
                <TableCell> {customer.job_title}</TableCell>
                <TableCell> {customer.is_technical}</TableCell>
                <TableCell> {customer.salesforce}</TableCell>
                <TableCell> {customer.sa_alias}</TableCell>
                <TableCell> {customer.automatic_survey_sender}</TableCell>
                <TableCell> <Button
                        variation="primary"
                        size="small"
                        ariaLabel=""
                        loadingText="Please wait while we redirect you :) "
                        onClick={async (event) => {
                          event.preventDefault()

                          var url = new URL('https://dev.d2z7h9t7m3t599.amplifyapp.com')
                          url.searchParams.append('sa_email', customer.sa_alias)
                          url.searchParams.append('customer_email', customer.email)

                          let data_date_comparison = {
                            sa_mail_query: u.attributes["email"],
                            customer_mail_query: customer.email,
                          };


                          let dateComparison_res = await fetch(
                            "https://r3i2ryzl68.execute-api.us-west-2.amazonaws.com/dev/cobstoolserverlesstimecomparison",
                           { 
                            //mode: "no-cors",
                            method: "POST",
                            headers: {
                              Authorization: token,
                            },
                            // headers: {
                            //   Accept: "application/json",
                            //   "Content-Type": "application/json",
                            //   'Access-Control-Allow-Origin': '*',
                            //   'Access-Control-Allow-Headers': 'Content-Type',},
                            body: JSON.stringify(data_date_comparison),
                          });

                          const dateComparison_results = await dateComparison_res.json();
                          if (dateComparison_results.body.updatedAt.length == 0){
                            console.log("BOS LAA")
                            let data = {
                              sa_name: u.attributes["custom:Full-Name"],
                              customer_name: customer.full_name,
                              customer_email: customer.email,
                              survey_link: url.toString(),
                            };
                            let mailSend_res = await fetch(
                              "https://r3i2ryzl68.execute-api.us-west-2.amazonaws.com/dev/cobstoolserverlessemail",
                             { 
                              //mode: "no-cors",
                              method: "POST",
                              headers: {
                                Authorization: token,
                              },
                              // headers: {
                              //   Accept: "application/json",
                              //   "Content-Type": "application/json",
                              //   'Access-Control-Allow-Origin': '*',
                              //   'Access-Control-Allow-Headers': 'Content-Type',},
                              body: JSON.stringify(data),
                            });
                            const mailSend_results = await mailSend_res.json();
                            console.log(mailSend_results)
                            Swal.fire({
                              position: 'top',
                              icon: 'success',
                              title: 'Reminder has been sent!',
                              showConfirmButton: false,
                              timer: 2000
                            });

                          }

                          else{
                            const compareTime = new Date(dateComparison_results.body.updatedAt);
                            const upTime = moment();
                            const downTime = moment().subtract(6, 'months');
                            
                            if (compareTime >= downTime && compareTime <= upTime) {
                              Swal.fire({
                                position: 'top',
                                icon: 'error',
                                text: 'Customer has already completed the survey within the last 6 months!',
                                showConfirmButton: false,
                                timer: 4000
                              });
                            }
                            else {
  
                              let data = {
                                sa_name: u.attributes["custom:Full-Name"],
                                customer_name: customer.full_name,
                                customer_email: customer.email,
                                survey_link: url.toString(),
                              };
                              let mailSend_res = await fetch(
                                "https://r3i2ryzl68.execute-api.us-west-2.amazonaws.com/dev/cobstoolserverlessemail",
                               { 
                                //mode: "no-cors",
                                method: "POST",
                                headers: {
                                  Authorization: token,
                                },
                                // headers: {
                                //   Accept: "application/json",
                                //   "Content-Type": "application/json",
                                //   'Access-Control-Allow-Origin': '*',
                                //   'Access-Control-Allow-Headers': 'Content-Type',},
                                body: JSON.stringify(data),
                              });
                              const mailSend_results = await mailSend_res.json();
    
                              Swal.fire({
                                position: 'top',
                                icon: 'success',
                                title: 'Reminder has been sent!',
                                showConfirmButton: false,
                                timer: 2000
                              });
                            }
                            
                          }

                        }
                      }     
                      >
                        Send Survey
                      </Button></TableCell>
                </TableRow>)
        };

  

  let url_sa = new URL("https://dev.d2z7h9t7m3t599.amplifyapp.com");
  url_sa.searchParams.append('sa_email', sa_mail);
  const survey_link_sa = url_sa.toString();


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
                onClick={async (event) => {
                  event.preventDefault()
                  let data = {
                    sa_alias_query: u.attributes["email"],
                  };
                  let surveyCount_res = await fetch(
                    "https://r3i2ryzl68.execute-api.us-west-2.amazonaws.com/dev/cobstoolserverlesssurveycount",
                   { 
                    //mode: "no-cors",
                    method: "POST",
                    headers: {
                      Authorization: token,
                    },
                  
                    // headers: {
                    //   Accept: "application/json",
                    //   "Content-Type": "application/json",
                    //   'Access-Control-Allow-Origin': '*',
                    //   'Access-Control-Allow-Headers': 'Content-Type',},
                    body: JSON.stringify(data),
                  });
                  const surveyCount_results = await surveyCount_res.json();
                  const surveyCount_results_parsed = surveyCount_results.body;
                  const arr_not_filled_emails = surveyCount_results_parsed.not_filled_emails.map(({S}) => (S));
                  const str_not_filled_emails = arr_not_filled_emails.toString();
                  var count_text = (surveyCount_results_parsed.not_filled_count > 0) ? `${surveyCount_results_parsed.not_filled_count} / ${surveyCount_results_parsed.total_customers} of your customers have not filled the survey yet: \n ${str_not_filled_emails}` : "All of your customers have already submitted the survey";
                  Swal.fire({
                    position: 'top',
                    icon: 'info',
                    text: count_text,
                    showConfirmButton: false,
                    timer: 10000
                  });

                }
              } 
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
                    <TableCell as="th">Solution Architect</TableCell>
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
            <AddCustomers sa_mail={sa_mail} />
          </TabItem>
          <TabItem title="Ongoing Engagement Feedback Preview">
            <Grid templateColumns="2fr 1fr" gap={tokens.space.small}>
              <Card columnStart="1" columnEnd="2">
                <PulseSurvey/>
              </Card>
              <Card columnStart="2" columnEnd="-1">
                {/* <Image
                  alt="pulse-survey-qr"
                  src={pulsesurveyqr}
                  padding={tokens.space.medium}
                /> */}
                <Flex>
                <QRCodeCanvas
                  level="H"
                  size={300}
                  value={survey_link_sa}
                  level={"H"}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '25%',
                    marginTop: '13%',
                    
                  }}/>
                </Flex>
                  <hr/>
                <Link
                  href={survey_link_sa}
                  color="#007EB9"
                  objectFit="cover"
                >
                  {survey_link_sa}
                </Link>
              </Card>
            </Grid>
          </TabItem>
        </Tabs>
      </Card>
    </Grid>
  );
}