import React, { useState } from 'react';

const App = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('Bolivianos');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const countries = [
      'USD',
      'Bolivianos',
      'Pesos chilenos',
      'Pesos argentinos',
      'Colones costarricenses',
      'Pesos cubanos',
      'Pesos dominicanos',
      'Quetzales guatemaltecos',
      'Lempiras hondureños',
      'Pesos mexicanos',
      'Balboas panameñas',
      'Guaraníes paraguayos',
      'Soles peruanos',
      'Pesos uruguayos',
      'Bolívares venezolanos'
     
  ];
  
  const exchangeRates = {
      'USD': 1,
      'Bolivianos': 6.96,
      'Pesos chilenos': 770.5,
      'Pesos argentinos': 96.5,
      'Colones costarricenses': 610.50,
      'Pesos cubanos': 24,
      'Pesos dominicanos': 57.50,
      'Quetzales guatemaltecos': 7.8,
      'Lempiras hondureños': 24.80,
      'Pesos mexicanos': 20.10,
      'Balboas panameñas': 1, 
      'Guaraníes paraguayos': 6895.5,
      'Soles peruanos': 3.85,
      'Pesos uruguayos': 42.5,
      'Bolívares venezolanos': 2138300, 
  };
  

    const convertCurrency = (amount, fromCurrency, toCurrency) => {
        if (!amount || !fromCurrency || !toCurrency) return;

        const inUsd = amount / exchangeRates[fromCurrency];
        return inUsd * exchangeRates[toCurrency];
    };

    return (
        <div>
            <h1>Convertidor de divisas</h1>

            <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
                {countries.map(currency => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                {countries.map(currency => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            <button onClick={() => setConvertedAmount(convertCurrency(amount, fromCurrency, toCurrency))}>
                Convertir
            </button>

            {convertedAmount !== null && (
            <div>El valor en {toCurrency} es: {convertedAmount.toFixed(2)}</div>
            )}
        </div>
    );
}

export default App;
