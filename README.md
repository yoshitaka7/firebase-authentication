## firebase　auth認証

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
