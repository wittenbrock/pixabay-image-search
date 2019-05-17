import { css } from 'styled-components';

export const FigureStyles = css`
  display: ${p => (p.imagesAreLoading ? 'none' : 'grid')};
  place-items: center;
  grid-row-gap: 1.6rem;
  grid-column-gap: 1.6rem;
  max-width: 100%;
  margin: 3rem;
  grid-template-areas:
    'img0  img0  img0  img0  img0  img0  img1  img1  img1  img1  img1  img1' /* 2 images */
    'img2  img2  img2  img3  img3  img3  img4  img4  img4  img5  img5  img5' /* 4 images */
    'img6  img6  img6  img6  img7  img7  img7  img7  img8  img8  img8  img8' /* 3 images */
    'img9  img9  img9  img9  img9  img9  img10 img10 img10 img10 img10 img10' /* 2 images */
    'img11 img11 img11 img12 img12 img12 img13 img13 img13 img14 img14 img14' /* 4 images */
    'img15 img15 img15 img15 img16 img16 img16 img16 img17 img17 img17 img17' /* 3 images */
    'img18  img18  img18  img18  img18  img18  img19  img19  img19  img19  img19  img19'; /* 2 images */
`;
