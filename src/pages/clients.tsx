import { useEffect, useState } from 'react';
import { GoPerson, GoSearch } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';

interface Clients {
  cpf: string;
  createdAt: Date;
  email?: string;
  endereco: string;
  id: number;
  nome: string;
  telefone: string;
  updateAt: Date;
}
const Clients = () => {
  const [isClient, setClient] = useState<string | null>(null);
  const [isListOfClient, setListOfClient] = useState<Clients[] | null>(null);

  useEffect(() => {
    const fetchAllClients = async () => {
      const response = await fetch('http://localhost:2323/clinic/clients');
      const data = await response.json();
      console.log(data);

      if (data) setListOfClient(data);
    };

    const fetchClientByName = async () => {
      const response = await fetch(
        `http://localhost:2323/clinic/client/${isClient}`
      );
      const data = await response.json();

      console.log(data);
      if (data) setListOfClient(data);
    };

    isClient && isClient.length > 5 ? fetchClientByName() : fetchAllClients();
  }, [isClient]);

  return (
    <main className=' w-full mt-3 px-5 h-full'>
      <div className=' border rounded w-full overflow-x-hidden flex items-center justify-between pr-2'>
        <input
          type='text'
          className=' w-full p-2 text-sm'
          placeholder='pesquisar...'
          onChange={({ target }) => setClient(target.value)}
        />
        <GoSearch size={20} color='gray' />
      </div>

      <section className=' w-full max-h-[500px] overflow-y-auto flex flex-col gap-2 mt-5'>
        {isListOfClient && isListOfClient.length > 0
          ? isListOfClient.map((client: Clients) => (
              <div
                className=' rounded border p-3 flex flex-col gap-3'
                key={client.id}
              >
                <div className=' flex items-center  gap-3'>
                  <div className=' p-2 bg-[#4bbdff] rounded'>
                    <GoPerson size={20} color='white' />
                  </div>
                  <section className='flex flex-col justify-center gap-1'>
                    <h2 className=' font-medium text-sm'>{client.nome}</h2>
                    <h3 className=' text-xs text-slate-400'>
                      {client.cpf.slice(0, 9)}****
                    </h3>
                  </section>
                </div>
                <div className=' flex flex-col gap-1'>
                  <p className=' text-sm text-slate-600 flex items-center gap-2'>
                    <span className='flex items-center p-1'>
                      <IoLocationOutline size={17} />
                    </span>
                    {client.endereco}
                  </p>
                  <p className=' text-sm text-slate-600 flex items-center gap-2'>
                    <span className=' flex items-center p-1'>
                      <LuPhone size={15} />
                    </span>
                    {client.telefone}
                  </p>
                </div>
              </div>
            ))
          : 'nenhum cliente cadastrado'}
      </section>
    </main>
  );
};

export default Clients;
