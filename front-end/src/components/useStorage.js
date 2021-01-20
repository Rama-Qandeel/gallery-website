import { useState, useEffect } from 'react';
import { projectStorage,projectFirestore } from '../firebase/config';
import firebase from 'firebase/app';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [name, setName] = useState(null);

useEffect(() => {
 const storageRef = projectStorage.ref(file.name);

 storageRef.put(file).on('state_changed', (snap) => {
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    setProgress(percentage);
  }, (err) => {
    setError(err);
  }, async () => {
    const url = await storageRef.getDownloadURL();
    const createdAt = firebase.firestore.Timestamp.now();
    
    // console.log(projectFirestore.md.firebase_.firestore.CollectionReference);
    
    // await projectFirestore.md.firebase_.firestore.CollectionReference.add({ url, createdAt });
    setUrl(url);
  });

}, [file]);   
return { progress, url, error };

}

export default useStorage;
