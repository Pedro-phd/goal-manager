import { Container, LogoContainer } from './styles'
import { CheckCircle} from 'react-feather'
const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <div>
          <CheckCircle />
        </div>
      </LogoContainer>
      <div className="project-name">
        <CheckCircle />
        <h1>Goal Manager</h1>
      </div>
    </Container>
  )
}

export default Header