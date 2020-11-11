import React from 'react';
import GlobalStyle from '../styles/global';

export default function App({Component, pageProps}) {
    return(
    <>
    <Component {...pageProps} />
    <GlobalStyle />
    </>
    )
};

