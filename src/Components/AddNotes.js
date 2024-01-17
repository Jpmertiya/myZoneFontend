import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext';
const AddNotes = () => {
    const contex = useContext(noteContext)

    const handleClick = (e) => {
        e.preventDefault();
        contex.addNote(notes);
    }
    const [notes, setNotes] = useState({ "title": "", "description": "", "tag": "" })
    const onChange = (e) => {
        setNotes({ ...notes, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" id="title" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea className="form-control" id='description' name='description' onChange={onChange} rows={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Tags</label>
                    <input type="text" name='tag' className="form-control" id="tag" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNotes;
