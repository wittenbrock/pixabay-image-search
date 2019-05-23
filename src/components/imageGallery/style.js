import styled from 'styled-components';

export const StyledFigure = styled.figure`
  display: ${p => (p.imagesAreLoading ? 'none' : 'flex')};
  flex-wrap: wrap;
  max-width: 150rem;
  margin: 0 auto;

  &:after {
    content: '';
    flex-grow: 1e4;
    min-width: 20%;
  }

  @media screen and (min-width: 600px) {
    padding: 3rem;
    padding-top: 0;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(0, 0%, 0%, 0.6);
  width: 100%;
  height: 2rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  opacity: 0;
  margin: 0;
`;

// This creative solution to create a Google Images like photo gallery
// came from: https://github.com/xieranmaya/blog/issues/6
export const ImageContainer = styled.button`
  position: relative;
  margin: 0.5rem;
  width: ${p => (p.width * 200) / p.height}px;
  flex-grow: ${p => (p.width * 200) / p.height};
  transition: transform ease-in-out 0.2s;

  @media screen and (hover) {
    &:hover {
      cursor: pointer;
    }

    &:hover ${StyledSpan} {
      opacity: 100;
    }

    &:focus ${StyledSpan} {
      opacity: 100;
    }

    &:focus {
      box-shadow: 0 0 5px hsl(219, 73%, 62%);
      outline: 1px solid hsl(219, 73%, 62%);
      transform: scale(0.98);
    }
  }
`;

export const Padding = styled.i`
  display: block;
  padding-bottom: ${p => (p.height / p.width) * 100}%;
`;
