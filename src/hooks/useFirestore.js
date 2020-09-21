import { useState, useEffect } from 'react';
import { appFirestore } from '../firebase/config';

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([]);
	useEffect(() => {
    // returns a function that is used to unsubscribe to the collection
	  const unsub =	appFirestore
			.collection(collection)
			.orderBy('createdAt', 'desc')
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
      });

    return () => unsub();

	}, [collection]);

	return { docs };
};

export default useFirestore;