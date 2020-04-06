import React from 'react';
import { Button } from './styles';

function Primary({
    title, onClick, isSubmit, width = '100%',
}) {
    return (

        <Button
            style={{ width }}
            type={isSubmit ? 'submit' : 'button'}
            onClick={onClick}
        >
            {title}
        </Button>

    );
}

export default Primary;
