import React, { useRef, useEffect } from 'react';

export default function UseRef() {
    const hello = useRef(null);

    function fun() {
        console.log(hello.current);
    }

    useEffect(() => {
        console.log(hello.current);
    }, []);

    return (
        <div>
            <p ref={hello}>hello</p>
            <button onClick={fun}>click</button>
        </div>
    );
}