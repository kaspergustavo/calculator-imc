import React, { useState } from 'react';
import './App.css'; // Certifique-se de que o CSS está sendo importado

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura > 0 && peso > 0) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);

      setImc(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        setClassificacao('Abaixo do peso.');
      } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
        setClassificacao('Peso normal.');
      } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
        setClassificacao('Acima do peso.');
      } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
        setClassificacao('Obesidade de Grau 1.');
      } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
        setClassificacao('Obesidade de Grau 2.');
      } else {
        setClassificacao('Obesidade de Grau 3.');
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm): </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div>
          <h3>Seu IMC é: {imc}</h3>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
