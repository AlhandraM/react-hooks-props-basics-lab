// App.js
export const App = ({ name, bio, links }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <a href={links.github}>GitHub</a>
      <a href={links.linkedin}>LinkedIn</a>
    </div>
  );
};
