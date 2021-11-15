## firebase auth認証

### ref
 [https://medium.com/geekculture/firebase-auth-with-react-and-typescript-abeebcd7940a](https://medium.com/geekculture/firebase-auth-with-react-and-typescript-abeebcd7940a)

### Getting Started
`git clone`

↓

srcディテクトリ配下にfirebaseSetup.tsを作成

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
