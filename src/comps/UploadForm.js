import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    //useState hook to store in local state
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    //Allowed file types
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        //console.log('CHANGED');

        //first file selected from e
        let selected = e.target.files[0];
        //console.log(selected);

        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Select valid file type (PNG or JPEG)')

        }
    }

    return (
        <form>
            <input type='file' onChange={changeHandler} />
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )


}

export default UploadForm;