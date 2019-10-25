import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Upload from './Pages/Upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/blogs" component={Blogs}></Route>
            <Route path="/upload" component={Upload}></Route>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
