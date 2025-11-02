
const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center">
                <span className="loading loading-ball loading-lg text-blue-600"></span>
                <p className="mt-4 text-gray-600 text-lg font-medium">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loading;
