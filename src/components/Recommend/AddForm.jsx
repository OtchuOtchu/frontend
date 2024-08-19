import { useNavigate, Link } from 'react-router-dom';

import ImagePicker from "./ImagePicker";
import Modal from "./Modal";

export default function AddForm() {

    function handleSubmit(event) {
        event.preventDefault();
        addPost(post);
        navigate('/recommend'); // 추가 후 돌아가기
    }

    return (
        <Modal>
            <h1 className="text-2xl font-bold mb-4 text-center">추가하고 싶은 옷을 올려주세요.</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col items-center">
                    <div className="flex items-center mb-4 w-1/2">
                        <label htmlFor="category" className="w-1/3 text-right mr-4">옷 카테고리</label>
                        <input
                            type="text"
                            id="category"
                            required
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center mb-4 w-1/2">
                        <label htmlFor="temperature" className="w-1/3 text-right mr-4">온도</label>
                        <input
                            type="text"
                            id="temperature"
                            required
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center mb-4 w-1/2">
                        <label htmlFor="humidity" className="w-1/3 text-right mr-4">습도</label>
                        <input
                            type="text"
                            id="humidity"
                            required
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="w-1/2 mb-4">
                        <div className="flex justify-center">
                            <ImagePicker />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
                    >
                        옷추가하기
                    </button>
                </div>
            </form>
        </Modal>
    );
}
