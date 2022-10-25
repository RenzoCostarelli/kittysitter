import { useState, useEffect, useRef } from 'react';

import BtnStyles from '../../styles/Buttons.module.scss'

export default function MainCtaButton(props) {

    console.log(props);

    const text = props.text;
    const href = props.href;

    return (
        <button className={`${BtnStyles.main_cta_offset}`}>{text}</button>
    );
    
}