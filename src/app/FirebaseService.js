// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"
// import { useRef } from "react";
import { getStorage, ref,listAll, getDownloadURL } from "firebase/storage";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZAHZH7XeS82fxiQl6jcbVbN4IG1Ys1-c",
  authDomain: "vootify.firebaseapp.com",
  projectId: "vootify",
  storageBucket: "vootify.appspot.com",
  messagingSenderId: "446060878814",
  appId: "1:446060878814:web:f2508e0ef499c62cf45b4f",
  measurementId: "G-8BTWME6VVF"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore()
// const docRef = doc(db, "vote", "Upeau07E5kk1GbJ8indd")
const storage = getStorage(app);


export const getimage = async()=>{
  const imagesRef = ref(storage, "images");
  const imageUrls = [];

    // List all the images in the "images" directory
    const imageList = await listAll(imagesRef);

    // Get the download URL for each image
    await Promise.all(
      imageList.items.map(async (item) => {
        if(item.name == 'a.jpg'){
          const downloadUrl = await getDownloadURL(item);
        imageUrls[0] = downloadUrl;
        }
        else{
          const downloadUrl = await getDownloadURL(item);
        imageUrls[1] = downloadUrl;
        }
        
      })
    );
  
    return imageUrls;
}

