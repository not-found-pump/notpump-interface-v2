import { sentenceCase } from 'change-case';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
// @mui
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
// routes
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import Lightbox from 'src/components/lightbox';
import { NOTPUMP_DEFINE_FAIRLAUNCH } from 'src/descriptions/DN404';
import useResponsive from 'src/hooks/useResponsive';
import { PATH_DASHBOARD } from '../../../../routes/paths';
// utils
// @types
import { ICheckoutCartItem, IDN404MetaData } from '../../../../@types/DN404';
// _mock
import { _socials } from '../../../../_mock/arrays';
// components
import FormProvider, { RHFTextField } from '../../../../components/hook-form';
import Iconify from '../../../../components/iconify';
import Label from '../../../../components/label';
// @mui
// utils
import { bgGradient } from '../../../../utils/cssStyles';
// @types
// components
import Carousel from '../../../../components/carousel';
import Image from '../../../../components/image';
import { DN404DerivativeChart } from '../../general/e-commerce';
import { AppWidgetSummary } from '../../general/app';

const THUMB_SIZE = 64;

type StyledThumbnailsContainerProps = {
  length: number;
};

const StyledThumbnailsContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'length',
})<StyledThumbnailsContainerProps>(({ length, theme }) => ({
  margin: theme.spacing(0, 'auto'),
  position: 'relative',

  '& .slick-slide': {
    opacity: 0.48,
    '&.slick-current': {
      opacity: 1,
    },
    '& > div': {
      padding: theme.spacing(0, 0.75),
    },
  },

  ...(length === 1 && {
    maxWidth: THUMB_SIZE * 1 + 16,
  }),
  ...(length === 2 && {
    maxWidth: THUMB_SIZE * 2 + 32,
  }),
  ...((length === 3 || length === 4) && {
    maxWidth: THUMB_SIZE * 3 + 48,
  }),
  ...(length >= 5 && {
    maxWidth: THUMB_SIZE * 6,
  }),
  ...(length > 2 && {
    '&:before, &:after': {
      ...bgGradient({
        direction: 'to left',
        startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
        endColor: `${theme.palette.background.default} 100%`,
      }),
      top: 0,
      zIndex: 9,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: (THUMB_SIZE * 2) / 3,
    },
    '&:after': {
      right: 0,
      transform: 'scaleX(-1)',
    },
  }),
}));
// ----------------------------------------------------------------------

interface FormValuesProps extends Omit<ICheckoutCartItem, 'colors'> {
  colors: string;
}

type Props = {
  product: IDN404MetaData;
  cart: ICheckoutCartItem[];
  onAddCart: (cartItem: ICheckoutCartItem) => void;
  onGotoStep: (step: number) => void;
};
export default function DN404DetailsSummary({
  cart,
  product,
  onAddCart,
  onGotoStep,
  ...other
}: Props) {
  const navigate = useNavigate();

  const {
    id,
    name,
    sizes,
    price,
    coverUrl,
    status,
    colors,
    available,
    priceSale,
    totalRating,
    totalReview,
    inventoryType,
  } = product;

  const alreadyProduct = cart.map((item) => item.id).includes(id);

  const isMaxQuantity =
    cart.filter((item) => item.id === id).map((item) => item.quantity)[0] >= available;

  const defaultValues = {
    id,
    name,
    coverUrl,
    available,
    price,
    colors: colors[0],
    size: sizes[4],
    quantity: available < 1 ? 0 : 1,
  };

  const methods = useForm<FormValuesProps>({
    defaultValues,
  });

  const { reset, watch, control, setValue, handleSubmit } = methods;

  const values = watch();

  useEffect(() => {
    if (product) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      if (!alreadyProduct) {
        onAddCart({
          ...data,
          colors: [values.colors],
          subtotal: data.price * data.quantity,
        });
      }
      onGotoStep(0);
      navigate(PATH_DASHBOARD.dn404.checkout);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCart = async () => {
    try {
      onAddCart({
        ...values,
        colors: [values.colors],
        subtotal: values.price * values.quantity,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');

  const carousel1 = useRef<Carousel | null>(null);

  const carousel2 = useRef<Carousel | null>(null);

  const [nav1, setNav1] = useState<Carousel>();

  const [nav2, setNav2] = useState<Carousel>();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState<number>(-1);

  const [currentTabTrade, setCurrentTabTrade] = useState<'trade' | 'derivative'>('trade');

  const imagesLightbox = product.images.map((img) => ({ src: img }));

  const handleOpenLightbox = (imageUrl: string) => {
    const imageIndex = imagesLightbox.findIndex((image) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(-1);
  };

  const carouselSettings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: product.images.length > 3 ? 3 : product.images.length,
  };

  useEffect(() => {
    if (carousel1.current) {
      setNav1(carousel1.current);
    }
    if (carousel2.current) {
      setNav2(carousel2.current);
    }
  }, []);

  useEffect(() => {
    carousel1.current?.slickGoTo(currentIndex);
  }, [currentIndex]);

  const TABS = [
    {
      value: 'trade',
      label: 'Trade',
      component: (
        <Stack>
          <Stack spacing={0.5}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle2">
                {product.name.split(' ')[0].toUpperCase()} / ETH
              </Typography>
              <LinearProgress
                variant="determinate"
                value={Number(Math.random().toFixed(2)) * 100}
                sx={{
                  mx: 2,
                  flexGrow: 1,
                  mr: 0.5,
                }}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography
                variant="caption"
                component="div"
                sx={{ textAlign: 'right', color: 'text.secondary', cursor: 'pointer' }}
              >
                ETH Balance: 1,23
              </Typography>
              <RHFTextField
                size="small"
                type="number"
                name={`items[${0}].price`}
                value={0.001}
                label="WETH amount"
                placeholder="0"
                onChange={(event) => {}}
                InputProps={{
                  startAdornment: <InputAdornment position="start">-</InputAdornment>,
                }}
                sx={{ width: '100%' }}
              />
            </Stack>
            <Stack spacing={1} sx={{ pt: 1 }}>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <IconButton sx={{ height: 40, width: 40 }}>⇅</IconButton>
              </div>
            </Stack>
            <Stack spacing={1}>
              <Typography
                variant="caption"
                component="div"
                sx={{ textAlign: 'right', color: 'text.secondary', cursor: 'pointer' }}
              >
                {product.name.split(' ')[0].toUpperCase()} Balance: 15k
              </Typography>
              <RHFTextField
                size="small"
                type="number"
                name={`items[${0}].price`}
                value={12050}
                label={`${product.name.split(' ')[0].toUpperCase()} amount`}
                placeholder="0"
                onChange={(event) => {}}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+</InputAdornment>,
                }}
                sx={{ width: '100%' }}
              />
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
            <Button
              fullWidth
              disabled={isMaxQuantity}
              size="large"
              color="success"
              variant="contained"
              onClick={handleAddCart}
              sx={{ whiteSpace: 'nowrap' }}
            >
              Buy
            </Button>

            <Button fullWidth color="error" size="large" type="submit" variant="contained">
              Sell
            </Button>
          </Stack>
        </Stack>
      ),
    },
    {
      value: 'derivative',
      label: `Derivative`,
      component: (
        <Stack>
          <Stack spacing={0.5}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle2">
                {product.name.split(' ')[0].toUpperCase()} / ETH
              </Typography>
              <LinearProgress
                variant="determinate"
                value={Number(Math.random().toFixed(2)) * 100}
                sx={{
                  mx: 2,
                  flexGrow: 1,
                  mr: 0.5,
                }}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography
                variant="caption"
                component="div"
                sx={{ textAlign: 'right', color: 'text.secondary', cursor: 'pointer' }}
              >
                ETH Balance: 1,23
              </Typography>
              <RHFTextField
                size="small"
                type="number"
                name={`items[${0}].price`}
                value={0.001}
                label="WETH amount"
                placeholder="0"
                onChange={(event) => {}}
                InputProps={{
                  startAdornment: <InputAdornment position="start">-</InputAdornment>,
                }}
                sx={{ width: '100%' }}
              />
            </Stack>
          </Stack>
          <Grid container spacing={2} sx={{pt:2}}>
            <Grid item xs={12} md={6}>
              <AppWidgetSummary
                title="Bullish pool"
                percent={2.6}
                total={1865}
                chart={{
                  colors: [theme.palette.primary.main],
                  series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <AppWidgetSummary
                title="Bearish pool"
                percent={-1.2}
                total={487}
                chart={{
                  colors: [theme.palette.error.main],
                  series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
                }}
              />
            </Grid>
          </Grid>

          <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
            <Button
              fullWidth
              disabled={isMaxQuantity}
              size="large"
              color="success"
              variant="contained"
              onClick={handleAddCart}
              sx={{ whiteSpace: 'nowrap' }}
              endIcon="⇡"
            >
              Bullish
            </Button>

            <Button
              endIcon="⇣"
              fullWidth
              color="error"
              size="large"
              type="submit"
              variant="contained"
            >
              Bearish
            </Button>
          </Stack>
        </Stack>
      ),
    },
  ];
  const renderThumbnails = (
    <StyledThumbnailsContainer length={product.images.length} sx={{ pt: 3 }}>
      <Carousel {...carouselSettings2} asNavFor={nav1} ref={carousel2}>
        {product.images.map((img, index) => (
          <Image
            key={img}
            disabledEffect
            alt="thumbnail"
            src={img}
            onClick={() => handleOpenLightbox(img)}
            sx={{
              width: THUMB_SIZE,
              height: THUMB_SIZE,
              borderRadius: 1.5,
              cursor: 'pointer',
              ...(currentIndex === index && {
                border: `solid 2px ${theme.palette.primary.main}`,
              }),
            }}
          />
        ))}
      </Carousel>
    </StyledThumbnailsContainer>
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={3}
        sx={{
          p: (_theme) => ({
            md: _theme.spacing(0, 5, 0, 2),
          }),
        }}
        {...other}
      >
        <Stack spacing={0}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: status === 'sale' ? 'error.main' : 'info.main',
            }}
          >
            {status}
          </Typography>

          <Typography variant="h5">
            {name}{' '}
            <Label
              variant="soft"
              color={inventoryType === 'In progress' ? 'success' : 'error'}
              sx={{ textTransform: 'uppercase', mr: 'auto' }}
            >
              {sentenceCase('In progress')}
            </Label>
          </Typography>
          {isDesktop ? (
            <Typography variant="subtitle2" sx={{ color: 'text.disabled', fontWeight: '300' }}>
              {NOTPUMP_DEFINE_FAIRLAUNCH}
            </Typography>
          ) : (
            ''
          )}

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {renderThumbnails}
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Tabs
            value={currentTabTrade}
            onChange={(event, value) => {
              setCurrentTabTrade(value);
            }}
            sx={{ px: 3, bgcolor: 'background.neutral', borderRadius: '10px' }}
          >
            {TABS.map((tab) => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />
        {TABS.map(
          (tab) =>
            tab.value === currentTabTrade && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" justifyContent="center">
          {_socials.map((social) => (
            <IconButton key={social.name}>
              <Iconify icon={social.icon} />
            </IconButton>
          ))}
        </Stack>
      </Stack>

      <Lightbox
        index={selectedImage}
        slides={imagesLightbox}
        open={selectedImage >= 0}
        close={handleCloseLightbox}
        onGetCurrentIndex={(index) => setCurrentIndex(index)}
      />
    </FormProvider>
  );
}
