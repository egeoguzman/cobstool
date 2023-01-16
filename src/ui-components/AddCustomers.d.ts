/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddCustomersInputValues = {
    Field3?: string;
    Field0?: string;
    Field1?: string;
    Field2?: string;
    Field6?: string;
    Field7?: string;
    Field4?: string;
    Field5?: string;
};
export declare type AddCustomersValidationValues = {
    Field3?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field6?: ValidationFunction<string>;
    Field7?: ValidationFunction<string>;
    Field4?: ValidationFunction<string>;
    Field5?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddCustomersOverridesProps = {
    AddCustomersGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Field3?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
    Field6?: PrimitiveOverrideProps<TextFieldProps>;
    Field7?: PrimitiveOverrideProps<SelectFieldProps>;
    Field4?: PrimitiveOverrideProps<TextFieldProps>;
    Field5?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddCustomersProps = React.PropsWithChildren<{
    overrides?: AddCustomersOverridesProps | undefined | null;
} & {
    onSubmit: (fields: AddCustomersInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: AddCustomersInputValues) => AddCustomersInputValues;
    onValidate?: AddCustomersValidationValues;
} & React.CSSProperties>;
export default function AddCustomers(props: AddCustomersProps): React.ReactElement;
