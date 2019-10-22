import React from 'react';
import { Button } from 'antd';
import './note.css';

const Note = props => {
    return (
        <div className='note'>
            <span>{props.text}</span>
            <Button>Edit</Button>
            <Button type='danger'>Delete</Button>
        </div>
    );
};

export default Note;