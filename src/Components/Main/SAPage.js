import { useTheme, Heading, Tabs, TabItem, Flex, Card, Grid } from "@aws-amplify/ui-react";
import { useState } from 'react';
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { PulseSurvey } from '../pulseSurvey-ui-components';
import { AddCustomers } from '../addCustomer-ui-components';
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);
Auth.configure(awsconfig);


export function SAPage(us) {
    const { tokens } = useTheme();
    const { u } = us;
    const [index, setIndex] = useState(0);
    return (
      <Grid columnGap="0.5rem" rowGap="0.5rem" templateColumns="1fr 1fr 1fr" templateRows="1fr 3fr 1fr">
        <Card columnStart="1" columnEnd="-1">
          <Heading width='30vw' level={2} > {u.attributes.name} </Heading>
        </Card>
        <Card columnStart="1" columnEnd="-1">
          <Tabs currentIndex={index} spacing="relative" justifyContent="center" onChange={(i: number) => setIndex(i)}>
            <TabItem title="Customer Controller">
              Customer Controller
            </TabItem>
            <TabItem title="Pulse Survey Preview">
              <PulseSurvey/>
            </TabItem>
            <TabItem title="Create Customer">
             <AddCustomers/>
            </TabItem>
            <TabItem title="CSAT Survey Preview">
              Tab content #3
            </TabItem>
          </Tabs>
        </Card>
      </Grid>
    );
  }