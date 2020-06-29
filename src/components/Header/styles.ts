import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        &:first-child {
          border-style: ${({ size }) =>
            size === 'large' ? 'none none solid none' : 'none'};
          border-color: ${({ size }) => (size === 'large' ? '#FF872C' : '')};
          border-width: ${({ size }) => (size === 'large' ? '2px' : '0')};
          padding-bottom: ${({ size }) => (size === 'large' ? '10px' : '0')};
        }

        & + a {
          margin-left: 32px;
          border-style: ${({ size }) =>
            size === 'small' ? 'none none solid none' : 'none'};
          border-color: ${({ size }) => (size === 'small' ? '#FF872C' : '')};
          border-width: ${({ size }) => (size === 'small' ? '2px' : '0')};
          padding-bottom: ${({ size }) => (size === 'small' ? '10px' : '0')};
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
