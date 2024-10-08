// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';
import SturppyPage from '@/components/SturppyPage.vue';
import DirectoryPage from '@/components/DirectoryPage.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout
    },
    {
      path: '/sturppypage',
      name: 'SturppyPage',
      component: SturppyPage
    },
    {
      path: '/directorypage',
      name: 'DirectoryPage',
      component: DirectoryPage
    }
  ]
});
