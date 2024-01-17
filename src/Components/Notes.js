import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';
function Notes() {
    const contex = useContext(noteContext)
    return (
        <div className="row my-3">
            <h1>All Notes</h1>
            {contex.notes.map((note) => {
                return <NoteItem key={note.id} note={note} />;
            })}
        </div>
    )
}

export default Notes
