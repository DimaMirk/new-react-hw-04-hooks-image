import {Component} from "react";
import {createPortal} from 'react-dom'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{

    componentDidMount() {
        console.log('componentDidMount')
        window.addEventListener('keydown', this.hendleKeydown)
    }

    hendleKeydown = (e) => {
            if (e.code === 'Escape') {
                this.props.onClick();
            }
    }

    hendleBackDrop = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClick();
        }   
    }

    render() {

        return createPortal(
            <div className="Overlay" onClick={this.hendleBackDrop}>
              <div className="Modal">
                  <img src={this.props.img} alt="" />
              </div>
            </div>
            , modalRoot) 
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        window.removeEventListener('keydown', this.hendleKeydown);
    }
}

export default Modal;