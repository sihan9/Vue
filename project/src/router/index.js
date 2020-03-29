import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import UserInformation from '@/components/User/UserInformation'
import UserPublish from '@/components/User/UserPublish'
import UserCollection from '@/components/User/UserCollection'
import AdminInformation from '@/components/Admin/AdminInformation'
import OffMaterial from '@/components/Material/OffMaterial'
import UserMaterial from '@/components/Material/UserMaterial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/userInformation',
      name: 'userInformation',
      component: UserInformation
    },
    {
      path: '/userPublish',
      name: 'userPublish',
      component: UserPublish
    },
    {
      path: '/userCollection',
      name: 'userCollection',
      component: UserCollection
    },
    {
      path: '/adminInformation',
      name: 'adminInformation',
      component: AdminInformation
    },
    {
      path: '/offMaterial',
      name: 'offMaterial',
      component: OffMaterial
    },
    {
      path: '/userMaterial',
      name: 'userMaterial',
      component: UserMaterial
    }
  ]
})
