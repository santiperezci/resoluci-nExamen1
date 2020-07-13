import React,{useState} from 'react';
import Body from './components/Body'
import client from './components/client'
import AppContext from './components/AppContext';
import { ApolloProvider } from '@apollo/client';
import Search from './components/Search';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);

  const store = {
    name: {get:name, set:setName},
    status: {get: status, set: setStatus},
    page: {get: page, set: setPage}
  }

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={store}>
    <div className="App">
      <Search />
      <Body/>
    </div>
    </AppContext.Provider>
    </ApolloProvider>
  );
}

export default App;
