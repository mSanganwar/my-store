"use client"

type errorType = {
    error: Error,
    reset: () => void;
}

export default function ErrorBoundary({error, reset}:errorType){
    return <>
        <h1>{error?.message}</h1>
        <button onClick={reset}>Please Try Again!!!</button>
    </>
}