import Form from "./form"
import {useState} from "react"
import type {FormDataTypes} from "./form"
import Card from "./Card"




export default function App(){

    const [savedCharacter, setSavedCharacter] = useState<FormDataTypes|null>(null)

    function createCharacter(data: FormDataTypes){ 
        setSavedCharacter(data);
    }

    


    return(
        <>
        <Form onSubmit={createCharacter}/>
        {savedCharacter && <Card character={savedCharacter} />}
        </>
    );
}