import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
