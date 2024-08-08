// @mui
import { Box, BoxProps } from '@mui/material';
// @type
import { IDN404MetaData } from '../../../../@types/DN404';
// components
import { SkeletonProductItem } from '../../../../components/skeleton';
//
import DN404Card from './DN404Card';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  products: IDN404MetaData[];
  loading: boolean;
}


export default function DN404List({ products, loading, ...other }: Props) {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      {...other}
    >
      {(loading ? [...Array(12)] : products).map((product, index) =>
        product ? (
          <DN404Card key={product.id} product={product} />
        ) : (
          <SkeletonProductItem key={index} />
        )
      )}
    </Box>
  );
}
