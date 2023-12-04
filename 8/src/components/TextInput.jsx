import React from 'react';

const TextInput = ({label, placeholder}) => {
    return (
        <label htmlFor="input">
            {label}
            <input id='input' type="text" placeholder={placeholder}/>
        </label>
    );
};

export default TextInput;