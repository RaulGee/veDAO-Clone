import Farm from '../components/farm'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Farms() {
    return(
        <>
            <div className="bg-gray-50 p-24 h-full pt-12">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-red-500 font-semibold tracking-wide uppercase">
                                Token Logo
                            </span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Token Farms
                            </span>
                        </h1>
                        <p className="mt-2 text-xl text-center text-gray-500 leading-8">
                        $WEVE emissions were ceased on February 17th to prepare for the Solidly launch. Deposit your USDC-WEVE LP tokens into Solidex to earn $SOLID and $SEX rewards.                        </p>
                    </div>
                    <div className="mt-12">
                        <Farm />
                    </div>
                </div>
            </div>
        </>
    )
}