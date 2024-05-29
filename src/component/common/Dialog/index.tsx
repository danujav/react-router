export default function DialogBox(props) {

    const news = props.news;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">{news.title}</h2>
                    <button className="text-gray-400 hover:text-gray-600" onClick={props.onClick}>
                        &times;
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">
                        {news.description}
                    </p>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
                        onClick={props.onClick}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}