import React from 'react';
import './headerBar.css';

export default function Headerbar(props) {
    const { label } = props;
    return (
        <>
            <div className="header-bar-container">
                {label}
            </div>
        </>
    )
}