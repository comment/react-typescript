import {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import CryptoSummary from "./components/CryptoSummary";

export type Crypto =
    {
        ath: number;
        atl: number
        current_price: number;
        id: string;
        name: string;
        symbol: string;
        high_24h: number;
        low_24h: number;
    }

function App() {
    const [cryptos, setCryptos] = useState<Crypto[] | null>();
    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
        axios.get(url).then((response) => {
            setCryptos(response.data)
        })
    })
    return <div className="App">
        {cryptos ? cryptos.map((crypto) => {
            return <CryptoSummary crypto={crypto} />
    }) : null}</div>
}

export default App;
