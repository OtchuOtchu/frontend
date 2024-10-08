import { useNavigate } from 'react-router-dom';

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('/recommend');
    }

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={closeHandler}
            />
            <dialog open className="fixed bg-white shadow-lg p-6 z-50 w-3/4 max-w-xl top-16">
                {children}
            </dialog>
        </>
    );
}

export default Modal;
