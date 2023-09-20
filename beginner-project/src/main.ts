import './css/index.scss';
import { addRouteList, pageStr } from './router';
import createRouter from './router/router';
import createPages from './router/createPages';
import { main } from './pages/main';

const container = document.querySelector<HTMLDivElement>(
  '#app'
) as HTMLDivElement;

container!.innerHTML = main;

const pages = createPages(container, pageStr);

const router = createRouter();

addRouteList(router, pages).start();
