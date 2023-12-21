import * as React from 'react';
import { Slide as MSlide, SlideProps as MSlideProps } from '@mui/material';

export type SlideProps = MSlideProps

function Slide({ children, ...others }: SlideProps): JSX.Element {
    return <MSlide {...others}>{children}</MSlide>;
}

export default Slide;
