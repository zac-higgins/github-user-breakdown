import React from 'react';

import Note from './Note';

const ListNotes = props => {
    return (
        props.notes.map((note, idx) => <Note key={idx} noteId={idx} deleteNote={props.deleteNote} text={note.text} />)
    );
};

export default ListNotes;