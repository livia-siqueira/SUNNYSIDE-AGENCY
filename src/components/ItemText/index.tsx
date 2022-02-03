import * as s from './styles'


interface propsItem {
    title: string
}

const ItemText : React.FC<propsItem> = ({title, children}) => {
    return (
        <s.Container>
            <s.Title>{title}</s.Title>
            <s.Text>{children}</s.Text>
            <s.LearnMore>learn more</s.LearnMore>
        </s.Container>
    )
}

export default ItemText;