import type {FormDataTypes} from "./form"

interface CardProps{
    character: FormDataTypes
}

function Card({character}: CardProps){
    return(
        <>
        <h1>{character.name}</h1>
        </>
    )
}
export default Card;