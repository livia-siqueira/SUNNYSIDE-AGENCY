import Nav from '../Nav';
import * as s from './styles'

const Footer : React.FC = () => {
    return(
        <s.Container>
            <s.Title>sunnyside</s.Title>
            <Nav page="Footer"/>
            <s.Icons>
                <s.Icon src="/desktop/icon-facebook.svg"/>
                <s.Icon src="/desktop/icon-instagram.svg"/>
                <s.Icon src="/desktop/icon-twitter.svg"/>
                <s.Icon src="/desktop/icon-pinterest.svg"/>
            </s.Icons>
        </s.Container>
    )
}

export default Footer;