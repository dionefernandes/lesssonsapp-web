import { createBrowserRouter } from "react-router-dom";

import Login from './pages/login';
import Lessons from './pages/lessons';
import NewLesson from './pages/newlesson';
import UpdateLesson from "./pages/updatelesson";
import ViewLesson from "./pages/viewlesson";
import DeleteLesson from "./pages/deletelesson";
import ExpiredToken from "./pages/expiredtokens";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/lessons',
    element: <Lessons />,
  },
  {
    path: '/viewlesson/:id',
    element: <ViewLesson />,
  },
  {
    path: '/newlesson',
    element: <NewLesson />,
  },
  {
    path: '/updatelesson/:id',
    element: <UpdateLesson />,
  },
  {
    path: '/deletelesson/:id',
    element: <DeleteLesson />,
  },
  {
    path: '/expiredtokens',
    element: <ExpiredToken />,
  },
  {
    path: '*',
    Component: ( () => <h1>Page not found</h1> ),
  },
]);

export default router;