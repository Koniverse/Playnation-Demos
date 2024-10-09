import './index.css';
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from '@src/pages/Home';
import {AppRoot} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import {ErrorPage} from "@src/pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  }
])

// Auto expand the app
Telegram.WebApp.expand();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot>
      <RouterProvider router={router}/>
    </AppRoot>
  </StrictMode>,
)
