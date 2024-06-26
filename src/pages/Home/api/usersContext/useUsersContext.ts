import { useContext } from 'react';
import { UsersContext } from './UsersContextProvider';

export function useUsersContext() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
}
