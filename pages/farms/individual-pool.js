

// This will be the page for the individual pools.
// to create a new pools page, go under the "Pages" folder then under the "farms" folder
// create a new file with the pool name. the file name is the url extension
// the href will be href="/farms/pool-name"
// Copy and paste the code on this page to the new page and just change whatever is needed.
export default function Pool() {
    return(
        <>
            <div className="bg-gray-50 p-24 h-full pt-12">
                    <div className="text-lg max-w-prose mx-auto mt-6">
                        <h1>
                            <span className="block text-base text-center text-red-500 font-semibold tracking-wide uppercase">
                                pool Logo Here
                            </span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Token Pool name
                            </span>
                            <p className=" block font-light text-center text-lg text-gray-400 mt-2">
                                Deposit $token
                            </p>
                            <p className="block font-light text-center text-lg text-gray-400">
                                Earn reward $
                            </p>
                        </h1>
                    </div>
                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-3/4 mx-auto mt-8 ">
                            <li
                            className="col-span-1 flex flex-col text-center bg-gray-50 border rounded-lg hover:shadow-[0_0px_15px_10px_rgba(239,68,68,0.3)] "
                            >
                                <div className="flex-1 flex flex-col p-8">
                                    <img className="w-24 h-24 flex-shrink-0 mx-auto rounded-full shadow-inner" src="/assets/eth.png" alt="pool image" />
                                    <h3 className="mt-6 text-gray-900 text-xl font-medium">Pool name</h3>
                                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                                    <dt className="sr-only">Name</dt>
                                    <dd className="text-gray-500 text-md">0.000</dd>
                                    <dd className="text-gray-500 text-md">token earned</dd>
                                    </dl>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center">
                                    <div className="flex-shrink-0">
                                        <button
                                        type="button"
                                        className="relative flex items-center px-10 mb-6 py-3  shadow-sm text-lg max-w-1/4 font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800" 
                                        id="connect" 
                                        > Harvest
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </li>
                            <li
                            className="col-span-1 flex flex-col text-center bg-gray-50 border rounded-lg hover:shadow-[0_0px_15px_10px_rgba(239,68,68,0.3)] "
                            >
                                <div className="flex-1 flex flex-col p-8">
                                    <img className="w-24 h-24 flex-shrink-0 mx-auto rounded-full shadow-inner" src="/assets/eth.png" alt="pool image" />
                                    <h3 className="mt-6 text-gray-900 text-xl font-medium">Pool name</h3>
                                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                                    <dt className="sr-only">Name</dt>
                                    <dd className="text-gray-500 text-md">0.000</dd>
                                    <dd className="text-gray-500 text-md">token earned</dd>
                                    </dl>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex-shrink-0">
                                            <button
                                            type="button"
                                            className="relative flex items-center px-10 mb-6 py-3  shadow-sm text-lg max-w-1/4 font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800" 
                                            id="connect" 
                                            > Create LP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                    </ul>
                    <div>
                        <div className="flex items-center justify-center mt-16">
                            <div className="flex-shrink-0">
                                <button
                                type="button"
                                className="relative flex items-center px-10 py-4  shadow-sm text-lg max-w-1/4 font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800" 
                                id="connect" 
                                > Harvest & Withdraw
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}