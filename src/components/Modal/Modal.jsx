import {createPortal} from 'react-dom'

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClick,img}) {

const hendleBackDrop = (e) => {
        if (e.currentTarget === e.target) {
            onClick();
        }   
    }
    
return createPortal(
            <div className="Overlay" onClick={hendleBackDrop}>
              <div className="Modal">
                  <img src={img} alt="" />
              </div>
            </div>
            , modalRoot) 
    
};