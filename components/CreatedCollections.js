import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import { collectionAddress } from '../config.js'

import Collection from '../artifacts/contracts/Collection.sol/Collection.json'

let provider, signer, collectionContract;

const CreatedCollections = () => {

  const [collections, setCollections] = useState([])

  const router = useRouter()

  const getCollection = async (_collectionId) => {
    let data = await collectionContract.fetchMyCollection(10, 1)
    data = data
      .filter(x => x[0].toNumber())
      .map(x => {
        return {
          collectionId: x.collectionId,
          name: x.name,
          url: x.uri,
          description: x.description
        }
      })
    setCollections(data)
  }

  const loadContracts = () => {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    collectionContract = new ethers.Contract(collectionAddress, Collection.abi, signer)
  }

  useEffect(() => {
    loadContracts()
    getCollection(1)
  }, [])

  return (
    <div className='bg-dark'>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 pt-5">
          {
            collections.map(collection => {
              return (
                <div class="btn col" onClick={() => router.push(`/collection/${collection.collectionId}`)}>
                  <div class="card bg-dark border-primary">
                    <img
                      src={collection.url}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      class="card-img-top"
                    />
                    <Image
                      src={require('../images/nft_1.jpg')}
                      alt="Picture of the author"
                      width={100}
                      height={100}
                      class="img2 img-fluid img-thumbnail rounded"
                    />
                    <div class="card-body">
                      <h5 class="card-title text-center text-light">{collection.name}</h5>
                      <br />
                      <p class="text-center text-primary">By HAPEBEAST</p>
                      <p class="text-muted d-flex flex-start">{collection.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CreatedCollections