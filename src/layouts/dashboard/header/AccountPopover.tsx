import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Button, Tooltip, Avatar } from '@mui/material';
// routes
import { randomInArray } from 'src/utils/axios';
import { WALLET } from 'src/descriptions/DN404';
import { formatAddress } from 'src/utils/formatAddress';
import { fCurrency } from 'src/utils/formatNumber';
import { Web3ModalNetworkButton, Web3ModalWalletButton } from 'src/auth/Web3ModalButtons';
import { useWalletInfo, useWeb3Modal, useWeb3ModalEvents, useWeb3ModalState } from '@web3modal/wagmi/react';
import Iconify from 'src/components/iconify';
import {useWalletClient} from 'wagmi';
import useResponsive from 'src/hooks/useResponsive';
import { PATH_DASHBOARD, PATH_AUTH } from '../../../routes/paths';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// components
import { CustomAvatar } from '../../../components/custom-avatar';
import { useSnackbar } from '../../../components/snackbar';
import MenuPopover from '../../../components/menu-popover';
import { IconButtonAnimate } from '../../../components/animate';
import DN404Medias from '../../../DN404.media.json';
// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Home',
    linkTo: '/dashboard/app',
  },
  // {
  //   label: 'Profile',
  //   linkTo: PATH_DASHBOARD.user.profile,
  // },
  {
    label: 'Settings',
    linkTo: PATH_DASHBOARD.user.account,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();
  const isDesktop = useResponsive('up', 'lg');

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleLogout = async () => {
    try {
      logout();
      navigate(PATH_AUTH.login, { replace: true });
      handleClosePopover();
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  const handleClickItem = (path: string) => {
    handleClosePopover();
    navigate(path);
  };
  const avatar = useMemo(() => randomInArray(DN404Medias), []);
  const balance = useMemo(() => fCurrency(Math.random() * 100), []);
  // const web3Event = useWeb3ModalEvents()
  // const web3Modal = useWeb3Modal()

  // useEffect(() => {
  //   web3Modal.open()
  // },[web3Event,web3Modal])
  const web3Modal = useWeb3Modal();
  const wallet = useWalletClient()
  return (
    <>
      {/* <Typography variant="subtitle2" noWrap sx={{ display:'flex'}}>
            {user?.displayName || formatAddress(WALLET)} <Typography variant="subtitle2" sx={{pl: 1, color: 'text.disabled'}}> ({balance})</Typography> 
        </Typography> */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mx: 'auto',
          }}
        />
        <Stack>
          {  wallet.data?.account?.address ? 
          <Tooltip title={`${'Buy crypto via 1Inch on ramp'}`} arrow>
              <Button
                color='inherit'
                sx={{color: 'text.disabled'}}
                onClick={() => {web3Modal.open({view: 'Account'})}}
                variant="outlined"
                startIcon={<Avatar sx={{width: 18, height: 18}} src='https://cdn.1inch.io/logo.png'/>}
                endIcon={<Iconify icon="eva:info-outline" color="gray" width={16} />}
              >
                {' '}
                {isDesktop ? 'Swap'  : ''}
              </Button>
          </Tooltip>
          : ''}
        </Stack>
        <Stack>
          <Tooltip title={`${'Buy crypto via Coinbase on ramp'}`} arrow>
              <Button
                color='inherit'
                sx={{color: 'text.disabled'}}
                onClick={() => {web3Modal.open({view: 'OnRampProviders'})}}
                variant="outlined"
                startIcon={<Avatar sx={{width: 18, height: 18}} src='https://icoholder.com/media/cache/ico_logo_view_page/files/img/3f90198db433d70d4b80933214def548.png'/>}
                endIcon={<Iconify icon="eva:info-outline" color="gray" width={16} />}
              >
                {' '}
                {isDesktop ? 'Buy crypto'  : ''}
              </Button>
          </Tooltip>
        </Stack>
        
        {/* <Web3ModalNetworkButton /> */}
        <Web3ModalWalletButton />
      </Stack>
      {/* <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <CustomAvatar src={user?.photoURL || avatar} alt={user?.displayName} name={user?.displayName} />
      </IconButtonAnimate> */}

      {/* <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 200, p: 0 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName || formatAddress(WALLET)}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover> */}
    </>
  );
}
