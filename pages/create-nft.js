import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { nftmarketaddress, nftaddress, collectionAddress } from '../config.js'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Collection from '../artifacts/contracts/Collection.sol/Collection.json'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase'

let provider, signer, nftContract, collectionContract;

export default function nft() {
    const [nftData, setNftData] = useState({
        name: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpZhf1DoS2nvxJ60BjmfI7BBAJAgRL6BOrD5WqbvaX_OvbBYbw-IoAweS8eWCu5eZgF4&usqp=CAU',
        description: '',
        link: '',
        collection: '',
        rarity: null,
        // blockchain: ''
    })
    const [imgUrl, setImgUrl] = useState('');
    const [collections, setCollections] = useState([]);
    const [progresspercent, setProgresspercent] = useState(0);

    const handleSubmit = (e) => {
        const file = e.target?.files[0]

        if (!file) return;

        console.log("file", file);

        const storageRef = ref(storage, `nfts/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(downloadURL);
                    setImgUrl(downloadURL)
                });
            }
        );
    }

    const createNft = async (e) => {
        e.preventDefault()

        // const created = await ipfs.add(file);
        // const url = `https://ipfs.io/ipfs/${created.path}`;
        console.log('image uploaded', {
            imgUrl,
            collection: nftData.collection,
            name: nftData.name,
            description: nftData.description,
            link: nftData.link,
            rarity: nftData.rarity
        });
        const tx = await nftContract.createToken(imgUrl, nftData.collection, nftData.name, nftData.description, nftData.link, nftData.rarity)
        await tx.wait()
        console.log('nft created');
    }

    const getCollection = async () => {
        let data = await collectionContract.fetchMyCollection(10, 1)
        data = data
            .map(x => {
                return {
                    label: x.name,
                    value: x[0].toNumber()
                }
            })
            .filter(x => x.value)
        setCollections(data)
    }

    const loadContracts = () => {
        provider = new ethers.providers.Web3Provider(window.ethereum)
        signer = provider.getSigner()
        nftContract = new ethers.Contract(nftaddress, NFT.abi, signer)
        collectionContract = new ethers.Contract(collectionAddress, Collection.abi, signer)
    }

    useEffect(() => {
        loadContracts()
        getCollection()
    }, [])

    return (
        <div className="bg-dark p-5">
            <div className="container bg-dark text-light w-50 my-5">
                <h1 className="text-center py-3">Create new NFT</h1>
                <br />
                <form>
                    <div className="row mb-5">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={(e) => { setNftData({ ...nftData, name: e.target.value }) }} className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="image" className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <label role="button" tabindex="0" for="image" className="col-sm-2 col-form-label">
                                <img
                                    src={imgUrl != '' ? imgUrl : nftData.image}
                                    alt="Picture of the author"
                                    width={'300px'}
                                    height={'200px'}
                                    className="d-inline-block align-text-top 
                                    rounded"
                                />
                            </label>
                            <input
                                type="file"
                                onChange={(e) => { handleSubmit(e) }}
                                className="form-control d-none"
                                id="image" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="description" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <textarea onChange={(e) => { setNftData({ ...nftData, description: e.target.value }) }} className="form-control" rows="3" id="description" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="link" className="col-sm-2 col-form-label">External Link</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => { setNftData({ ...nftData, link: e.target.value }) }} type="text" className="form-control" id="link" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="collection" className="col-sm-2 col-form-label">Collection</label>
                        <div className="col-sm-10">
                            <Select
                                className='text-dark'
                                options={collections}
                                name="collection"
                                onChange={(e) => setNftData({
                                    ...nftData,
                                    collection: e.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="rarity" className="col-sm-2 col-form-label">Rarity</label>
                        <div className="col-sm-10">
                            <input
                                type="range"
                                onChange={(e) => {
                                    setNftData({ ...nftData, rarity: e.target.value })
                                }} className="form-range"
                                id="customRange1" />
                        </div>
                    </div>
                    {/* <div className="row mb-3">
                        <label for="collection" className="col-sm-2 col-form-label">Blockchain</label>
                        <div className="col-sm-10">
                            <Select
                                options={blockChains}
                                name="blockChains"
                                onChange={(e) => setNftData({ ...nftData, blockchain: e.value }) }
                            />
                        </div>
                    </div> */}
                    <div className='w-100 d-flex justify-content-center'>
                        <btn onClick={createNft} className="btn btn-primary px-4" style={{ cursor: 'pointer' }}>
                            Create
                        </btn>
                    </div>
                </form>
            </div>
        </div>
    )
}
