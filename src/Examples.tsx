import ExampleUseEffect, {FriendStatus} from './ExampleUseEffect';
import ExampleUseState from './ExampleUseState';

function Examples() {
    return (
        <div>
            <ExampleUseState />
            <ExampleUseEffect />
            {/* <p>FriendStatus(props={{friend: {id: "any",}}})</p> */}
        </div>
    );
}

export default Examples;
