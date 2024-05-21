import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainPage } from '@/pages'
import { ChatPage } from '@/pages/chat-page'

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
