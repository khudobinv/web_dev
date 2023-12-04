import { useState } from 'react'


function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='App'>
      <button className='openFormButton button'>Открыть форму</button>
      <div className="modal">
        <h2>Заполните форму</h2>
        <button>x</button>
      </div>
    </div>
  )
}

export default App
