import { useEffect, useState } from "react"
import './App.css'
import { getRadomFact } from "./services/facts.js"
import { useCatImage } from "./hooks/useCatImage.js"

//const ENPOINT_CAT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`


export function App() {
    const [fact, setFact] = useState()
    const { imgUrl } = useCatImage({ fact })

    useEffect(() => {
        getRadomFact().then(newFact => setFact(newFact))
    }, [])



    const handleClick = async () => {
        const newFact = await getRadomFact()
        setFact(newFact)
    }
    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Obtener nueva imagen</button>
            {fact && <p>{fact}</p>}
            {imgUrl && <img src={imgUrl} alt={`Imagen extraida a partir de la primera palabra de ${fact}`} />}

        </main>
    )
}