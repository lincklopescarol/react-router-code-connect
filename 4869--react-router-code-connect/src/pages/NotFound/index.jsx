import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  function redirecionarInicio() {
    return navigate("/");
  };

  return (
    <main style={{}}>
      <h1 style={{ color: "white", display: "flex", justifyContent: "center" }}>
        Ops! 404, Página não encontrada.
      </h1>
      <div style={{textAlign:"center"}}>
      <button onClick={redirecionarInicio}>Voltar para a tela inicial</button>
      </div>
    </main>
  );
};
