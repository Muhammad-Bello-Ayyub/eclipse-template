import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';
import Home from './pages/Home'
import News from './pages/News'
import Docs from './pages/Docs'
import Blogs from './pages/Blogs'
import Careers from './pages/Careers'
import Partners from './pages/Partners'
import Features from './pages/Features'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={ <Home /> } />
        <Route path='news' element={ <News /> } />
        <Route path='docs' element={<Docs />} />
        <Route path='blog' element={<Blogs />} />
        <Route path='careers' element={<Careers />} />
        <Route path='partners' element={<Partners />} />
        <Route path='features' element={<Features />} />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
