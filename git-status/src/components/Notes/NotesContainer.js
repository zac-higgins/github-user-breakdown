import React, { useState } from 'react';

import NoteForm from './NoteForm';
import Note from './Note';

const NotesContainer = props => {

    const [ notes, setNotes ] = useState([{ text: 'Add notes about your favorite GiHub users!'}]);

    const addNote = note => {}


    return (
        <div>
            Notes Container
            {notes.map((note, idx) => <Note key={idx} text={note.text} />)}
        </div>
    );
};

export default NotesContainer;