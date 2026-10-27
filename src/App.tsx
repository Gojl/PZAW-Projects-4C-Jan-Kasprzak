interface typesProps{
  name:String;
}

function App({name}: typesProps){
  return(
    <>
    <h1> {name} </h1> 
    <br />
    </>
  )
}

export default App