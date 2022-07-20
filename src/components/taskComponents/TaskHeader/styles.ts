import { device } from '@/styles/devices'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  h1 { 
    word-break: break-word;
  }
  p {
    color: #8B8CBE;
    word-break: break-word;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    height: fit-content;
    p {
      background-color: ${props => props.theme.colors.primary};
      padding: 4px 8px;
      text-transform: uppercase;
      color: white;
      font-weight: bold;
      font-size:12px;
      border-radius: 8px;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media ${device.mobile} { 
    flex-direction: column-reverse;
    gap: 8px;
    align-items: start;
    .title {
      gap: 4px;
    }
    h1 { 
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
    .tags {
      gap: 4px;
      p {
        font-size:8px;
        border-radius: 4px;
      }
  }
  }
`