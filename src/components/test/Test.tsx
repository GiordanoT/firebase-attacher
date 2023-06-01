import {onSnapshot} from '@firebase/firestore';
import {useStateIfMounted} from 'use-state-if-mounted';
import FirebaseAction from '../../firebase/actions';
import {Firebase} from '../../firebase';
import {Json} from "../../types";

interface IProps {}
export default function Test(props: IProps) {
    const [data, setData] = useStateIfMounted<Json|null>(null);

    /*
    onSnapshot(doc(Firebase.db, 'path', 'id'), (doc) => {
        setData(doc.data() as Json);
    });
    */

    const add = async() => {
        // await FirebaseAction.add({}, '')}
    }
    const remove = async() => {
        // await FirebaseAction.remove({}, '')}
    }

    return(<div>
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
        <hr />
        {JSON.stringify(data)}
    </div>)
}
