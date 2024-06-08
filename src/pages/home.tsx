import { useState } from 'react';

interface Props {
  name: string;
  age: number;
}
const Home = ({ name, age }: Props) => {
  const [isValue, setValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //   };
  return (
    <div className=' w-full h-screen bg-black text-gray-400'>
      <input type='text' onChange={handleChange} />
      <p>{isValue}</p>
      <p>
        {name} {age}
      </p>
    </div>
  );
};

export default Home;
