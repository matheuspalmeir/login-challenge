import React from 'react';

interface ErrorProps{
    txt: string;
}

const FormErrorMessage = (props: ErrorProps) => {
    
    return(
        <span style={{ 
            fontSize:' 10px',
            color: 'red'
        }}
        >
            {props.txt}
        </span>
    )
}

export default FormErrorMessage;