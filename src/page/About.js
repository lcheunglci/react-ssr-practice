import React, { lazy, Suspense, useState } from 'react';
// import { Three } from './Three';
// import { Two } from './Two';
// import { One } from './One';

const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));

export const About = () => {

    const [showComponents, setShowComponents] = useState(false);


    return (
        <>
        <h1>About us</h1>
        {showComponents && (
            <Suspense fallback={<p>Loading...</p>}>
                <One />
                <Two />
                <Three />
            </Suspense>
        )}
        <button onClick={() => setShowComponents(true)}>Show</button>
        </>
    )
}

export default About;