import * as s from './styles'
interface Perfil {
    image: string;
    name: string;
    profession: string;
}


const ItemPerfil : React.FC<Perfil> = ({image, children, name, profession}) => {
    return(
        <s.Container>
            <s.Image src={image}/>
            <s.Description>{children}</s.Description>
            <s.Datas>
            <s.Name>{name}</s.Name>
            <s.Profession>{profession}</s.Profession>
            </s.Datas>
        </s.Container>
    )
}

export default ItemPerfil;