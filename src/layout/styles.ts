import { device } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  > .view {
    display: flex;
    width: 100%;
    height: calc(100vh - 90px);
    .content {
      padding: 32px;
      @media ${device.mobile}{
        padding: 16px;
      }
    }
  }
`