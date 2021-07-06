import React from 'react'
// import Header from './src/components/Header'
import LoginScreen from './src/screens/LoginScreen'
import TermsScreen from './src/screens/TermsScreen'
import FeedScreen from './src/screens/FeedScreen'
import StarshipCard from './src/components/StarshipCard'
import fetchAsync from './lib/fetchAsync'
const App = () => {
  return(
    <>
      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}
      {/* <FeedScreen /> */}
      {/* <fetchAsync/> */}
      <StarshipCard/>
      {/* <Header/> */}
    </>
  );
};

export default App;
