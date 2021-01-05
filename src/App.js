import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { NotFoundPage } from './components/pages/NotFound';
import { HomePage } from './components/pages/Home';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { CartPage } from './components/pages/Cart';
import { ProductPage } from './components/pages/Product';
import { CreateProduct } from './components/pages/CreateProduct';
import { SellerPage } from './components/pages/Seller';
import { PurchaseHistory } from './components/pages/PurchaseHistory';

export default function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}

        <SecureRoute path="/" exact component={() => <HomePage />} />

        <SecureRoute
          path="/marketplace/cart"
          exact
          component={() => <CartPage />}
        />
        <SecureRoute
          path="/marketplace/item/:id"
          exact
          component={() => <ProductPage />}
        />
        <SecureRoute
          path="/marketplace/create"
          exact
          component={() => <CreateProduct />}
        />

        <SecureRoute
          path="/marketplace/seller/:name"
          exact
          component={() => <SellerPage />}
        />

        <SecureRoute
          path="/marketplace/buyer/history"
          exact
          component={() => <PurchaseHistory />}
        />

        <Route path="404" component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
