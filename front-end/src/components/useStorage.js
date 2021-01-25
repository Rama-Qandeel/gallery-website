import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import firebase from "firebase/app";
import jwt_decode from "jwt-decode";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [name, setName] = useState("rama");

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");
    const user = jwt_decode(localStorage.getItem("token"));

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        const email = user.email;
        collectionRef.add({ url, createdAt, email });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
