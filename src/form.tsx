import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


export interface FormDataTypes{
    name: string;
    race: string;
    class: string;
    level: number;
    description: string;
    public: boolean;
}

interface FormProps{
    onSubmit: (data: FormDataTypes) => void;
}

function Form({onSubmit}: FormProps) {
    const [x, setX] = useState<boolean>(true);

    const [formData, setFormData] = useState<FormDataTypes>({
        name: "",
        race: "",
        class: "",
        level: 0,
        description: "",
        public: true
    });

    console.log(formData);
   
    function handleChange(event){
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData); 
            }} className="form d-flex flex-column ">

                <label htmlFor="nameField" className="">Imię postaci: </label>
                <input type="text" id="nameField" name="name" onChange={handleChange} />

                <label htmlFor="raceSelect" className="">wybierz Rasę:</label>
                <select id="raceSelect" name="race" onChange={handleChange}>
                    <option value="Człowiek">Człowiek</option>
                    <option value="Elf">Elf</option>
                    <option value="Krasnolud">Krasnolud</option>
                    <option value="Ork">Ork</option>
                </select>

                <label htmlFor="classSelect" className="">wybierz Klasę:</label>
                <select id="classSelect" name="class" onChange={handleChange}>
                    <option value="Wojownik">Wojownik</option>
                    <option value="Mag">Mag</option>
                    <option value="Łucznik">Łucznik</option>
                </select>

                <label htmlFor="levelField" className="">Poziom: </label>
                <input type="number" id="levelField" name="level" onChange={handleChange}/>

                <label htmlFor="descriptionField" className="">Opis Postaci: </label>
                <textarea id="descriptionField" name="description" onChange={handleChange}/>

                <label htmlFor="isPublicCheck">Czy Postać jest Publiczna:</label>
                <input type="checkbox" name="public" checked={x} onChange={() => setX(!x)}></input>

                <input type="submit"/>

            </form>
        </>
    );
}

export default Form;