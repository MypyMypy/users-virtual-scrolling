import { useState } from 'react';
import { useUsersContext } from '@/pages/Home/api/usersContext';
import { useDebounce } from '@/shared/hooks';
import './styles.css';

export function SearchForm() {
  const { fetchUsers } = useUsersContext();
  const [value, setValue] = useState('');
  const debouncedRequest = useDebounce(fetchUsers, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    debouncedRequest({ searchUser: newValue, append: false });
  };

  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          placeholder="Search User"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
