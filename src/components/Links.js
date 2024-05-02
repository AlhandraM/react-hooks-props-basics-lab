import React from "react";
import About from "./About.js";

const Links = ({ githubLink, linkedinLink }) => {
  return (
    <div>
      <h3>Links</h3>
      <a href={githubLink}>{githubLink}</a>
      <a href={linkedinLink}>{linkedinLink}</a>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Links
        githubLink="https://github.com/liza"
        linkedinLink="https://www.linkedin.com/in/liza/"
      />
    </div>
  );
};

export default App;
