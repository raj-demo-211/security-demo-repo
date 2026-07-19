export default ()=>{const render=(x)=>document.getElementById('out').innerHTML=x;
return <div><button onClick={()=>render(location.hash.slice(1))}>Render Result</button><div id='out'></div></div>}