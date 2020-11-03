import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( 
        () => {
            //REFERENCES (WHERE FILES SHOULD SAVE)
            const storageRef = projectStorage.ref(file.name)

            //PUT METHOD TO UPLOAD
            storageRef.put(file).on('state_changed', (snap) => {
                //SET PROGRESS
                let percentage = (snap.bytesTransferred / snap.totalBytes )*100
                setProgress(percentage);
                //SET ERROR
            }, (err)=>{
                setError(err);
                //SET URL
            }, async () => {
                const url = await storageRef.getDownloadURL();
                setUrl(url);
            })

        }, [file])
        //return all values
    return { progress, url, error }

}

export default useStorage;