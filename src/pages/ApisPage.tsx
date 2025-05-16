import { useNavigate } from 'react-router-dom';

const ApisPage = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 container-custom">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
      >
        ← Voltar
      </button>

      <h1 className="heading-lg mb-6 text-center">Integração com APIs</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Estas são fontes de dados externas integradas à nossa plataforma.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold">API</th>
              <th className="px-6 py-4 font-semibold">Fonte</th>
              <th className="px-6 py-4 font-semibold">Tipo de Dado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4">INMET</td>
              <td className="px-6 py-4">Instituto Nacional de Meteorologia</td>
              <td className="px-6 py-4">Precipitação</td>
            </tr>
            <tr className="border-t">
              <td className="px-6 py-4">ANA</td>
              <td className="px-6 py-4">Agência Nacional de Águas</td>
              <td className="px-6 py-4">Qualidade da Água</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ApisPage;
