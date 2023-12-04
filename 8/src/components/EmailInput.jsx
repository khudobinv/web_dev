import { useState } from 'react';

const EmailInput = ({label, placeholder}) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <label htmlFor="">
                {label}
                <input type="email" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
          </label>
          {!value.includes('@') && value.length > 0 && <span className='spanError'>Адрес электронной почты должен содержать '@'!</span>}
        </div>
    );
};

export default EmailInput;