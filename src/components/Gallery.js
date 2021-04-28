import {useState} from 'react'
import Searchbar from './Searchbar'
import PaintingsContainer from './PaintingsContainer'

function Gallery(props){
    const {paintingsList} = props
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <Searchbar />
            <PaintingsContainer paintingsList={paintingsList}/>
        </>
    )
}

export default Gallery