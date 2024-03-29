import styled from 'styled-components'

export default styled.div`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
  
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  
  & h3 {
    margin: 0 0 1rem 0;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  
  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    margin: 0 auto;
  }
`
