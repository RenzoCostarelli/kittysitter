import { useState, useEffect, useRef } from 'react';
import Modal from '../modal_wrapper/modal_wrapper';

import BtnStyles from '../../styles/Buttons.module.scss'

export default function MainCtaButton(props) {
    const [showModal, setShowModal] = useState(false);
    console.log(props);

    const text = props.text;
    const href = props.href;

    return (
        <>
            <button className={`${BtnStyles.main_cta_offset}`} onClick={() => setShowModal(true)}
                    data-text={`${text}`}>
              
                    
                    {text}

              
            </button>
            
            <Modal show={showModal} close={() => setShowModal(false)}/>
        </>
    );

}