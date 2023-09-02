import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage,db } from "../firebase/config";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "./useAuth";

const useStorage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  // const [url, setUrl] = useState<string | null>(null);
  const {user} = useAuth()
  const startUpload = (file: File) => {
    if (!file) {
      return;
    }

    const fileId = uuidv4();
    const formatFile = file.type.split("/")[1];
    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
    console.log(formatFile);
    console.log(fileId);
    console.log(user)

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error.message);
        setError(error);
      },
       async() => {
         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          console.log("File available at", downloadURL);  
          // setUrl(downloadURL);
          setProgress(progress)

          await addDoc(collection(db,'images'),{
              imageUrl:downloadURL,
              createdAt : new Date(),
              userEmail: user?.email
          })
        });
      
    
  };

  return {
    progress,
    error,
   
    startUpload,
  };
};

export default useStorage;
