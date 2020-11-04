import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    // console.log(progress, url)
    //TO REMOVE BAR AFTER UPLOAD COMPLETE
    useEffect(()=>{
        if (url){
            setFile(null);
        }
    }, [url, setFile])
    
    return (
        <div className="progress-bar" style={{ width: progress+'%' }}></div>
    )
}

export default ProgressBar;