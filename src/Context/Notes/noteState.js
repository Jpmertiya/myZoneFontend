import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialNotes =
        [{
            "id": "65a2cb68zxc35622e3470qw09241a",
            "title": "saving Now",
            "description": "saved successfully",
            "tag": "motivation",
            "userId": "jpmertiya57123@gmail4.com",
            "dateTime": "2024-01-13T23:12:00.75"
        }, {
            "id": "65a2czxcb6835622asde347as009241a",
            "title": "savinsadg Now",
            "description": "sasadved successfully",
            "tag": "motivasadtion",
            "userId": "jpmerasdtiya57123@gmail4.com",
            "dateTime": "2024asd-01-13T23:12:00.75"
        }, {
            "id": "65a2cb6835622zxcasde347zx009241a",
            "title": "savinsadg Now",
            "description": "sasadved successfully",
            "tag": "motivasadtion",
            "userId": "jpmerasdtiya57123@gmail4.com",
            "dateTime": "2024asd-01-13T23:12:00.75"
        }, {
            "id": "65zxca2cb6835622asde3470er09241a",
            "title": "savinsadg Now",
            "description": "sasadved successfully",
            "tag": "motivasadtion",
            "userId": "jpmerasdtiya57123@gmail4.com",
            "dateTime": "2024asd-01-13T23:12:00.75"
        }, {
            "id": "65a2cb6835622aszxcde3470df09241a",
            "title": "savinsadg Now",
            "description": "sasadved successfully",
            "tag": "motivasadtion",
            "userId": "jpmerasdtiya57123@gmail4.com",
            "dateTime": "2024asd-01-13T23:12:00.75"
        }, {
            "id": "65a2cb6zxc835622asde3470092cv41a",
            "title": "savinsadg Now",
            "description": "sasadved successfully",
            "tag": "motivasadtion",
            "userId": "jpmerasdtiya57123@gmail4.com",
            "dateTime": "2024asd-01-13T23:12:00.75"
        }, {
            "id": "65a2cb6835622asdzxce3470092th41a",
            "title": "savinsadg Now",
            "description": "sasadved successfully",
            "tag": "motivasadtion",
            "userId": "jpmerasdtiya57123@gmail4.com",
            "dateTime": "2024asd-01-13T23:12:00.75"
        }]
    const [notes, setNotes] = useState(initialNotes);

    // add note
    const addNote = (title, description, tags) => {
        console.log("adding a note")
        const note = {
            "id": "65a2cb92th41a",
            "title": "Added note Now",
            "description": "added successfully",
            "tag": "yes we did it",
            "userId": "jpmeras@gmail4.com",
            "dateTime": "2024T23:12:00.75"
        };
        setNotes(notes.concat(note))
    }

    // delete Note
    const deleteNote = (id) => {

    }

    // update Note
    const updateNote = (id) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;