import { HeaderContainer } from "./styles"
import coverImg from '../../assets/Cover.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImg} alt="Logo" />
    </HeaderContainer>
  )
}