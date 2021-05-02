import { useEffect, useState } from 'react'
import PainterContext from './PainterContext'

function PainterProvider(props){
    const [currentPainting, setCurrentPainting] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [paintings, setPaintings] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/paintings")
        .then(res => res.json())
        .then(paintings => {
            setPaintings(paintings)
        })
    }, [])

    const value = {
        currentPainting, 
        setCurrentPainting, 
        searchTerm, 
        setSearchTerm,
        paintings,
        setPaintings
    }

    return (
        <PainterContext.Provider value={value}>
            {props.children}
        </PainterContext.Provider>
    )
}

export default PainterProvider