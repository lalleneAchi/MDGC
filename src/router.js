import Vue from "vue";
import Router from "vue-router";
import Web19202 from "./components/Web19202";
import { web19202Data } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Web19202,
      props: { ...web19202Data },
    },
  ],
});
