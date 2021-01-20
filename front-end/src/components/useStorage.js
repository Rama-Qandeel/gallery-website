import { useState, useEffect } from 'react';
import { projectStorage,projectFirestore } from '../firebase/config';
import firebase from 'firebase/app';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [name, setName] = useState("rama");

useEffect(() => {
 const storageRef = projectStorage.ref(file.name);
 const collectionRef = projectFirestore.collection('images');

 storageRef.put(file).on('state_changed', (snap) => {
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    setProgress(percentage);
  }, (err) => {
    setError(err);
  }, async () => {
    const url = await storageRef.getDownloadURL();
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
     collectionRef.add({ url, createdAt })
    //  console.log(collectionRef.add({ url, createdAt,name })
    setUrl(url);
  });

}, [file]);   
return { progress, url, error };

}

export default useStorage;
