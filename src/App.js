import React,{useReducer} from 'react'
import AppRouter from './routers/AppRouter';
import UserContext from './context/user-context'
import userReducer from './Reducers/userReducer'

function App() {
  const [user, dispatch] = useReducer(userReducer, {})

  return (
    <UserContext.Provider value={{ user, dispatch}}>
    <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
