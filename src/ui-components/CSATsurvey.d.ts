/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CSATsurveyInputValues = {
    Field2?: string;
    Field1?: string;
    Field0?: string;
};
export declare type CSATsurveyValidationValues = {
    Field2?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CSATsurveyOverridesProps = {
    CSATsurveyGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Field2?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field0?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CSATsurveyProps = React.PropsWithChildren<{
    overrides?: CSATsurveyOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CSATsurveyInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: CSATsurveyInputValues) => CSATsurveyInputValues;
    onValidate?: CSATsurveyValidationValues;
} & React.CSSProperties>;
export default function CSATsurvey(props: CSATsurveyProps): React.ReactElement;
