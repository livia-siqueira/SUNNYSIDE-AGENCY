import * as s from './styles'


interface propsItem {
    image: string;
}

const ItemImage : React.FC<propsItem> = ({image}) => {
    return (
        <s.Container image={image}>
            
        </s.Container>
    )
}

export default ItemImage;