import { GoSearch } from 'react-icons/go';

const Clients = () => {
  return (
    <main className=' w-full mt-3 px-5'>
      <div className=' border rounded w-full overflow-x-hidden flex items-center justify-between pr-2'>
        <input
          type='text'
          className=' w-full p-2 text-sm'
          placeholder='pesquisar...'
        />
        <GoSearch size={20} color='gray' />
      </div>
    </main>
  );
};

export default Clients;
