import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import BlogPost from './containers/pages/blog/BlogPost';
import Blog from './containers/pages/blog/Blog';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />
          {/* Home Display */}
          <Route path="" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
