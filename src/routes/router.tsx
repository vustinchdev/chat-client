import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ChatPage, MainPage } from '@/pages'

export const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: '/',
  },
  {
    element: <ChatPage />,
    path: '/chat',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
