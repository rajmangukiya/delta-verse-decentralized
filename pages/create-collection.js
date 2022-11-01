import { ethers } from 'ethers'
import { useState } from 'react'
import Select from 'react-select'
import { nftmarketaddress, nftaddress, collectionAddress } from '../config.js'
import Collection from '../artifacts/contracts/Collection.sol/Collection.json'
import { categories } from '../helpers'
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export default function nft() {
    const [collectionData, setCollectionData] = useState({
        name: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpZhf1DoS2nvxJ60BjmfI7BBAJAgRL6BOrD5WqbvaX_OvbBYbw-IoAweS8eWCu5eZgF4&usqp=CAU',
        description: '',
        category: null
    })
    const [imgUrl, setImgUrl] = useState('');
    const categoryOption = categories.map(category => {
        return {
            label: category.name,
            value: category.categoryId,
        }
    })

    const [progresspercent, setProgresspercent] = useState(0);

    const handleSubmit = (e) => {
        // e.preventDefault()
        const file = e.target?.files[0]

        if (!file) return;

        console.log("file", file);

        const storageRef = ref(storage, `collections/${file.name}`);
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

    const createCollection = async (e) => {
        e.preventDefault()

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        // await uploadImage(file)
        // console.log(imgUrl);
        // const created = await ipfs.add(file);
        // const url = `https://ipfs.io/ipfs/${created.path}`;
        const collectionContract = new ethers.Contract(collectionAddress, Collection.abi, signer)
        const tx = await collectionContract.createCollection(imgUrl, collectionData.category, collectionData.name, collectionData.description)
        await tx.wait()
        console.log('collection created');
    }

    return (
        <div className='bg-dark p-5'>
            <div className="container bg-dark text-light w-50">
                <h1 className="text-center py-3">Create new Collection</h1>
                <br />
                <form className='p-5 h-100'>
                    <div className="row mb-5">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={(e) => { setCollectionData({ ...collectionData, name: e.target.value }) }} className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="image" className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <label role="button" tabindex="0" for="image" className="col-sm-2 col-form-label">
                                <img
                                    src={imgUrl != '' ? imgUrl : collectionData.image}
                                    alt="Picture of the author"
                                    width={'300px'}
                                    height={'200px'}
                                    className="d-inline-block align-text-top rounded"
                                    typeof='#fff'
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
                            <textarea onChange={(e) => { setCollectionData({ ...collectionData, description: e.target.value }) }} className="form-control" rows="3" id="description" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <label for="collection" className="col-sm-2 col-form-label">Catgeory</label>
                        <div className="col-sm-10">
                            <Select
                                className='text-dark'
                                options={categoryOption}
                                name="category"
                                onChange={(e) => setCollectionData({ ...collectionData, category: e.value })}
                            />
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                        <btn onClick={createCollection} className="btn btn-primary px-4" style={{ cursor: 'pointer' }}>
                            Create
                        </btn>
                    </div>
                </form>
            </div>
        </div>
    )
}
