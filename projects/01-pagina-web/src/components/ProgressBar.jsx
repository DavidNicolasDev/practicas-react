export function ProgressBar({ progress }) {
    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                        {progress}%
                    </span>
                </div>
            </div>
            <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200 rounded">
                <div
                    style={{ width: `${progress}%` }}
                    className="flex flex-col justify-center text-center text-white bg-teal-600 transition-all duration-500"
                />
            </div>
        </div>
    )
}
