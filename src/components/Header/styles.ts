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
`