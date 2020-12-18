import React from 'react';
import GlobalStyle from '../styles/global';

export default function App({Component, pageProps}) {
    return(
    <>
        <Component {...pageProps} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <GlobalStyle />
    </>
    )
};

