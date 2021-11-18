import React from 'react';
import { Text } from "../components/atoms/text";

export const ConstructionScreen = (props) => { 
    return (
        <>
        <style>{`
            html { 
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }
        `}
        </style>
        <div>
            <Text color={'primary'} size={'3rem'}>Sub0 is under construction...</Text>
        </div>
        </>
    );
}