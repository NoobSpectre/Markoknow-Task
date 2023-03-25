import { createContext, useContext, useState } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

const ContentProvider = ({ children }) => {
  const [val, setVal] = useState('');

  const handleChange = e => {
    setVal(e.target.value);
  };

  return (
    <ContentContext.Provider
      value={{
        val,
        handleChange,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
