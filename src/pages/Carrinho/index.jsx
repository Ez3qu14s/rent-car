import React from 'react';
import { Link, useParams } from 'react-router-dom';
import motos from '../../mocks/Motos';
import './responsive.css';
const Carrinho = () => {
  const [valor, setValor] = React.useState(null);
  const [precoTotal, setPrecoTotal] = React.useState(null);
  const { id } = useParams();

  const motoID = motos.find((moto) => moto.id === Number(id));
  const motosFiltrado = motos.filter((moto) => moto.id !== Number(id));

  function handleClick() {
    if (valor >= 10) {
      return setPrecoTotal((motoID.diaria * valor) / 2);
    }
    return setPrecoTotal(motoID.diaria * valor);
  }

  return (
    <>
      <div className="grid grid-cols-2 w-[900px] my-[0] mx-[auto] h-[400px]">
        <img className="object-cover h-[100%]" src={motoID.foto} alt="" />
        <div className="p-8">
          <h1 className="text-center font-semibold text-2xl mb-6">
            Detalhes do veiculo
          </h1>
          <h2 className="text-xl font-semibold">{motoID.modelo}</h2>
          <p>Modelo: {motoID.modelo}</p>
          <p>Categoria: {motoID.categoria}</p>
          <p>Ano: {motoID.ano}</p>
          <p>Diária: R$ {motoID.diaria}</p>

          <input
            className="rounded border-2 py-1 px-2 border-slate-600 mr-4 mt-5 w-[70%]"
            type="number"
            placeholder="Dias"
            onChange={({ target }) => setValor(target.value)}
          />
          <button
            onClick={handleClick}
            className="bg-[#3b82f6] py-1 px-4 border-2 border-[#3b82f6] rounded"
          >
            Calcular
          </button>

          {precoTotal && <p className="text-5xl mt-6">R$ {precoTotal}</p>}
        </div>
      </div>
      <div className="flex justify-center flex-wrap p-2 gap-8 mt-12 mb-12">
        {motosFiltrado.map((moto) => (
          <div className="card p-2 hover:scale-110">
            <img
              src={moto.foto}
              className="w-[300px] h-[200px] object-cover"
              alt=""
            />
            <div>
              <h1>{moto.modelo}</h1>
              <p className="font-medium text-2xl">R$ {moto.diaria}</p>
              <Link
                className="block p-2 bg-[#dc2626] text-slate-100 mt-2"
                to={`/produto/${moto.id}`}
              >
                Carrinho
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrinho;
