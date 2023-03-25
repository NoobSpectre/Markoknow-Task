import { useContent } from "./ContentContext";

const SecondPage = ({ id }) => {
  const { val } = useContent();
  
  const secondPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '1.5rem 5rem',
    padding: '6rem 15rem',
    height: '94vh',
    boxShadow: '0 0 1px black',
    backgroundColor: 'white',
  };

  const cmnStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const firstChild = {
    ...cmnStyle,
    marginTop: '5rem',
    fontWeight: '900',
  };

  const secondChild = {
    ...cmnStyle,
    fontSize: '1.5rem',
    color: 'grey',
  };

  return (
    <div id={id} style={secondPageStyle}>
      <p style={firstChild}>Area he visited for marketing</p>
      <p style={secondChild}>{val}</p>
    </div>
  );
};
export default SecondPage;
