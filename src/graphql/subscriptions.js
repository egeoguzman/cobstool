/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $username: String
  ) {
    onCreateCustomer(filter: $filter, username: $username) {
      id
      full_name
      company_name
      job_title
      is_technical
      email
      salesforce
      automatic_survey_sender
      createdAt
      updatedAt
      username
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $username: String
  ) {
    onUpdateCustomer(filter: $filter, username: $username) {
      id
      full_name
      company_name
      job_title
      is_technical
      email
      salesforce
      automatic_survey_sender
      createdAt
      updatedAt
      username
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $username: String
  ) {
    onDeleteCustomer(filter: $filter, username: $username) {
      id
      full_name
      company_name
      job_title
      is_technical
      email
      salesforce
      automatic_survey_sender
      createdAt
      updatedAt
      username
    }
  }
`;
