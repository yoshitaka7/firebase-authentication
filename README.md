# Firebase Authentication

<p align="center">
 <a href="https://www.typescriptlang.org/">
  <img src="https://user-images.githubusercontent.com/89970444/173063032-58f7ea37-f0ed-46c2-98d9-344170beaf98.svg" height="45px">
 </a>
 <a href="https://ja.reactjs.org/">
  <img src="https://user-images.githubusercontent.com/89970444/173062775-57dffcbc-788f-4e1d-bf3e-d8fcc04e6d35.svg" height="45px">
 </a>
 <a href="https://firebase.google.com/?hl=ja">
  <img src="https://user-images.githubusercontent.com/89970444/173061737-e0abb641-d8e5-40cf-9266-e2ec203388e9.png" height="50px">
 </a>
</p>
 

## ref
 [https://medium.com/geekculture/firebase-auth-with-react-and-typescript-abeebcd7940a](https://medium.com/geekculture/firebase-auth-with-react-and-typescript-abeebcd7940a)

## Getting Started
`git clone`

↓

create firebaseSetup.ts under src directory

↓

```
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  // copy sdk snippet from firebase console
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
```

↓

`yarn start`
