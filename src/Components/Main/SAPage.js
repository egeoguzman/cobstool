import { useTheme, Heading, Tabs, TabItem, Card, Grid, Image, Link, } from "@aws-amplify/ui-react";
import { useState, useEffect } from 'react';
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { View } from "@aws-amplify/ui-react";
import { PulseSurvey } from '../pulseSurvey-ui-components';
import { AddCustomers } from '../addCustomer-ui-components';
import awsconfig from "../../aws-exports";
import pulsesurveyqr from '../../Images/pulse-survey-qr.png';
import { listCustomers } from '../../graphql/queries';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const theme: Theme = {
  name: 'table-theme',
  tokens: {
    components: {
      table: {
        row: {
          hover: {
            backgroundColor: { value: '{colors.orange.20}' },
          },

          striped: {
            backgroundColor: { value: '{colors.orange.10}' },
          },
        },

        header: {
          color: { value: '{colors.orange.80}' },
          fontSize: { value: '{fontSizes.xl}' },
        },

        data: {
          fontWeight: { value: '{fontWeights.semibold}' },
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
          console.log('song list', customerList);
          setCustomers(customerList);
      } catch (error) {
          console.log('error on fetching customers', error);
      }
  };

    // console.log(customers)
    const { tokens } = useTheme();
    const { u } = us;
    const [index, setIndex] = useState(0);
    return (
      <Grid columnGap="0.5rem" rowGap="0.5rem" templateColumns="1fr 1fr 1fr">
        <Card columnStart="1" columnEnd="-1">
          <Heading width='30vw' level={2} > {u.attributes['custom:Full-Name']} </Heading>         
        </Card>
        <Card columnStart="1" columnEnd="-1">
          <Tabs currentIndex={index} spacing="relative" justifyContent="center" onChange={(i: number) => setIndex(i)}>
            <TabItem title="Customer Controller">
              Customer Controller
            </TabItem>
            <TabItem title="Create Customer">
             <AddCustomers/>
            </TabItem>
            <TabItem title="Pulse Survey Preview">
              <Grid templateColumns="2fr 1fr" gap={tokens.space.small}>
                  <Card columnStart="1" columnEnd="2"><PulseSurvey/></Card>
                  <Card columnStart="2" columnEnd="-1">
                    <Image alt="pulse-survey-qr" src={pulsesurveyqr} padding={tokens.space.medium}/>
                    <Link href="https://dev.d2z7h9t7m3t599.amplifyapp.com" color="#007EB9" objectFit="cover">https://dev.d2z7h9t7m3t599.amplifyapp.com</Link>                
                  </Card>
              </Grid>
              
            </TabItem>
            <TabItem title="CSAT Survey Preview">
              Tab content #3
            </TabItem>
          </Tabs>
        </Card>
      </Grid>
    );
  }