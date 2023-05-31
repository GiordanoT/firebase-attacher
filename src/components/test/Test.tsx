import FirebaseAction from '../../firebase/actions';

interface IProps {}
export default function Test(props: IProps) {

    const add = async() => {
        // await FirebaseAction.add({}, '')}
    }
    const remove = async() => {
        // await FirebaseAction.remove({}, '')}
    }

    return(<div>
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
    </div>)
}
