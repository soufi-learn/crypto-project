import React from 'react'
import { RotatingLines } from 'react-loader-spinner';
import TableRow from './tableRow';
import '../../css/table-coin.css';

function TableCoin({ coins, isLoading, setChart, setOpenModal, priceSign }) {
    return (
        isLoading ? (
            <div className='d-flex justify-content-center'>
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="grey"
                    strokeWidth="4"
                    strokeColor='#9EC8B9'
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
        ) :
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total Volume</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {coins.map(coin => (
                            <TableRow coin={coin} key={coin.id} setChart={setChart} setOpenModal={setOpenModal} priceSign={priceSign} />
                        ))}
                    </tbody>
                </table>
            </div>

    )
}

export default TableCoin;
