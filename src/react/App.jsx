import { QueryClient, QueryClientProvider } from 'react-query';

import BeerTasterContainer from './components/BeerTasterContainer';
import './styles.css';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <BeerTasterContainer/>
  </QueryClientProvider>
);

export default App;
