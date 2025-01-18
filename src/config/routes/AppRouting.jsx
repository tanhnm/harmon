import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { Home } from '../../pages/HomePage/components/Home';

const AppRouting = () => {
  return (
    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/register' element={<Register />} /> */}
      <Route exact path='/' element={<HomePage />}>
        <Route path='' element={<Home />} />
        {/* <Route path='blog' element={<Blog />}>
          <Route path='' element={<BlogList />} />
          <Route path='detail/:id' element={<BlogDetail />} />
        </Route>
        <Route path='payment' element={<Payment />} /> */}
      </Route>
      {/* <Route path='*' element={<PagesNotFound />} /> */}
    </Routes>
  );
};

export default AppRouting;
