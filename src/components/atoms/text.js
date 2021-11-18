import React from 'react';

export const Text = (props) => { 
    return (
        <>
        <style>{`
            .text { 
                color: var(--${props.color});
                font-size: ${props.size};
            }
        `}    
        </style>
        <p className="text">{props.children}</p>
        </>
    );
}