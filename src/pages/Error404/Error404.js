import React from "react";

export default function Error404(){
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            color: '#496DDB',
            fontSize: '2rem',
            fontFamily: 'monospace',
        }}>
            <h1>Error 404, Page not found</h1>
        </div>
    )
}