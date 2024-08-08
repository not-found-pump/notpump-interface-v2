import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Card, Link, Stack, Fab, Typography } from '@mui/material';
// routes
import TextMaxLine from 'src/components/text-max-line';
import {formatAddress} from 'src/utils/formatAddress';
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
const  WALLET =  "0xDA216D50E16fBcf7AbF71A68403FcCf39Cc884e0"

export default function DN404Card({ product }: Props) {
  const { id, name, coverUrl, price, colors, status, available, sizes, priceSale , description} = product;

  const dispatch = useDispatch();

  const linkTo = PATH_DASHBOARD.eCommerce.view(paramCase(name));

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
 
      <Stack spacing={2.5} sx={{ p: 3 }}>
        <Link component={RouterLink} to={linkTo} color="inherit" variant="subtitle2" noWrap>
          {name.split(' ')[0].toUpperCase()} / {name}
        </Link>
           <Typography sx={{ color: 'text.secondary' }}>{formatAddress(WALLET)}</Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={colors} />

          <Stack direction="row" spacing={0.5} sx={{ typography: 'subtitle1' }}>
            {/* {priceSale && (
              <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                {fCurrency(priceSale)}
              </Box>
            )} */}

            <Box component="span">{fCurrency(price / 100_000)}</Box>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
