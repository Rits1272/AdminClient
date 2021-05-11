import React from 'react';
import NavBar2 from '../utils/NavBar2';

const Privacy = () => {
    return (
        <div style = {{ display : 'flex', marginLeft: 50, marginRight: 50}}>
            <NavBar2/>
            <h2 style={{marginTop: 100}} align='center' align="center"> Gatisheel is a propietary application reserved only for authenticated users. Gatisheel only ask for permission of reading local storage and sending sms from the mobile device. It do not ask neither store any sensitive information of the user</h2>
        </div>
    )
}

export default Privacy;