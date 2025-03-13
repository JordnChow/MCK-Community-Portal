import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import News from './routes/News/News.jsx'
import Sport from './routes/Sport/Sport.jsx'
import Canteen from './routes/Canteen/Canteen.jsx'
import Achievements from './routes/Achievements/Achievements.jsx'
import Admin from './routes/Admin/Admin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
