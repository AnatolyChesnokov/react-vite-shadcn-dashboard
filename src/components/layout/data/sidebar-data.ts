import {
  IconHistory,
  IconLayoutDashboard,
  IconList,
  IconStatusChange,
  IconCheckupList,
} from '@tabler/icons-react'
import logo from '@/assets/logo.webp'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Анатолий Чесноков',
    email: 'anatoly.chesnokov@burservis.ru',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Бурсервис',
      logo: logo,
      plan: '',
    },
  ],
  navGroups: [
    {
      title: 'Страницы',
      items: [
        {
          title: 'Дашборд',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'История действий',
          url: '/logs',
          icon: IconHistory,
        },
        {
          title: 'Статусы оборудования',
          url: '/equipment',
          icon: IconStatusChange,
        },
        {
          title: 'Статистика',
          url: '/statistics',
          icon: IconCheckupList,
        },
        {
          title: 'Справочники',
          url: '/catalogs',
          icon: IconList,
        },
        // {
        //   title: 'Tasks',
        //   url: '/tasks',
        //   icon: IconChecklist,
        // },
        // {
        //   title: 'Apps',
        //   url: '/apps',
        //   icon: IconPackages,
        // },
        // {
        //   title: 'Chats',
        //   url: '/chats',
        //   badge: '3',
        //   icon: IconMessages,
        // },
        // {
        //   title: 'Users',
        //   url: '/users',
        //   icon: IconUsers,
        // },
      ],
    },
  ],
}
