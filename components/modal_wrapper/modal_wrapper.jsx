import { useState, useEffect, useRef } from 'react';
import ModalStyles from '../../styles/Modal.module.scss'

export default function Modal(props) {

    console.log(props.show)
    
    return(
        <div className={`${ModalStyles.modal_wrapper} ${props.show && ModalStyles.visible} ${props.close && ModalStyles.closed}`}>
            <h1>HOLA MODAL</h1>
        </div>
    )
}