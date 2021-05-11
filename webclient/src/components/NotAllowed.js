import React from 'react';

const NotAllowed = () => {
    return (
        <div style = {{ display : 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h2 style={{marginTop: 100, textAlign: 'center'}}>You do not have permission to view this page</h2>
        </div>
    )
}

export default NotAllowed;