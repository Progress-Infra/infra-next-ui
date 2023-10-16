import * as React from "react";
import { Box, BoxProps } from "../layout";
import * as echarts from "echarts";
import { useTheme } from "@mui/material";

export interface chartProps extends echarts.EChartsOption { }
export interface ChartProps {
    box?: BoxProps,
    chart: chartProps
}

function Chart({ box, chart }: ChartProps): JSX.Element {
    const ref = React.useRef<HTMLElement>(null),
        theme = useTheme();

    React.useEffect(() => {
        let charts: echarts.ECharts | undefined;
        const resize = () => {
            charts?.resize();
        };

        if (ref.current !== null) {
            charts = echarts.init(ref.current, theme.palette.mode);
        }

        window.addEventListener("resize", resize);

        return () => {
            charts?.dispose();
            window.removeEventListener("resize", resize);
        };
    }, [theme]);

    React.useEffect(() => {
        if (ref.current !== null) {
            const
                instance = echarts.getInstanceByDom(ref.current);

            instance?.setOption(chart);
        }
    }, [chart, ref]);

    return (
        <Box
            {...box}
            ref={ref}
        />
    )
}

export default Chart;