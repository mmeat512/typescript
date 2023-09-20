interface Route {
  fragment: string;
  component: () => void;
}

export interface Router {
  addRoute: (fragment: string, component: () => void) => Router;
  start: () => void;
}
// router.js
export default function createRouter() {
  // 애플리케이션의 경로 목록들을 배열에 담는다.
  const routes: Array<Route> = [];

  const router = {
    // 라우터 기능 1. 애플리케이션의 경로 목록들을 저장한다.
    addRoute(fragment: string, component: () => void) {
      routes.push({ fragment, component });
      return this;
    },

    //  라우터 기능 2. 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
    start() {
      // routes 배열에서 현재 브라우저 hash값과 동일한 해시 값을 가진 구성 요소를 찾는다.
      const checkRoutes = () => {
        const currentRoute = routes.find(
          (route) => route.fragment === location.hash
        );
        // 페이지 이동을 보여주기 위해 innerHTML를 변경하는 메서드
        currentRoute?.component();
      };

      // 브라우저에서 hash 값이 바뀔 때 발생하는 이벤트
      window.addEventListener('hashchange', checkRoutes);
      checkRoutes();
    },
  };

  return router;
}
