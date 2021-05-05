import styled, { css } from 'styled-components'

export default styled.button`
    display: inline-block;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem 0;
    width: 100%;
    background: transparent;
    color: darkblue;
    border: 2px solid darkblue;
    &:hover {
        color: white;
        background: darkblue;
        cursor: pointer
    }
    &:disabled, &:disabled:hover {
        color: white;
        background: gray;
        border-color: gray;
        cursor: not-allowed
    }
    ${props => props.danger && css`
        color: darkred;
        border: 2px solid darkred;
        &:hover {
            background: darkred;
        }
    `}
    ${props => props.warning && css`
        color: darkorange;
        border: 2px solid darkorange;
        &:hover {
            background: darkorange;
        }
    `}
    ${props => props.half && css`
        width: 49%
    `}
    ${props => props.third && css`
        width: 32%
    `}
`