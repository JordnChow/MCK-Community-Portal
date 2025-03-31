import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import News from './routes/News/News.jsx'
import Sport from './routes/Sport/Sport.jsx'
import Canteen from './routes/Canteen/Canteen.jsx'
import Achievements from './routes/Achievements/Achievements.jsx'
import Admin from './routes/Admin/Admin.jsx';
import Homepage from './routes/Homepage/Homepage.jsx';
import Article from './routes/Article/Article.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/News",
        element: <News/>
      },
      {
        path: "/Sport",
        element: <Sport/>
      },
      {
        path: "/Canteen",
        element: <Canteen/>
      },
      {
        path: "/Achievements",
        element: <Achievements/>
      },
      {
        path: "/Admin",
        element: <Admin/>
      },
      {
        path: "/Article/:id",
        element: <Article/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
