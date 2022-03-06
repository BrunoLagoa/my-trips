import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: var(--medium);
  right: var(--medium);
  color: var(--blue);
  cursor: pointer;
  z-index: 1100; // bigger than leaflet

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`;
