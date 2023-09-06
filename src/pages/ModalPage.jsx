import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && <Modal />}
        </div>
    )
}

export default ModalPage