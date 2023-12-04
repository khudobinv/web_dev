import React, { useState } from 'react';

const TelInput = ({label, placeholder}) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <label htmlFor="">
            {label}
            <input type="tel" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
          </label>
          {!value.startsWith('+7') && !value.startsWith('8') && value.length > 0 && <span className='spanError'>Номер телефона должен начинаться с +7 или с 8!</span>}
        </div>
    );
};

export default TelInput;