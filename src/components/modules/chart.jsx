import ReactDOM from 'react-dom';
import ModalBackdrop from './modalBackdrop';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import ChartComponent from './chartComponent';
import { convertData } from '../helpers/convertData';
import { RotatingLines } from 'react-loader-spinner';

function Chart({ chart, setChart, modal, setOpenModal }) {
    const [type, setType] = useState('prices');

    const typeHandler = (e) => {
        if (e.target.tagName === 'BUTTON') {
            const type = e.target.innerText.toLowerCase().replace(' ', '_');
            setType(type);
        }
    }

    const closeModal = () => {
        setOpenModal(false)
        setChart(false);
    }
    return ReactDOM.createPortal(
        <ModalBackdrop setChart={setChart} modal={modal} setOpenModal={setOpenModal} >
            <button className='btn modal-close-btn' onClick={closeModal}>
                <FaTimes />
            </button>

            {/* chart */}
            <div className="chart-container">

                <div className='chart-box'>
                    {chart ? <div className='chart-inner-box'>

                        {chart.coin &&
                            <div className="coin-info-box">
                                <img src={chart.coin.image || chart.coin.large} alt={chart.coin.id} className='coin-icon' />
                                <h4 className='coin-name'>{chart.coin.id}</h4>
                            </div>
                        }

                        <ChartComponent type={type} data={convertData(chart, type)} />

                        <div className='chart-btn-wrapper' onClick={typeHandler}>
                            <button className={`btn btn-outline-primary text-white ${type === 'prices' ? 'selected' : null}`}>Prices</button>
                            <button className={`btn btn-outline-primary text-white ${type === 'market_caps' ? 'selected' : null}`}>Market Caps</button>
                            <button className={`btn btn-outline-primary text-white ${type === 'total_volumes' ? 'selected' : null}`}>Total Volumes</button>
                        </div>

                        {chart.coin &&
                            <div className='coin-details-box'>
                                {chart.coin.current_price &&
                                    <section className='icon-details-item'>
                                        <p>Prices:</p>
                                        <span>{chart.coin.current_price}</span>
                                    </section>}

                                {chart.coin.ath &&
                                    <section className='icon-details-item'>
                                        <p>ATH:</p>
                                        <span>${chart.coin.ath}</span>
                                    </section>}

                                {chart.coin.market_cap &&
                                    <section className='icon-details-item'>
                                        <p>Market Cap:</p>
                                        <span>{chart.coin.market_cap}</span>
                                    </section>}

                            </div>}
                    </div> :
                        <div className="chart-loading-wrapper">
                            <RotatingLines
                                visible={true}
                                height="55"
                                width="55"
                                color="grey"
                                strokeWidth="4"
                                strokeColor='#9EC8B9'
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                            />
                            <p className='loading-text'>loading details...</p>
                        </div>
                    }
                </div>

            </div>
        </ModalBackdrop>
        , document.getElementById('chart-modal'));
}

export default Chart
