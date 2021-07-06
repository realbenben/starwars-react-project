import React from 'react'
// import Header from './src/components/Header'
import LoginScreen from './src/screens/LoginScreen'
import TermsScreen from './src/screens/TermsScreen'
import FeedScreen from './src/screens/FeedScreen'
import StarshipCard from './src/components/StarshipCard'
import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'
const App = () => {
  return(
    <>
      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}
      <StarshipCard/>
      {/* <Header/> */}
    </>
  );
};

export default App;
