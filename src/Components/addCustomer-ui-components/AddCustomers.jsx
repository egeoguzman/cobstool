/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { fetchByPath, validateField } from "./utils";
import { createCustomer } from '../../graphql/mutations';
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


export default function AddCustomers(props,sa_mail) {
  
  
  const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } =
    props;
  const initialValues = {
    Field3: "",
    Field0: "",
    Field2: "",
    Field6: "",
    Field7: undefined,
    Field5: "",
    Field8: "",
  };
  const  sa_alias_mail  = sa_mail;
  console.log(props)
  const [Field3, setField3] = React.useState(initialValues.Field3);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [Field2, setField2] = React.useState(initialValues.Field2);
  const [Field6, setField6] = React.useState(initialValues.Field6);
  const [Field7, setField7] = React.useState(initialValues.Field7);
  const [Field5, setField5] = React.useState(initialValues.Field5);
  const [Field8, setField8] = React.useState(initialValues.Field8);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setField3(initialValues.Field3);
    setField0(initialValues.Field0);
    setField2(initialValues.Field2);
    setField6(initialValues.Field6);
    setField7(initialValues.Field7);
    setField5(initialValues.Field5);
    setField8(initialValues.Field8);
    setErrors({});
  };
  const validations = {
    Field3: [{ type: "Required" }],
    Field0: [{ type: "Required" }, { type: "Email" }],
    Field2: [{ type: "Required" }],
    Field6: [{ type: "Required" }],
    Field7: [],
    Field5: [{ type: "URL" }],
    Field8: []
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Field3,
          Field0,
          Field2,
          Field6,
          Field7,
          Field5,
          Field8,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        var data = {};
        if (modelFields["Field5"] !== undefined )
        {
          data = {

          full_name: modelFields["Field3"],
          email: modelFields["Field0"],
          company_name: modelFields["Field2"],
          job_title: modelFields["Field6"],
          is_technical: modelFields["Field7"],
          automatic_survey_sender: modelFields["Field8"],
          salesforce: modelFields["Field5"],
          sa_alias: props.sa_mail,
        };
      }
        else {
            data = {

            full_name: modelFields["Field3"],
            email: modelFields["Field0"],
            company_name: modelFields["Field2"],
            job_title: modelFields["Field6"],
            is_technical: modelFields["Field7"],
            automatic_survey_sender: modelFields["Field8"],
            salesforce: "", 
            sa_alias: props.sa_mail,
          };
        }
        console.log(data);
        const results = await API.graphql(graphqlOperation(createCustomer, {input: data} ),{authMode:"AMAZON_COGNITO_USER_POOLS"});
        window.location.reload(false);
      }}
      {...getOverrideProps(overrides, "AddCustomers")}
      {...rest}
    >
      <Heading
        children="Create a customer"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Customer Full Name"
        isRequired={true}
        value={Field3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field3: value,
              Field0,
              Field2,
              Field6,
              Field7,
              Field5,
              Field8,
            };
            const result = onChange(modelFields);
            value = result?.Field3 ?? value;
          }
          if (errors.Field3?.hasError) {
            runValidationTasks("Field3", value);
          }
          setField3(value);
        }}
        onBlur={() => runValidationTasks("Field3", Field3)}
        errorMessage={errors.Field3?.errorMessage}
        hasError={errors.Field3?.hasError}
        {...getOverrideProps(overrides, "Field3")}
      ></TextField>
      <TextField
        label="Customer Email"
        isRequired={true}
        value={Field0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field3,
              Field0: value,
              Field2,
              Field6,
              Field7,
              Field5,
              Field8,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></TextField>
      <TextField
        label="Company Name"
        isRequired={true}
        value={Field2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field3,
              Field0,
              Field2: value,
              Field6,
              Field7,
              Field5,
              Field8,
            };
            const result = onChange(modelFields);
            value = result?.Field2 ?? value;
          }
          if (errors.Field2?.hasError) {
            runValidationTasks("Field2", value);
          }
          setField2(value);
        }}
        onBlur={() => runValidationTasks("Field2", Field2)}
        errorMessage={errors.Field2?.errorMessage}
        hasError={errors.Field2?.hasError}
        {...getOverrideProps(overrides, "Field2")}
      ></TextField>
      <TextField
        label="Job Title"
        isRequired={true}
        value={Field6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field3,
              Field0,
              Field2,
              Field6: value,
              Field7,
              Field5,
              Field8,
            };
            const result = onChange(modelFields);
            value = result?.Field6 ?? value;
          }
          if (errors.Field6?.hasError) {
            runValidationTasks("Field6", value);
          }
          setField6(value);
        }}
        onBlur={() => runValidationTasks("Field6", Field6)}
        errorMessage={errors.Field6?.errorMessage}
        hasError={errors.Field6?.hasError}
        {...getOverrideProps(overrides, "Field6")}
      ></TextField>
      <SelectField
        label="Technical / Non-Technical"
        placeholder="Please select an option"
        value={Field7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field3,
              Field0,
              Field2,
              Field6,
              Field7: value,
              Field5,
              Field8
            };
            const result = onChange(modelFields);
            value = result?.Field7 ?? value;
          }
          if (errors.Field7?.hasError) {
            runValidationTasks("Field7", value);
          }
          setField7(value);
        }}
        onBlur={() => runValidationTasks("Field7", Field7)}
        errorMessage={errors.Field7?.errorMessage}
        hasError={errors.Field7?.hasError}
        {...getOverrideProps(overrides, "Field7")}
      >
        <option
          children="Technical"
          value="Technical"
          {...getOverrideProps(overrides, "Field7option0")}
        ></option>
        <option
          children="Non-Technical"
          value="Non-Technical"
          {...getOverrideProps(overrides, "Field7option1")}
        ></option>
      </SelectField>
      <TextField
        label="Salesforce Account Link (Optional)"
        value={Field5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field3,
              Field0,
              Field2,
              Field6,
              Field7,
              Field5: value,
              Field8,
            };
            const result = onChange(modelFields);
            value = result?.Field5 ?? value;
          }
          if (errors.Field5?.hasError) {
            runValidationTasks("Field5", value);
          }
          setField5(value);
        }}
        onBlur={() => runValidationTasks("Field5", Field5)}
        errorMessage={errors.Field5?.errorMessage}
        hasError={errors.Field5?.hasError}
        {...getOverrideProps(overrides, "Field5")}
      ></TextField>
      <SelectField
        label="Send Survey on Automated Schedule"
        placeholder="Please select an option"
        value={Field8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field3,
              Field0,
              Field2,
              Field6,
              Field7:
              Field5,
              Field8: value,
            };
            const result = onChange(modelFields);
            value = result?.Field8 ?? value;
          }
          if (errors.Field8?.hasError) {
            runValidationTasks("Field8", value);
          }
          setField8(value);
        }}
        onBlur={() => runValidationTasks("Field8", Field8)}
        errorMessage={errors.Field8?.errorMessage}
        hasError={errors.Field8?.hasError}
        {...getOverrideProps(overrides, "Field8")}
      >
        <option value="monthly">Monthly</option>
        <option value="quaterly">Quaterly</option>
        <option value="annually">Annually</option>
        <option value="biannually">Biannually</option>
    </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}            
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
