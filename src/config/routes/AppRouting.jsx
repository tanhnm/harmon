import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { Home } from '../../pages/HomePage/components/Home';
import { Expert } from '../../pages/Expert';
import { Discover } from '../../pages/Discover';
import { Community } from '../../pages/Community';
import { PageNotFound } from '../../pages/PagesNotFound';

const AppRouting = () => {
  return (
    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/register' element={<Register />} /> */}
      <Route exact path='/' element={<HomePage />}>
        <Route path='' element={<Home />} />
      </Route>
      <Route exact path='/experts' element={<Expert />}></Route>
      <Route exact path='/discover' element={<Discover />}></Route>
      <Route exact path='/community' element={<Community />}></Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouting;
