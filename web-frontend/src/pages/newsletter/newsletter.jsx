import { Container } from '@material-ui/core';
import React from 'react'
import Header from "../../components/header/header";

export default function NewsLetter() {
    const signupIframeStyle = {
        border: '1px solid #EEE',
        background: 'white'
    }
    return (
        <>
            <Header text="Newsletter"/>
            <Container>
            <div>
                If you want to get the latest tips, tricks and vacancies straight into your inbox, subscribe to our newsletter: 
            </div>
            <div>
<iframe src="https://thecodercareer.substack.com/embed" width="480" height="320" style={signupIframeStyle} frameborder="0" scrolling="no"></iframe>
            </div>
            <div>
                Interested in sponsoring our newsletter or featuring your job vacancy? Contact us.
            </div>
        
            </Container>
        </>
    )
}