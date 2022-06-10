# Firebase Authentication

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
