import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
// @mui
import { Card, CardHeader, Box, CardProps } from '@mui/material';
// components
import { CustomSmallSelect } from '../../../../components/custom-input';
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  height?:number;
  chart: {
    categories?: string[];
    colors?: string[];
    series: {
      year: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ApexOptions;
  };
}

export default function DN404LineChart({ title, subheader, chart, height, ...other }: Props) {
  const { colors, categories, series, options } = chart;

  const [seriesData, setSeriesData] = useState('2019');

  const chartOptions = useChart({
    colors,
    xaxis: {
      categories,
    },
    ...options,
  });

  return (
    <Card {...other} sx={{p: 1, height: height || 500}}>
      {series.map((item) => (
        <Box key={item.year} sx={{p: 0, height: '100%'}} dir="ltr">
          {item.year === seriesData && (
            <Chart type="area"  series={item.data} options={chartOptions} height="100%"/>
          )}
        </Box>
      ))}
    </Card>
  );
}
