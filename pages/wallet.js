import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image' 

export default function Create() {

    const router = useRouter()

    const connectWallet = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        router.push('/create-nft')
    }

    return (
        <div className="bg-dark h-100 d-flex justify-content-center align-items-center">
            <div className="container w-50">
                <div className="row">
                    <div className="col pt-5 d-flex flex-column align-items-center">
                        <h1 className="primary text-primary pb-5">
                            Connect your wallet <br />
                            <small className="text-muted">to use this functionality <br />no account? create new one</small>
                        </h1>
                        <div onClick={connectWallet}>
                            <a className="btn btn-primary border-primary px-4 d-flex justify-content-evenly align-items-center" type="button">
                                <Image
                                    src={require('../images/MetaMask_Fox.png')}
                                    alt="Picture of the author"
                                    width={50}
                                    height={50}
                                    className="d-inline-block align-text-top"
                                />
                                MetaMask
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}