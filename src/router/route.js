import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root";
import HotTrendList from "../pages/HotTrendList";
import SearchResultList from "../pages/SearchResultList";
import DetailList from "../pages/DetailList";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: 만들어야 함,
    children: [
      {
        index: true,
        element: <HotTrendList />
      },
      {
        path: 'detail',
        element: <DetailList />
      },
      {
        path: 'search',
        element: <SearchResultList />
      }
    ]
  }
])
