import { useState } from 'react'
import * as S from './styles'
import { Home, Layers, Users, Menu, X} from 'react-feather'
import Link from 'next/link'



const MenuComponent = () => {

  const [opened, setOpened] = useState<boolean>(false)

  return (
    <>
      <S.Container opened={opened}>
        <Link href="">
          <S.Icon className="selected"><Home /></S.Icon>
        </Link>
        <Link href="">
          <S.Icon  ><Layers /></S.Icon>
        </Link>
        <Link href="">
          <S.Icon><Users /></S.Icon>
        </Link>
      </S.Container>
      <S.MobileMenu onClick={() => setOpened(!opened)}>
        {!opened ? <Menu /> : <X /> }
      </S.MobileMenu>
    </>
  )
}
export default MenuComponent