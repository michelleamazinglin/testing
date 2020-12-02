import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import PostsContainer from './posts/posts_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import InboxContainer from '../components/inbox/inbox_container';
import PostComposeContainer from './posts/post_compose_container';
import Player from './player/player';

const App = () => (
  <div>
    <Player />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/inbox" component={InboxContainer} />
      <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
      {/* <ProtectedRoute exact path="/posts" component={Player} /> */}
    </Switch>
  </div>
);

export default App;