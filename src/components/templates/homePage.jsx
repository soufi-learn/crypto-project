import React, { useEffect, useState } from 'react'
import TableCoin from '../modules/tableCoin';
import { getCoinList } from '../services/cryptoAPI';
import Pagination from '../modules/pagination';
import Search from '../modules/search';
import Chart from '../modules/chart';

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('usd');
    const [chart, setChart] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [priceSign, setPriceSign] = useState('$');


    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const response = await fetch(getCoinList(page, currency));
                const data = await response.json();
                setCoins(data);
                setIsLoading(false);
            } catch (error) {
                alert('Somthing went wrong baby! 🤔')
            }
        }

        getData()
    }, [page, currency]);

    return (
        <div className='home-page-container'>
            {!isLoading && <Search currency={currency} chart={chart} setCurrency={setCurrency} setOpenModal={setOpenModal} setChart={setChart} setPriceSign={setPriceSign} />}
            <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} setOpenModal={setOpenModal} priceSign={priceSign} />
            {!isLoading && <Pagination page={page} setPage={setPage} />}
            <Chart chart={chart} setChart={setChart} modal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default HomePage
