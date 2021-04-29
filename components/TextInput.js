import { useField } from 'formik'
import styled from 'styled-components'

const StyledTextInput = styled.div`
    color: darkblue;
    width: 100%;
    input {
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0.5rem 0;
        width: 100%;
        background: transparent;
        color: darkblue;
        border: 1px solid darkblue;
        width: 100%;
    }
    .error {
        color: darkred;
        font-size: 12px
    }
`;

export default ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <StyledTextInput>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field}{...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </StyledTextInput>
    )
}