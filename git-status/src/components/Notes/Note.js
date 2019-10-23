import React from 'react';
import { Button } from 'antd';
import './note.css';

const Note = props => {
    return (
        <div className='note'>
            <span className='note-text'>{props.text}</span>
            <div className="note-buttons">
                <Button onClick={() => props.enableEdit(props.noteId)}>Edit</Button>
                <Button type='danger' onClick={() => props.deleteNote(props.noteId)}>Delete</Button>
            </div>
        </div>
    );
};

export default Note;