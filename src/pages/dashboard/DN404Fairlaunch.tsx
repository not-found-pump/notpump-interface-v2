import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import orderBy from 'lodash/orderBy';
// form
import { useForm } from 'react-hook-form';
// @mui
import { Container, Typography, Stack, Tooltip } from '@mui/material';
// redux
import {useLocales} from 'src/locales';
import {DN404_DEFINE, NOTPUMP_DEFINE_FAIRLAUNCH} from 'src/descriptions/DN404';
import {Box} from '@mui/system';
import Iconify from 'src/components/iconify';
import { useDispatch, useSelector } from '../../redux/store';
import { getProducts } from '../../redux/slices/DN404';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// @types
import { IDN404MetaData, IDN404MetaDataFilter } from '../../@types/DN404';
// components
import FormProvider from '../../components/hook-form';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
// sections
import {
  ShopTagFiltered,
  ShopProductSort,
  DN404List,
  ShopFilterDrawer,
  ShopProductSearch,
} from '../../sections/@dashboard/e-commerce/shop';
import CartWidget from '../../sections/@dashboard/e-commerce/CartWidget';

// ----------------------------------------------------------------------

export default function DN404Fairlaunch() {
  const { themeStretch } = useSettingsContext();

  const dispatch = useDispatch();

  const { products, checkout } = useSelector((state) => state.product);

  const [openFilter, setOpenFilter] = useState(false);
  const {translate} = useLocales()
  const defaultValues = {
    gender: [],
    category: 'All',
    colors: [],
    priceRange: [0, 200],
    rating: '',
    sortBy: 'featured',
  };

  const methods = useForm<IDN404MetaDataFilter>({
    defaultValues,
  });

  const {
    reset,
    watch,
    formState: { dirtyFields },
  } = methods;

  const isDefault =
    (!dirtyFields.gender &&
      !dirtyFields.category &&
      !dirtyFields.colors &&
      !dirtyFields.priceRange &&
      !dirtyFields.rating) ||
    false;

  const values = watch();

  const dataFiltered = applyFilter(products, values);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleResetFilter = () => {
    reset();
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> DN404 list | NotPump</title>
      </Helmet>

      <FormProvider methods={methods}>
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <Typography variant="h4" gutterBottom>
          <Tooltip title={`${translate(NOTPUMP_DEFINE_FAIRLAUNCH)}`} arrow>
          <Box component="span">
             DN404 lists
            <Iconify icon="eva:info-outline" ml={1} color="gray" width={16} />
          </Box>
        </Tooltip>
          </Typography>

          <Typography color="GrayText" gutterBottom>
             {`${translate(DN404_DEFINE)}`}
          </Typography>

          <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <ShopProductSearch />

            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              <ShopFilterDrawer
                isDefault={isDefault}
                open={openFilter}
                onOpen={handleOpenFilter}
                onClose={handleCloseFilter}
                onResetFilter={handleResetFilter}
              />

              <ShopProductSort />
            </Stack>
          </Stack>

          <Stack sx={{ mb: 3 }}>
            {!isDefault && (
              <>
                <Typography variant="body2" gutterBottom>
                  <strong>{dataFiltered.length}</strong>
                  &nbsp;Products found
                </Typography>

                <ShopTagFiltered isFiltered={!isDefault} onResetFilter={handleResetFilter} />
              </>
            )}
          </Stack>

          <DN404List products={dataFiltered} loading={!products.length && isDefault} />

          {/* <CartWidget totalItems={checkout.totalItems} /> */}
        </Container>
      </FormProvider>
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter(products: IDN404MetaData[], filters: IDN404MetaDataFilter) {
  const { gender, category, colors, priceRange, rating, sortBy } = filters;

  const min = priceRange[0];

  const max = priceRange[1];

  // SORT BY
  if (sortBy === 'featured') {
    products = orderBy(products, ['sold'], ['desc']);
  }

  if (sortBy === 'newest') {
    products = orderBy(products, ['createdAt'], ['desc']);
  }

  if (sortBy === 'priceDesc') {
    products = orderBy(products, ['price'], ['desc']);
  }

  if (sortBy === 'priceAsc') {
    products = orderBy(products, ['price'], ['asc']);
  }

  // FILTER PRODUCTS
  if (gender.length) {
    products = products.filter((product) => gender.includes(product.gender));
  }

  if (category !== 'All') {
    products = products.filter((product) => product.category === category);
  }

  if (colors.length) {
    products = products.filter((product) => product.colors.some((color) => colors.includes(color)));
  }

  if (min !== 0 || max !== 200) {
    products = products.filter((product) => product.price >= min && product.price <= max);
  }

  if (rating) {
    products = products.filter((product) => {
      const convertRating = (value: string) => {
        if (value === 'up4Star') return 4;
        if (value === 'up3Star') return 3;
        if (value === 'up2Star') return 2;
        return 1;
      };
      return product.totalRating > convertRating(rating);
    });
  }

  return products;
}
