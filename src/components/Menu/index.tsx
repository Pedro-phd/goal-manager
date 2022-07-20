import { useEffect } from 'react'
import * as S from './styles'
import { Home, Layers, Users} from 'react-feather'
import Link from 'next/link'



const Menu = () => {
  return (
    <S.container>
      <Link href="">
        <S.Icon className="selected"><Home /></S.Icon>
      </Link>
      <Link href="">
        <S.Icon  ><Layers /></S.Icon>
      </Link>
      <Link href="">
        <S.Icon><Users /></S.Icon>
      </Link>
      
    </S.container>
  )
}
export default Menu