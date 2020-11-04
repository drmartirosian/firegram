import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( 
        () => {
            //REFERENCES (WHERE FILES SHOULD SAVE)
            const storageRef = projectStorage.ref(file.name)
            //COLLECTING IMAGE URLS TO DISPLAY IN APP
            const collectionRef = projectFirestore.collection('images');

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
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt })
                setUrl(url);
            })

        }, [file])
        //return all values
    return { progress, url, error }

}

export default useStorage;