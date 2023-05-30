import React from 'react';

const CryptoSummary = (props: any) => {
    return <p>{props.crypto.name + ' $' + props.crypto.current_price}</p>
};

export default CryptoSummary;