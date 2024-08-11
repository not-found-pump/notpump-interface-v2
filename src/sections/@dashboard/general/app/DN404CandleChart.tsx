// @mui
import { Card, CardProps, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import {useSettingsContext} from 'src/components/settings';
// components

// ----------------------------------------------------------------------

interface Props extends CardProps {
  height?: number;
}

export default function DN404CandleChart({ height }: Props) {
  const theme = useTheme();
  const {
    themeMode,
    themeLayout,
    themeStretch,
    themeContrast,
    themeDirection,
    themeColorPresets,
    onResetSetting,
  } = useSettingsContext();
  return (
    <Card sx={{ p: 1, height:'100%' }}>
      <div
        style={{
          background: theme.palette.background.default,
          position: 'absolute',
          width: 'calc(100% - 1rem)',
          textAlign: 'center',
          height: '35px',
          borderRadius: '10px',
        }}
      >
        <Typography sx={{ pt: 0.5 }}>Candle Chart (BETA)</Typography>
      </div>
      {themeMode === 'dark' ? 
      <iframe
        id="dextools-widget"
        style={{ border: 'none', borderRadius: '10px' }}
        title="Trading Chart"
        width="100%"
        height="100%"
        src="https://www.dextools.io/widget-chart/en/ether/pe-light/0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false&headerColor=000000&tvPlatformColor=000000&tvPaneColor=000000"
      /> : <iframe
      id="dextools-widget"
      style={{ border: 'none', borderRadius: '10px' }}
      title="Trading Chart"
      width="100%"
      height="100%"
      src="https://www.dextools.io/widget-chart/en/ether/pe-light/0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d?theme=light&chartType=1&chartResolution=30&drawingToolbars=false"
    /> }
    </Card>
  );
}
