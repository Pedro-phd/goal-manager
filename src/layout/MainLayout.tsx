import MenuComponent from '@/components/Menu'
import Header from '@/components/Header'
import { Container } from './styles'

const MainLayout = ({children}:any) => {
  return (
    <Container>
      <div className="row"> 
        <Header />
      </div>
      <div className="view"> 
        <MenuComponent/>
        <div className="content">
          {children}
        </div>
      </div>
    </Container>
  )
}

export default MainLayout