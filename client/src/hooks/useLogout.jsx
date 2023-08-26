// imports
import { useAuthContext } from './useAuthContext';
import { useFloraContext } from './useFloraContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: florasDispatch } = useFloraContext();

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });

    florasDispatch({ type: 'LIST_FLORAS', payload: null });
  };

  return { logout };
};
