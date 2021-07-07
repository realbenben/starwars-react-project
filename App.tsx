import React from 'react'
// import Header from './src/components/Header'
import LoginScreen from './src/screens/LoginScreen'
import TermsScreen from './src/screens/TermsScreen'
import FeedScreen from './src/screens/FeedScreen'
import StarshipCard from './src/components/StarshipCard'
import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'
import{useStarships} from './src/hooks/useStarships'
import showStarShip from './src/screens/showStarship'

const queryClient = new QueryClient()

const App = () => {

  return(
      // <QueryClientProvider client={queryClient}> <showStarShip/>  </QueryClientProvider>
      // <StarshipCard/>
      <showStarShip/>

  );
};

export default App;
m bljbjl
