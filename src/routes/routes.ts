import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?: Route[]
}
// lazy en una funcion que regresa una promesa
// const LazyPage1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
// );
// const LazyPage2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
// );
// const LazyPage3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
// );

export const routes: Route[] = [
  {
    path: "/lazyload",
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
        )
    ),
    name: "LazyLoad Nested",
  },
  {
    path: "/no-lazy",
    component: NoLazy,
    name: "no lazy component",
  },
];
