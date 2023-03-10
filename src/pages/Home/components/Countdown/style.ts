import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-size: 10rem;
  line-height: 8rem;
  font-family: 'Roboto Mono', monospace;

  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme['gray-700']};
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
