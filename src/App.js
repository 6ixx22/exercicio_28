import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const imcValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setImc(imcValue);
      classifyIMC(imcValue);
    }
  };

  const classifyIMC = (imc) => {
    if (imc < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassification('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassification('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setClassification('Obesidade grau 1');
    } else if (imc >= 35 && imc <= 39.9) {
      setClassification('Obesidade grau 2');
    } else {
      setClassification('Obesidade grau 3');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Digite sua altura em cm"
        />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Digite seu peso em kg"
        />
      </div>
      <button onClick={calculateIMC}>Calcular IMC</button>

      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <h3>Classificação: {classification}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
