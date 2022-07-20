import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  h1 {
    font-size: 64px;
  }
  p {
    font-size: 24px;
  }

  .social-row {
    display: flex;
    gap: 16px;
  }
`