import {useState} from 'react';

function ExampleUseState() {
    const [count, setCount] = useState(0);
    const [another, setAnother] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                    setCount(count + 1);
                    setAnother(1);
                }}>
                Click me
            </button>
        </div>
    );
}

export default ExampleUseState;
