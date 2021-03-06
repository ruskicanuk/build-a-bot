import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/partinfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotArms from '../parts/RobotArms.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      }, {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      }, {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      }, {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      }],
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  }],
});
