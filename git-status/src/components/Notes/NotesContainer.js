import React, { useState } from 'react';
import { Button } from 'antd';

import NoteForm from './NoteForm';
import ListNotes from './ListNotes';

const NotesContainer = props => {

    const [ notes, setNotes ] = useState([{ text: 'Add notes about your favorite GiHub users!'}]);
    const [ showForm, setShowForm ] = useState(false);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ noteIdToEdit, setNoteIdToEdit ] = useState();
    
    const addNote = note => {
        setNotes([ ...notes, note]);
    };

    const deleteNote = id => {
        const updatedNotes = notes.filter((note, idx) => idx !== id);
        setNotes(updatedNotes);
    };

    const enableEdit = id => {
        if (!showForm) setShowForm(true);
        setIsEditing(true);
        setNoteIdToEdit(id)
    }

    const updateNote = note => {
        const updatedNotes = notes.map((currentNote, idx) => idx !== noteIdToEdit ? currentNote : note);
        setNotes(updatedNotes);
    };
        
    return (
        <div>
            <h3>Notes</h3>
            <Button type='primary' onClick={() => {
                setShowForm(true)
                setIsEditing(false)
                }
            }>Add New Note</Button>
            <ListNotes notes={notes} deleteNote={deleteNote} enableEdit={enableEdit} />
            {showForm ? <NoteForm showForm={setShowForm} addNote={addNote} isEditing={isEditing} updateNote={updateNote} /> : null}
        </div>
    );
};

export default NotesContainer;