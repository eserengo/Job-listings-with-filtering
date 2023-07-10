import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout'
import Display from './pages/Display'
import ErrorPage from './pages/Error'
import './styles/App.css'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Display /> }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;