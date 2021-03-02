import {useEffect, useState} from 'react';
import Examples from './Examples';

function ExampleUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default ExampleUseEffect;

export function FriendStatus({props} : {props: {friend: {id: any,}}}) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange({status} : {status: {isOnline: any}}) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        // Examples.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            // Examples.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if (isOnline === null) {
        return 'Loading';
    }
    return isOnline ? 'Online' : 'Offline';
}
