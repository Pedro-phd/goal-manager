import Menu from '@/components/Menu'
import Header from '@/components/Header'
import { Container } from './styles'

const MainLayout = ({children}:any) => {
  return (
    <Container>
      <div className="row"> 
        <Header />
      </div>
      <div className="view"> 
        <Menu/>
        <div className="content">
          {children}
        </div>
      </div>
    </Container>
  )
}

export default MainLayout