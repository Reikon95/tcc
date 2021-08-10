import {React} from 'react'
import Header from '../../components/header/header'

export default function Jobs({jobs}) {
    return (
        <>
        <Header text='Jobs'/>

        <div>
            We are currently in the process of setting up a job board, focused on companies keen to give people a start in tech.
            For a limited time, you can advertise on our board. Please get in touch for details.
        </div>
        </>
    )
}