import React from 'react';
import Header from "../../components/header/header";
import { Container } from '@material-ui/core';


export default function Podcast() {
    // https://feeds.captivate.fm/thecodercareer/

    // https://open.spotify.com/show/7BkIsKOw8vhFOmD4ZKXwES?si=MlMD_uUkQzKvT8bHXVN2VA&dl_branch=1
    return (
        <>
            <Header text="TCC Podcast" />

            <Container>
                <div>
                    Check out The Coder Career podcast on the streaming platform of your choice!      
                </div>

            

<iframe src="https://open.spotify.com/embed/show/7BkIsKOw8vhFOmD4ZKXwES" width="100%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>            </Container>



        </>
    )
}