import { useState, useEffect} from 'react';
import { appStorage, appFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create a reference to where the file will be saved inside the firebase storage. It basically creates a location for the file to be uploaded.
    const storageRef = appStorage.ref(file.name);
    // create a reference to the collection where the files will be saved inside the database. It basically creates a collection for the files to be uploaded.
    const collectionRef = appFirestore.collection('images');

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes * 100);
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      setUrl(url);
      collectionRef.add({url: url, createdAt: timestamp() });
    });
  }, [file]);

  return {progress, error, url};

}

export default useStorage;