/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SACSATInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type SACSATValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SACSATOverridesProps = {
    SACSATGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<SelectFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SACSATProps = React.PropsWithChildren<{
    overrides?: SACSATOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SACSATInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: SACSATInputValues) => SACSATInputValues;
    onValidate?: SACSATValidationValues;
} & React.CSSProperties>;
export default function SACSAT(props: SACSATProps): React.ReactElement;
