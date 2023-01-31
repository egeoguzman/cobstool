/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone_number
      full_name
      alias
      createdAt
      updatedAt
      username
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone_number
        full_name
        alias
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      full_name
      company_name
      job_title
      is_technical
      email
      salesforce
      automatic_survey_sender
      sa_alias
      createdAt
      updatedAt
      username
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        full_name
        company_name
        job_title
        is_technical
        email
        salesforce
        automatic_survey_sender
        sa_alias
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
