import { useContent } from './ContentContext';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const { val, handleChange } = useContent();
  const navigate = useNavigate();

  // const handleNextClick = () => {
  //   navigate('/second-page');
  // };

  const firstPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1.5rem 5rem',
    padding: '6rem 15rem',
    height: '93vh',
    boxShadow: '0 0 1px black',
    backgroundColor: 'white',
  };

  const pStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'left',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    fontSize: '2.5rem',
    padding: '0.8rem 1rem',
    marginBlock: '0.5rem',
    backgroundColor: 'rgb(225, 224, 224)',
    border: 'transparent',
    outline: 'transparent',
    borderRadius: '3px',
  };

  const btn = {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    color: 'white',
    marginBlock: '1rem',
    backgroundColor: 'black',
    border: 'transparent',
    outline: 'transparent',
    borderRadius: '3px',
    width: '100%',
  };

  return (
    <div style={firstPageStyle}>
      <p style={pStyle}>Area he visited yesterday for marketing</p>
      <input
        type="text"
        style={inputStyle}
        value={val}
        onChange={handleChange}
      />
      <button style={btn} onClick={() => navigate('/second-page')}>
        Next
      </button>
    </div>
  );
};
export default FirstPage;
