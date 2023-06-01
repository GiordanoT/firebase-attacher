import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';
import {getAuth} from '@firebase/auth';
import Env from './env';

export class Firebase {
    static config = {
        apiKey: Env.apiKey,
        authDomain: Env.authDomain,
        projectId: Env.projectId,
        storageBucket: Env.storageBucket,
        messagingSenderId: Env.messagingSenderId,
        appId: Env.appId
    };
    static app = initializeApp(Firebase.config);
    static db = getFirestore(Firebase.app);
    static auth = getAuth(Firebase.app);
}
