import { Form as FormikForm } from "formik";

import styled from "@emotion/styled";

export const Form = styled(FormikForm)`
    border: 1px solid grey;
    padding: 8px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;

    label {
        display: flex;
        flex-direction: column;
    }
`;