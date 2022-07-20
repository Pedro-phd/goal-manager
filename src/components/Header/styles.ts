import { device } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #FFF;
  .project-name {
    margin-left: 32px;
    width:100%;
    height: 90px;
    display: flex;
    border-bottom: 1px solid #F0EFF1;
    align-items: center;
    svg { 
      display: none;
    }
  }
  @media ${device.mobile} {
    height: 45px;
    font-size: 12px;
    background-color: ${props => props.theme.colors.gray}
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.15);
    .project-name {
      margin-left: 0;
      padding-left: 16px;
      height: 45px;
      gap: 16px;
      svg { 
        display: inline-block;
      }
    }
  }
`
export const LogoContainer = styled.div`
  width: 90px;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  > div {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
  @media ${device.mobile} {
    display: none;    
  }
`