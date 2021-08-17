import { Container } from '@material-ui/core';
import React from 'react'
import Header from "../../components/header/header";

export default function NewsLetter() {
    return (
        <>
            <Header text="Newsletter"/>
            <Container>
            <div>
                If you want to get the latest tips, tricks and vacancies straight into your inbox, subscribe to our newsletter: 
            </div>
            <div>
                Newsletter signup
            </div>
            <div>
                Interested in sponsoring our newsletter or featuring your job vacancy? Contact us.
            </div>
            </Container>
        </>
    )
}