import sum from 'lodash/sum';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Grid, Card, Button, CardHeader, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../../routes/paths';
// @types
import { IDN404MetaDataCheckoutState } from '../../../../../@types/DN404';
// components
import Iconify from '../../../../../components/iconify';
import EmptyContent from '../../../../../components/empty-content';
//
import CheckoutSummary from '../CheckoutSummary';
import CheckoutCartProductList from './CheckoutCartProductList';

// ----------------------------------------------------------------------

type Props = {
  checkout: IDN404MetaDataCheckoutState;
  onNextStep: VoidFunction;
  onApplyDiscount: (value: number) => void;
  onDeleteCart: (productId: string) => void;
  onIncreaseQuantity: (productId: string) => void;
  onDecreaseQuantity: (productId: string) => void;
};

export default function CheckoutCart({
  checkout,
  onNextStep,
  onApplyDiscount,
  onDeleteCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: Props) {
  const { cart, total, discount, subtotal } = checkout;

  const totalItems = sum(cart.map((item) => item.quantity));

  const isEmptyCart = !cart.length;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Cart
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                  &nbsp;({totalItems} item)
                </Typography>
              </Typography>
            }
            sx={{ mb: 3 }}
          />

          {!isEmptyCart ? (
            <CheckoutCartProductList
              products={cart}
              onDelete={onDeleteCart}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
            />
          ) : (
            <EmptyContent
              title="Cart is empty"
              description="Look like you have no items in your shopping cart."
              img="/assets/illustrations/illustration_empty_cart.svg"
            />
          )}
        </Card>

        <Button
          component={RouterLink}
          to={PATH_DASHBOARD.dn404.root}
          color="inherit"
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
        >
          Continue Shopping
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <CheckoutSummary
          enableDiscount
          total={total}
          discount={discount}
          subtotal={subtotal}
          onApplyDiscount={onApplyDiscount}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={!cart.length}
          onClick={onNextStep}
        >
          Check Out
        </Button>
      </Grid>
    </Grid>
  );
}
