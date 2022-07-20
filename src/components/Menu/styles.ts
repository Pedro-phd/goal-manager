import styled from 'styled-components'
import { device } from '@/styles/devices'

type ContainerProps = {
  opened: boolean
}

export const Container = styled.div`
  width: 90px;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: calc(100vh - 90px);
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  @media ${device.mobile} {
    position:fixed;
    left: ${(props:ContainerProps) => !props.opened ? '-90px' : '0px'};
    height: calc(100vh - 45px);
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.15)
  }

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
      box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.15);
    }
`

export const MobileMenu = styled.div`
  display: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
  align-items:center;
  color: white;
  transition: all 0.1s ease-in-out;
  @media ${device.mobile}{
    display: flex;
    position: fixed;
    right: 40px;
    bottom: 100px;
  }
`