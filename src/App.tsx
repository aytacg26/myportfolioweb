import React, { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './components/Pages/Home/HomePage';
import NFTArt from './components/Pages/NFTArt/NFTArt';
import AboutMe from './components/Pages/About/AboutMe';
import Contact from './components/Pages/Contact/Contact';
import WebPortfolio from './components/Pages/WebPortfolio/WebPortfolio';
import Header from './components/UI/Header/Header';
import SideDrawer from './components/UI/SideDrawer/SideDrawer';
import Settings from './components/UI/Settings/Settings';
import { closeAllMenus } from './store/Actions/modeActions';
import Footer from './components/UI/Footer/Footer';
import ItemPage from './components/Pages/ItemPage/ItemPage';
import { IRootState } from './Interfaces/IState';

const App = () => {
  const dispatch = useDispatch();
  const { openSettings, darkMode, toggleDrawer } = useSelector(
    (state: IRootState) => state.mode
  );
  const appRef = useRef<HTMLDivElement>(null);

  const screenClickHandler = () => {
    if (openSettings || toggleDrawer) {
      dispatch(closeAllMenus());
    }
  };

  return (
    <Fragment>
      <Header />
      {openSettings && <Settings />}
      <SideDrawer />

      <div
        className='App'
        style={{ backgroundColor: darkMode ? '#252526' : '#fff' }}
        ref={appRef}
        onClick={screenClickHandler}
      >
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/nft-art' exact component={NFTArt} />
          <Route path='/nft-art/:id' component={ItemPage} />
          <Route path='/web-portfolio' component={WebPortfolio} />
          <Route path='/about' component={AboutMe} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
