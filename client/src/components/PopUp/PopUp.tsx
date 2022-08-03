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
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={
           {
            overlay: {
                position: 'fixed',
                top: 100,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2
              },
              content: {
                background: '#F5FFFA'
              }
        }}>
          <div>
                <button className='PopUp__buttonClose' onClick={() => setModalIsOpen(false)}>x</button>
            </div>
            <h2 className='PopUp__Title'>Modal Title</h2>
            <p className='PopUp__Paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src='https://th.bing.com/th/id/OIP.Pymbm2m-CXOgC_dpouEJowHaFc?pid=ImgDet&rs=1' alt=''></img>
        </Modal>
    </div>
  )
}

export default PopUp