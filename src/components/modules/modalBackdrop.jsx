import '../../css/modal-chart.css';

function ModalBackdrop({ children, modal, setOpenModal, setChart }) {

    const closeModal = (e) => {
        const target = e.target;
        if (target.classList.contains('chart-container')) {
            setOpenModal(false)
            setChart(false);
        }
    }

    return (
        <div className={`${modal ? 'show-modal' : ''} modal-backdrop-wrapper`}
            onClick={closeModal}>
            {children}
        </div>
    )
}

export default ModalBackdrop
