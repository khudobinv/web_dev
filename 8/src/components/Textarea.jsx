import React from 'react';

const Textarea = ({label, placeholder}) => {
    return (
        <div>
            <label htmlFor="">
                {label}
                <textarea placeholder={placeholder}></textarea>
            </label>  
        </div>
    );
};

export default Textarea;