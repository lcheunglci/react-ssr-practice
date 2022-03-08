import React, { lazy, Suspense } from 'react';
// import { Three } from './Three';
// import { Two } from './Two';
// import { One } from './One';

const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));

export const About = () => {

    return (
        <>
        <h1>About us</h1>
        <Suspense fallback={<p>Loading...</p>}>
            <One />
            <Two />
            <Three />
        </Suspense>
        </>
    )
}

export default About;