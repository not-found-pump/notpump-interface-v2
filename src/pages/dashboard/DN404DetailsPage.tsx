import {useEffect,useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
// @mui
import {Box,Card,Container,Divider,Grid,Stack,Tab,Tabs,Typography} from '@mui/material';
import {alpha} from '@mui/material/styles';
// redux
import {NOTPUMP_DN404} from 'src/descriptions/DN404';
import {addToCart,getProduct,gotoStep} from '../../redux/slices/DN404';
import {useDispatch,useSelector} from '../../redux/store';
// routes
// @types
import {ICheckoutCartItem} from '../../@types/DN404';
// components
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import Iconify from '../../components/iconify';
import Markdown from '../../components/markdown';
import {useSettingsContext} from '../../components/settings';
import {SkeletonProductDetails} from '../../components/skeleton';
// sections
import CartWidget from '../../sections/@dashboard/e-commerce/CartWidget';
import {
  DN404DetailsCarousel,
  DN404DetailsSummary,
  ProductDetailsReview,
} from '../../sections/@dashboard/e-commerce/details';
import DN404TradeHistory from './DN404TradeHistory';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'ic:round-verified',
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'eva:clock-fill',
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'ic:round-verified-user',
  },
];

// ----------------------------------------------------------------------

export default function DN404DetailsPage() {
  const { themeStretch } = useSettingsContext();

  const { name } = useParams();

  const dispatch = useDispatch();

  const { product, isLoading, checkout } = useSelector((state) => state.product);

  const [currentTab, setCurrentTab] = useState('trade_history');

  useEffect(() => {
    if (name) {
      dispatch(getProduct(name as string));
    }
  }, [dispatch, name]);

  const handleAddCart = (newProduct: ICheckoutCartItem) => {
    dispatch(addToCart(newProduct));
  };

  const handleGotoStep = (step: number) => {
    dispatch(gotoStep(step));
  };

  const TABS = [
    {
      value: 'trade_history',
      label: `Trade history`,
      component: product ? <DN404TradeHistory /> : null,
    },
    {
      value: 'description',
      label: 'description',
      component: product ? <Markdown children={product?.description} /> : null,
    },
 
  ];

  return (
    <>
      <Helmet>
        <title>{`Token ${product?.name.split(' ')[0].toUpperCase()} / (${product?.name}) | NotPump`}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={`${product?.name.split(' ')[0].toUpperCase()} / (${product?.name})`}
          links={[
            {
              name: NOTPUMP_DN404
            },
          ]}
        />

        <CartWidget totalItems={checkout.totalItems} />

        {product && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                <DN404DetailsCarousel product={product} />
                
              </Grid>

              <Grid item xs={12} md={6} lg={5}>
                <DN404DetailsSummary
                  product={product}
                  cart={checkout.cart}
                  onAddCart={handleAddCart}
                  onGotoStep={handleGotoStep}
                />
              </Grid>
            </Grid>

            <Box
              gap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
              sx={{ my: 1 }}
            >
              {/* {SUMMARY.map((item) => (
                <Box key={item.title} sx={{ textAlign: 'center' }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      borderRadius: '50%',
                      color: 'primary.main',
                      bgcolor: (theme) => `${alpha(theme.palette.primary.main, 0.08)}`,
                    }}
                  >
                    <Iconify icon={item.icon} width={36} />
                  </Stack>

                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                </Box>
              ))} */}
            </Box>

            <Card>
              <Tabs
                value={currentTab}
                onChange={(event, newValue) => setCurrentTab(newValue)}
                sx={{ px: 3, bgcolor: 'background.neutral' }}
              >
                {TABS.map((tab) => (
                  <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
              </Tabs>

              <Divider />

              {TABS.map(
                (tab) =>
                  tab.value === currentTab && (
                    <Box
                      key={tab.value}
                      sx={{
                        ...(currentTab === 'description' && {
                          p: 3,
                        }),
                      }}
                    >
                      {tab.component}
                    </Box>
                  )
              )}
            </Card>
          </>
        )}

        {isLoading && <SkeletonProductDetails />}
      </Container>
    </>
  );
}
