const homeStyle = {
  textAlign: 'center',
};

export default function HomeView({ name }) {
  return <h1 style={homeStyle}>Приветствую тебя, {name} </h1>;
}
