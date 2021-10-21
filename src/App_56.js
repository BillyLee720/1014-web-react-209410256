import { Switch, Route } from 'react-router-dom';
import Homepage_56 from './pages/Homepage_56';
import ShopTwoPage_56 from './pages/ShopTwoPage_56';
import ContactPage_56 from './pages/ContactPage_56';
import SigninPage_56 from './pages/SigninPage';
import Header_56 from './pages/Header_56';
import './App_56.scss';

function App_56() {
  return (
    <div>
      <Header_56 />
      <Switch>
        <Route exact path='/' component={Homepage_56} />
        <Route exact path='/shop_56' component={ShopTwoPage_56} />
        <Route exact path='/contact_56' component={ContactPage_56} />
        <Route exact path='/signin_56' component={SigninPage_56} />
      </Switch>
    </div>
  );
}

export default App_56;
