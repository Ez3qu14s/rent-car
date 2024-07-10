import React from 'react';
import motos from '../../mocks/Motos';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap p-2">
      {motos.map((moto) => (
        <div className="card p-4 w-[500px] h-[400px] flex grow-1 flex-col">
          <h1 className="text-2xl font-semibold" key={moto.modelo}>
            {moto.modelo}
          </h1>
          <span className="text-slate-400" key={moto.marca}>
            {moto.marca} {moto.ano}
          </span>
          <img
            className="w-[100%] h-[200px] object-cover"
            key={moto.id}
            src={moto.foto}
            alt=""
          />
          <p className="text-2xl my-2">R$ {moto.diaria}</p>
          <Link
            className="block bg-[#dc2626] p-2 text-slate-100"
            to={`/produto/${moto.id}`}
          >
            Carrinho
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
