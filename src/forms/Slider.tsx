import * as React from 'react';
import { Slider as MSlider, SliderProps as MSliderProps } from '@mui/material';

export type SliderProps = MSliderProps;

function Slider({ children, ...others }: SliderProps): JSX.Element {
    return <MSlider {...others}>{children}</MSlider>;
}

export default Slider;
