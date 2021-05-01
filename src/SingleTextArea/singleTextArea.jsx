import React from 'react';
import './singleTextArea.css';

export default function TextAreaBox(props) {

    const { value, onChange } = props;
    return (
        <>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={5} className="full-width-textbox " />
        </>
    )
}

