import React from 'react';
import GithubUsers from './components/GithubUsers';

const App = () => {
  return (
    
    <div className="App">
      <container>
        <routes>
        <Route path="/" element={<GithubUsers />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/" element={<ShowGithubUser />} />
        </routes>
      </container>
      <h1>GitHub User Search</h1>
      <ul>
        <li><link to="/">Home</link></li>
        <li><link to="/users/:username">User</link></li>
        <li><link to="/">Search</link></li>
      </ul>
      <GithubUsers />
    </div>
  );
};

export default App;