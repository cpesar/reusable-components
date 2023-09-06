import React, { useState, useRef, useEffect } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)
    // const divEl = useRef()

    // useEffect(() => {
    //     const handleCloseModal = (event) => {
    //         // console.log(divEl.current)
    //         if (!divEl.current) {
    //             return
    //         }
    //         if (!divEl.current.contains(event.target)) {
    //             setShowModal(false)
    //         }
    //     }
    //     document.addEventListener('click', handleCloseModal, true)

    //     return () => {
    //         document.removeEventListener('click', handleCloseModal)
    //     }
    // }, [])


    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleClick = () => {
        setShowModal(true)
    }

    const actionBar =
        <div>
            <Button onClick={handleCloseModal} primary>I accept</Button>
        </div>

    const modal =
        <Modal onClose={handleCloseModal} actionBar={actionBar}>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </Modal>

    return (
        <div className="relative ">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage