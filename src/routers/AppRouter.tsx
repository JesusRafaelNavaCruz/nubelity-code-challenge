import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/common/Home';
import Users from '../pages/users/index';
import Nationalities from '../pages/users/Nationalities';

export default function AppRouter() {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home />}
        />
        <Route
            path='/users'
            element={<Users />}        
        />
        <Route
            path='/users/nationality/:nationality'
            element={<Nationalities />}        
        />
    </Routes>
  )
}
