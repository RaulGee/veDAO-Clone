import Image from 'next/image'
import {Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Nav() {
    return(
        <header className="App-header bg-gray-50 py-2 pb-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex items-center mt-8 hidden md:flex">
                <Image
                  className=" lg:h-24 lg:w-24 md:h-16 md: w-16 "
                  src="/assets/logoipsum-logo-54.svg"
                  height={144}
                  width={144}
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex justify-center mt-9">
              <Link href="/" >
                  <a  className="mr-6 text-xl text-gray-700 hover:text-red-500">Home</a>
              </Link>
              <Link href="/farms">
                  <a  className="mr-2 text-xl  text-gray-700 hover:text-red-500">Farms</a>
              </Link>
                <div className="  px-4  ">
                  <Popover className="">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`
                            ${open ? '' : 'text-opacity-90'}
                            text-gray-700 text-xl  inline-flex items-center hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span>Token Info</span>
                          <ChevronDownIcon
                            className={`${open ? '' : 'text-opacity-70'}
                               h-5 w-5 text-gray-700 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg">
                              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                                  <a href="#" className=" border-b flex items-center p-2 -m-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring ">
                                      <div className="ml-4 py-2">
                                        <p className="text-sm font-medium text-gray-900">
                                          Token Contract
                                        </p>
                                      </div>
                                  </a>
                                  <a href="#" className="border-b flex items-center p-2 -m-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring ">
                                      <div className="ml-4 py-2">
                                        <p className="text-sm font-medium text-gray-900">
                                          MasterChef Contract
                                        </p>
                                      </div>
                                  </a>
                                  <a href="#" className="border-b flex items-center p-2 -m-3 transition duration-150 ease-in-out  hover:bg-gray-50 focus:outline-none focus-visible:ring ">
                                      <div className="ml-4 py-2">
                                        <p className="text-sm font-medium text-gray-900">
                                          Token-Pair LP
                                        </p>
                                      </div>
                                  </a>
                                  <a href="#" className="border-b flex items-center p-2 -m-3 transition duration-150 ease-in-out  hover:bg-gray-50 focus:outline-none focus-visible:ring ">
                                      <div className="ml-4 py-2">
                                        <p className="text-sm font-medium text-gray-900">
                                          Token-Pair LP
                                        </p>
                                      </div>
                                  </a>
                              </div>
                              <div className="p-4 bg-gray-50">
                                <a
                                  href="##"
                                  className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                  <span className="flex items-center">
                                    <span className="text-sm font-medium text-gray-900">
                                      About
                                    </span>
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    Learn how it works
                                  </span>
                                </a>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>

            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 mt-6 py-2  shadow-sm text-sm max-w-1/4 font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800" 
                  id="connect" 
                > Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}