import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import Instalation from '../pages/Instalation';
import QuickStart from '../pages/QuickStart';
import Components from '../pages/Components';
import Properties from '../pages/Properties';
import Navigation from '../pages/Navigation';
import Selection from '../pages/Selection';
import Edition from '../pages/Edition';
import CopyPaste from '../pages/CopyPaste';
import Personalization from '../pages/Personalization';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='instalation' element={<Instalation />}/>
          <Route path='quick-start' element={<QuickStart />}/>
          <Route path='components' element={<Components />}/>
          <Route path='properties' element={<Properties />}/>
          <Route path='navigation' element={<Navigation />}/>
          <Route path='selection' element={<Selection />}/>
          <Route path='edition' element={<Edition />}/>
          <Route path='copy-paste' element={<CopyPaste />}/>
          <Route path='personalization' element={<Personalization />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
