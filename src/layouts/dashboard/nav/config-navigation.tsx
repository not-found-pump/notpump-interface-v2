// routes
import {DN404_DEFINE} from 'src/descriptions/DN404';
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon('ic_blog'),

  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'home',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.analytics,
      },
      // { title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      // { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      // { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
      // { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
      // { title: 'file', path: PATH_DASHBOARD.general.file, icon: ICONS.file },
    ],
  },
  // { title: 'user', subheader: 'user', path: PATH_DASHBOARD.user.profile, items: [] },
  // {
  //       title: 'blank',
  //       path: PATH_DASHBOARD.user.profile,
  //       icon: ICONS.blank,
  // },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'List',
    items: [
      // USER
      // { title: 'wallet', icon: ICONS.user, path: PATH_DASHBOARD.user.profile },
      {
        title: 'Top DN404',
        path: PATH_DASHBOARD.dn404.root,
        icon: ICONS.menuItem,
        caption: 'NotPump use DN404 as a main token - is an implementation of a co-joined ERC20 and ERC721 pair.',
      },
      // INVOICE

      // BLOG
      { title: 'Create DN404', icon: ICONS.label, path: PATH_DASHBOARD.createDn404.create, caption: DN404_DEFINE},
      {
        title: 'Docs',
        path: 'https://www.notion.so/Notpump-172f28f798ed4c66a4bae4b96c16d7a5?pvs=4',
        icon: ICONS.external,
      },

      // {
      //   title: 'Design',
      //   path: PATH_DASHBOARD.invoice.root,
      //   icon: ICONS.invoice,
      //   children: [
      //     { title: 'tx history', path: PATH_DASHBOARD.invoice.list },
      //     { title: 'Layout for fairlaunch descriptions', path: PATH_DASHBOARD.invoice.demoView },
      //     // { title: 'create', path: PATH_DASHBOARD.invoice.new },
      //     // { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
      //   ],
      // },

      // {
      //   title: 'user',
      //   path: PATH_DASHBOARD.user.root,
      //   icon: ICONS.user,
      //   children: [
      //     { title: 'profile', path: PATH_DASHBOARD.user.profile },
      //     { title: 'cards', path: PATH_DASHBOARD.user.cards },
      //     { title: 'list', path: PATH_DASHBOARD.user.list },
      //     { title: 'create', path: PATH_DASHBOARD.user.new },
      //     { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
      //     { title: 'account', path: PATH_DASHBOARD.user.account },
      //   ],
      // },

      // E-COMMERCE
      // {
      //   title: 'ecommerce',
      //   path: PATH_DASHBOARD.dn404.root,
      //   icon: ICONS.cart,
      //   children: [
      //     { title: 'shop', path: PATH_DASHBOARD.PATH_DASHBOARD.dn404 },
      //     { title: 'product', path: PATH_DASHBOARD.dn404.demoView },
      //     { title: 'list', path: PATH_DASHBOARD.dn404.list },
      //     { title: 'create', path: PATH_DASHBOARD.dn404.new },
      //     { title: 'edit', path: PATH_DASHBOARD.dn404.demoEdit },
      //     { title: 'checkout', path: PATH_DASHBOARD.dn404.checkout },
      //   ],
      // },
      // {
      //   title: 'blog',
      //   path: PATH_DASHBOARD.createDn404.create.root,
      //   icon: ICONS.blog,
      //   children: [
      //     { title: 'post', path: PATH_DASHBOARD.createDn404.create.demoView },
      //     { title: 'create', path: PATH_DASHBOARD.createDn404.create.new },
      //   ],
      // },
      // {
      //   title: 'File manager',
      //   path: PATH_DASHBOARD.fileManager,
      //   icon: ICONS.folder,
      // },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     {
  //       title: 'mail',
  //       path: PATH_DASHBOARD.mail.root,
  //       icon: ICONS.mail,
  //       info: <Label color="error">+32</Label>,
  //     },
  //     {
  //       title: 'chat',
  //       path: PATH_DASHBOARD.chat.root,
  //       icon: ICONS.chat,
  //     },
  //     {
  //       title: 'calendar',
  //       path: PATH_DASHBOARD.calendar,
  //       icon: ICONS.calendar,
  //     },
  //     {
  //       title: 'kanban',
  //       path: PATH_DASHBOARD.kanban,
  //       icon: ICONS.kanban,
  //     },
  //   ],
  // },

  // DEMO MENU STATES
  // {
  //   subheader: 'Other cases',
  //   items: [
  //     // {
  //       // default roles : All roles can see this entry.
  //       // roles: ['user'] Only users can see this item.
  //       // roles: ['admin'] Only admin can see this item.
  //       // roles: ['admin', 'manager'] Only admin/manager can see this item.
  //       // Reference from 'src/guards/RoleBasedGuard'.
  //     //   title: 'item_by_roles',
  //     //   path: PATH_DASHBOARD.permissionDenied,
  //     //   icon: ICONS.lock,
  //     //   roles: ['admin'],
  //     //   caption: 'only_admin_can_see_this_item',
  //     // },
  //     // {
  //     //   title: 'menu_level',
  //     //   path: '#/dashboard/menu_level',
  //     //   icon: ICONS.menuItem,
  //     //   children: [
  //     //     {
  //     //       title: 'menu_level_2a',
  //     //       path: '#/dashboard/menu_level/menu_level_2a',
  //     //     },
  //     //     {
  //     //       title: 'menu_level_2b',
  //     //       path: '#/dashboard/menu_level/menu_level_2b',
  //     //       children: [
  //     //         {
  //     //           title: 'menu_level_3a',
  //     //           path: '#/dashboard/menu_level/menu_level_2b/menu_level_3a',
  //     //         },
  //     //         {
  //     //           title: 'menu_level_3b',
  //     //           path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b',
  //     //           children: [
  //     //             {
  //     //               title: 'menu_level_4a',
  //     //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4a',
  //     //             },
  //     //             {
  //     //               title: 'menu_level_4b',
  //     //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4b',
  //     //             },
  //     //           ],
  //     //         },
  //     //       ],
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   title: 'item_disabled',
  //     //   path: '#disabled',
  //     //   icon: ICONS.disabled,
  //     //   disabled: true,
  //     // },

  //     // {
  //     //   title: 'item_label',
  //     //   path: '#label',
  //     //   icon: ICONS.label,
  //     //   info: (
  //     //     <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
  //     //       NEW
  //     //     </Label>
  //     //   ),
  //     // },
  //     // {
  //     //   title: 'item_caption',
  //     //   path: '#caption',
  //     //   icon: ICONS.menuItem,
  //     //   caption:
  //     //     'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
  //     // },
  //     // {
  //     //   title: 'blank',
  //     //   path: PATH_DASHBOARD.blank,
  //     //   icon: ICONS.blank,
  //     // },
  //   ],
  // },
];

export default navConfig;
