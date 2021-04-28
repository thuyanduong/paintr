import PaintingCard from './PaintingCard'

function PaintingsContainer(props){
    const {paintingsList} = props
    
    return(
        <div>
        {
            paintingsList.map(painting => <PaintingCard
                key={painting.id}
                painting={painting}
            />)
        }
        </div>
    )
}

export default PaintingsContainer