import React, { useState } from 'react'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import Dropdown from './components/Dropdown'

const App = () => {
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option)
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' }
  ]

  return (
    <>
      <ButtonPage />
      <AccordionPage />
      <Dropdown
        options={options}
        value={selected}
        onChange={handleSelect}

      />
    </>

  )
}

export default App
