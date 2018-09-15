import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FirebaseLogin from '@/components/FirebaseLogin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirebaseLogin',
      component: FirebaseLogin,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
