import '../../css/pagination.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({ page, setPage }) => {
    const previousHandler = () => {
        if (page > 1) {
            setPage(page => page - 1);
        }

        // go top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }

    const nextHandler = () => {
        if (page < 20) {
            setPage(page => page + 1);
        }

        // go top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }

    const pageHandler = (page) => {
        setPage(page);

        // go top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }
    return (
        <div className='pagination-wrapper'>
            <button onClick={previousHandler} className={`${page === 1 && 'disable-btn'} btn btn-outline-primary pagination-btn border border-primary`}><FaAngleDoubleLeft /></button>
            <p className={`${page === 1 && 'current-page'} page-number`} onClick={() => pageHandler(1)}>1</p>
            <p className={`${page === 2 && 'current-page'} page-number`} onClick={() => pageHandler(2)}>2</p>
            {page > 2 && page < 19 && (
                <>
                    <span>...</span>
                    <p className='current-page'>{page}</p>
                </>
            )}
            <span>...</span>
            <p className={`${page === 19 && 'current-page'} page-number`} onClick={() => pageHandler(19)}>19</p>
            <p className={`${page === 20 && 'current-page'} page-number`} onClick={() => pageHandler(20)}>20</p>
            <button onClick={nextHandler} className={`${page === 20 && 'disable-btn'} btn btn-outline-primary pagination-btn border border-primary`}><FaAngleDoubleRight /></button>
        </div>
    )
}

export default Pagination
