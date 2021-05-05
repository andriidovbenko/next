import Head from 'next/head'
import styled from 'styled-components'

const LayoutContainer = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title a {
        color: #0070f3;
        text-decoration: none;
    }
    
    .title a:hover,
    .title a:focus,
    .title a:active {
        text-decoration: underline;
    }

    .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
    }

    .main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 800px;
    }

    .footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer img {
        margin-left: 0.5rem;
    }

    .footer a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        height: 1em;
    }
`;

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Head>
                <title>CMS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
            <div>{children}</div>
            </main>
            <footer className="footer">
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
                </a>
            </footer>
        </LayoutContainer>
    )
}

export default Layout