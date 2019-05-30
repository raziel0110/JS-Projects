import React from "react";
import RepoSearch from "./repoSearch";
import store from "./store";

const App = props => {
  return (
    <div>
      <RepoSearch store={store} />
    </div>
  );
};

export default App;
