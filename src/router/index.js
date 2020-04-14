import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';
import SidebarStandard from '../components/sidebars/SidebarStandard.vue';
import SidebarBuild from '../components/sidebars/SidebarBuild.vue';
import ShoppingCart from '../components/cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        { path: 'heads', name: 'BrowseHeads', component: RobotHeads },
        { path: 'arms', name: 'BrowseArms', component: RobotArms },
        { path: 'torsos', name: 'BrowseTorsos', component: RobotTorsos },
        { path: 'bases', name: 'BrowseBases', component: RobotBases },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
    { path: '/cart', name: 'Cart', component: ShoppingCart },
  ],
});
