import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import {
  Box,
  Card,
  Link,
  Stack,
  Fab,
  Typography,
  CircularProgress,
  LinearProgress,
  Tooltip,
} from '@mui/material';
// routes
import TextMaxLine from 'src/components/text-max-line';
import { formatAddress } from 'src/utils/formatAddress';
import ProgressLinear from 'src/sections/_examples/mui/progress/ProgressLinear';
import { color } from '@mui/system';
import { useLocales } from 'src/locales';
import {NOTPUMP_DEFINE_FAIRLAUNCH, WALLET} from 'src/descriptions/DN404';
import { PATH_DASHBOARD } from '../../../../routes/paths';
// utils
import { fCurrency, fShortenNumber } from '../../../../utils/formatNumber';
// redux
import { useDispatch } from '../../../../redux/store';
import { addToCart } from '../../../../redux/slices/DN404';
// @types
import { IDN404MetaData } from '../../../../@types/DN404';
// components
import Iconify from '../../../../components/iconify';
import Label from '../../../../components/label';
import Image from '../../../../components/image';
import { ColorPreview } from '../../../../components/color-utils';

// ----------------------------------------------------------------------

type Props = {
  product: IDN404MetaData;
};
export default function DN404Card({ product }: Props) {
  const { id, name, coverUrl, price, colors, status, available, sizes, priceSale, description } =
    product;

  const dispatch = useDispatch();

  const linkTo = PATH_DASHBOARD.dn404.view(paramCase(name));
  const { translate } = useLocales();

  const handleAddCart = async () => {
    const newProduct = {
      id,
      name,
      coverUrl,
      available,
      price,
      colors: [colors[0]],
      size: sizes[0],
      quantity: 1,
    };
    try {
      dispatch(addToCart(newProduct));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card
      sx={{
        '&:hover .add-cart-btn': {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', p: 1 }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}

        <Fab
          color="warning"
          size="medium"
          className="add-cart-btn"
          onClick={handleAddCart}
          sx={{
            right: 16,
            bottom: 16,
            zIndex: 9,
            opacity: 0,
            position: 'absolute',
            transition: (theme) =>
              theme.transitions.create('all', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
          }}
        >
          <Iconify icon="ic:round-add-shopping-cart" />
        </Fab>

        <Image alt={name} src={coverUrl} ratio="1/1" sx={{ borderRadius: 1.5 }} />
      </Box>
      <Stack spacing={1} sx={{ pl: 1,pr:3, pt: 0}}  direction="row" alignItems="center">
        <LinearProgress
          variant="determinate"
          value={Number(Math.random().toFixed(2)) * 100}
          sx={{
            mx: 2,
            flexGrow: 1,
            mr: 0.5,
          }}
        />
              <Tooltip title={`${translate('abc')}`} arrow>
          <Box component="span">
            <Iconify icon="eva:info-outline" color="gray" width={16} />
          </Box>
        </Tooltip>
      </Stack>

      <Stack spacing={1} sx={{ pl: 1, pr:3, pt: 0}} direction="row" alignItems="center">
        <LinearProgress
          color="warning"
          variant="determinate"
          value={Number(Math.random().toFixed(2)) * 100}
          sx={{
            mx: 2,
            mr: 0.5,
            flexGrow: 1,
          }}
        />
         <Tooltip title={`${translate(NOTPUMP_DEFINE_FAIRLAUNCH)}`} arrow>
          <Box component="span">
            <Iconify icon="eva:info-outline" color="gray" width={16} />
          </Box>
        </Tooltip>
      </Stack>
      <Stack spacing={1} sx={{ p: 3, pt: 2 }}>
        <Link component={RouterLink} to={linkTo} color="inherit" variant="subtitle2" noWrap>
          {name.split(' ')[0].toUpperCase()} / ({name})
        </Link>
        <Typography sx={{ color: 'text.secondary' }}>{formatAddress(WALLET)}</Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack spacing={0.5} sx={{ typography: 'subtitle1' }}>
            <Typography sx={{ color: 'text.secondary' }}>
              MC: {fCurrency(product?.marketCap || Number(Math.random().toFixed(4)) * 100_000)}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Holders:{' '}
              {product?.holdersCount || Number(Math.round(Number(Math.random().toFixed(2)) * 100))}
            </Typography>
          </Stack>

          <Stack spacing={0.5} sx={{ typography: 'subtitle1' }}>
            <Box component="span">{fCurrency(price / 100_000)}</Box>
            <Box component="span">
              <ColorPreview colors={colors} />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
