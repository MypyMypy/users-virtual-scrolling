import { SearchForm } from '@/widgets/SearchForm';
import { SearchResults } from '@/widgets/SearchResults';
import { UsersProvider } from '../api/usersContext';

export const Home: React.FC = () => {
  return (
    <UsersProvider>
      <SearchForm />
      <SearchResults />
    </UsersProvider>
  );
};
