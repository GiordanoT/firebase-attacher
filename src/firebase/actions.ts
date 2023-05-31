import {deleteDoc, doc, setDoc} from '@firebase/firestore';
import {db} from "./";
import {Json} from "../types";

export default class FirebaseAction {
    static async add(obj: Json, path: string): Promise<void> {
        if(!obj.id) return;
        const DOC = doc(db, path, String(obj.id));
        await setDoc(DOC, obj,{merge: false});
    }

    static async remove(obj: Json, path: string): Promise<void> {
        if(!obj.id) return;
        const DOC = doc(db, path, String(obj.id));
        await deleteDoc(DOC);
    }
}
