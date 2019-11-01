import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '3px solid red',
        textAlign: 'center',
        color: 'white',
        background: 'black'
    };

    return(
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;