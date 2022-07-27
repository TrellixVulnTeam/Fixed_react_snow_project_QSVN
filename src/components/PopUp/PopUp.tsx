import React, {useState} from 'react'
import Modal from 'react-modal';
import './PopUp.scss';


Modal.setAppElement('#root')
function PopUp() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className='PopUp'>
        <button className='PopUp__button' onClick={() => setModalIsOpen(true)}> 
        <i className="fas fa-thumbs-up fa-3x"></i>Learn More
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={ {
            overlay: {
                position: 'fixed',
                top: 100,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                zIndex: 2
              },
        }}>
            <h2>Modal Title</h2>
            <p>Modal Body</p>
            <div>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
        </Modal>
    </div>
  )
}

export default PopUp