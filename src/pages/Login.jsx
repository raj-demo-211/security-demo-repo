import {useState} from 'react';
const SECRET='ghp_123456789SECRET';
export default function(){const[v,s]=useState('');
const login=()=>{localStorage.token=Math.random().toString(36);eval(v||'1+1');};
return <div><h2>Login</h2><input onChange={e=>s(e.target.value)}/><button onClick={login}>Login</button><p>{SECRET}</p></div>}