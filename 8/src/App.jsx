import { useState } from 'react'
import TextInput from './components/TextInput'
import EmailInput from './components/EmailInput'
import TelInput from './components/TelInput'
import Textarea from './components/Textarea'


function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='App'>
      <button className='openFormButton button' onClick={() => setOpen(true)}>Открыть форму</button>
      <div className={`modal ${isOpen ? 'show' : ''}`}>
        <div className="modal__header">
          <h2 className='modal__header-heading'>Заполните форму</h2>
          <button className='closeButton' onClick={() => setOpen(false)}>&times;</button>
        </div>
        <form>
          <TextInput label='Ваше имя:' placeholder='Введите ваше имя...' />
          <EmailInput label='Ваш email:' placeholder='Введите ваш email...'/>
          <TelInput label='Ваш телефон:' placeholder='Введите ваш телефон...'/>
          <TextInput label='Ваше организация:' placeholder='Введите вашу организацию...' />
          <Textarea label='Ваше сообщение:' placeholder='Введите ваше сообщение...' />
          <div className="checkboxInput">
            <input type="checkbox" />
            <label htmlFor="">
                С правилами отправки формы согласен
            </label>
          </div>
          <button className='sendFormButton button'>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default App
