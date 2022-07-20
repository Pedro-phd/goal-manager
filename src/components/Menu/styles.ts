import styled from 'styled-components'
import Link from 'next/link'

type IconProps = {
  active: boolean
}

export const container = styled.div`
  width: 90px;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: calc(100vh - 90px);
  align-items: center;
  justify-content: center;

`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius:16px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    svg {
      color: ${props => props.theme.colors.darkGray}
    }
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      svg { 
        color: #fff;
      }
    }
    &.selected {
      background-color: ${props => props.theme.colors.primary};
      svg { 
        color: #fff;
      }
      box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.15)
    }
`