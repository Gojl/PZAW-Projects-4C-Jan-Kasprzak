interface AppProps {
  name: string;
}


function App({ name }: AppProps){
  return(
    <>
    <h1> {name} </h1> 
    <br />
    </>
  )
}

export default App