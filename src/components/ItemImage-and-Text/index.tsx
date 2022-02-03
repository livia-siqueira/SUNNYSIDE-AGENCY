import * as s from './styles'


interface propsItem {
    image: string;
    title: string
}

const ItemImageText : React.FC<propsItem> = ({title,image, children}) => {
    return (
        <s.Container image={image}>
            <s.Content>
            <s.Title title={title}>{title}</s.Title>
            <s.Text title={title}>{children}</s.Text>
            </s.Content>
        </s.Container>
    )
}

export default ItemImageText;