import React from 'react'
import { useLocation } from 'react-router-dom'

const Welcome = (props) => {
    const location = useLocation()
    console.log("ok");
    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);
    return <h1>Oh, {props.name}</h1>
}
export default Welcome