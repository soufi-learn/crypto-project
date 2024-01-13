import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { marketChart } from "../services/cryptoAPI";

const TableRow = ({ coin, setChart, setOpenModal, priceSign }) => {
    const {
        image,
        name,
        symbol,
        current_price,
        price_change_percentage_24h,
        total_volume,
    } = coin;



    const showhandler = async () => {
        setOpenModal(true);

        try {
            const response = await fetch(marketChart(coin.id));
            const data = await response.json();
            setChart({ ...data, coin });
        } catch (error) {
            setChart(false)
        }
    }

    return (
        <tr>
            <td className="details-btn" onClick={showhandler}>
                <img src={image} alt={symbol} className="crypto-img" />
                <span className="crypto-symbol">{symbol.toUpperCase()}</span>
            </td>
            <td>{name}</td>
            <td>{priceSign}{current_price.toLocaleString()}</td>
            <td
                className={
                    price_change_percentage_24h > 0
                        ? "top-price-change"
                        : "down-price-change"
                }
            >
                {
                    price_change_percentage_24h > 0
                        ? <FaCaretUp />
                        : <FaCaretDown />
                }
                {price_change_percentage_24h.toFixed(2)}

                %
            </td>
            <td>{priceSign}{total_volume.toLocaleString()}</td>
            <td>
                <img
                    src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown}
                    alt=""
                />
            </td>
        </tr>
    );
};

export default TableRow;
