import {useState} from 'react'
import Link from 'next/link'

const farms = [
  {
    name: 'USDC-WEVE LP Pool',
    deposit: 'Deposit USDC-WEVE LP',
    earn: 'Earn $WEVE',
    imageUrl:
      '/assets/eth.png',
    link: '/farms/individual-pool'
  },
  {
    name: 'USDC-WEVE LP Pool',
    deposit: 'Deposit USDC-WEVE LP',
    earn: 'Earn $WEVE',
    imageUrl:
      '/assets/eth.png',
    link: '/farms/individual-pool'
  },
  {
    name: 'USDC-WEVE LP Pool',
    deposit: 'Deposit USDC-WEVE LP',
    earn: 'Earn $WEVE',
    imageUrl:
      '/assets/eth.png',
    link: '/farms/individual-pool'
  },
  {
    name: 'USDC-WEVE LP Pool',
    deposit: 'Deposit USDC-WEVE LP',
    earn: 'Earn $WEVE',
    imageUrl:
      '/assets/eth.png',
    link: '/farms/individual-pool'
  },
  {
    name: 'USDC-WEVE LP Pool',
    deposit: 'Deposit USDC-WEVE LP',
    earn: 'Earn $WEVE',
    imageUrl:
      '/assets/eth.png',
    link: '/farms/individual-pool'
  },
  {
    name: 'USDC-WEVE LP Pool',
    deposit: 'Deposit USDC-WEVE LP',
    earn: 'Earn $WEVE',
    imageUrl:
      '/assets/eth.png',
    link: '/farms/individual-pool'
  },
  {
    name: 'USDC-WEVE LP Pool',
    deposit: 'Deposit USDC-WEVE LP',
    earn: 'Earn $WEVE',
    imageUrl:
      '/assets/eth.png',
    link: '/farms/individual-pool'
  },

  // More farms...
]

export default function Farm() {
  const [connectedState, setConnectedState] = useState(true); // placeholder for connected state

  //this is conditional rendering for the user to connect their wallet to see farms
  var showFarm;
  if (connectedState == true) {
    showFarm = 
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
      {farms.map((farm) => (
        <li
          key={farm.name}
          className="col-span-1 flex flex-col text-center bg-gray-50 border rounded-lg hover:shadow-[0_0px_15px_10px_rgba(239,68,68,0.3)] "
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-24 h-24 flex-shrink-0 mx-auto rounded-full shadow-inner" src={farm.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-xl font-medium">{farm.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Name</dt>
              <dd className="text-gray-500 text-md">{farm.deposit}</dd>
              <dd className="text-gray-500 text-md">{farm.earn}</dd>
            </dl>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <Link href={farm.link}>
                <a
                  type="button"
                  className="relative flex items-center px-10 mb-6 py-3  shadow-sm text-lg max-w-1/4 font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800" 
                  id="connect" 
                > Select
                </a>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  } else {
    showFarm =
    <div className="flex items-center justify-center">
    <div className="flex-shrink-0">
      <button
        type="button"
        className="relative flex items-center px-6 mb-6 mt-10 py-4 shadow-sm text-lg max-w-1/4 font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800 hover:shadow-[0_0px_15px_5px_rgba(239,68,68,0.5)] " 
        id="connect" 
      > Connect Wallet
      </button>
    </div>
  </div>
  }

  return (
    <div className="">
      {showFarm}
    </div>
  )
}
