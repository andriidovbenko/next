import styled from 'styled-components'

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin-top: 3rem;


    @media (max-width: 600px) {
    & {
        width: 100%;
        flex-direction: column;
    }
    }
`