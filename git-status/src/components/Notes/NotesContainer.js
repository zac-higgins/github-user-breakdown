import React, { useState } from 'react';
import { Button } from 'antd';

import NoteForm from './NoteForm';
import ListNotes from './ListNotes';

const NotesContainer = props => {

    const [ notes, setNotes ] = useState([{ text: 'Add notes about your favorite GiHub users!'}]);
    const [ showForm, setShowForm ] = useState(false);
    
    const addNote = note => {
        setNotes([ ...notes, {...note, id: Date.now()}]);
    };

    const deleteNote = id => {
        const updatedNotes = notes.filter((note, idx) => idx !== id);
        setNotes(updatedNotes);
    };
        
    return (
        <div>
            <h3>Notes</h3>
            <Button type='primary' onClick={() => setShowForm(true)}>Add New Note</Button>
            <ListNotes notes={notes} deleteNote={deleteNote} />
            {showForm ? <NoteForm hideForm={setShowForm} addNote={addNote} /> : null}
        </div>
    );
};

export default NotesContainer;