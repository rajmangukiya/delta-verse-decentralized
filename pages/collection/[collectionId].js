import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Image from 'next/image'
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router'
import { nftmarketaddress, nftaddress, collectionAddress } from '../../config.js'

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json'
import nft from '../create-nft.js'

let provider, signer, nftContract, marketContract;

export default function Collection() {
  const router = useRouter()
  const query = router.query

  const [unsoldTokens, setUnsoldTokens] = useState([])
  const [marketTokens, setMarketTokens] = useState([])
  const [tokens, setTokens] = useState(new Map())

  const getUnsoldTokens = async () => {
    if (!(query.collectionId)) return
    let data = await nftContract.fetchMyUnsoldCollectionTokens(query.collectionId, 10, 1)
    data = data
      .filter(x => x[0].toNumber())
      .map(x => {
        return {
          tokenId: x.tokenId,
          collectionId: x.collectionId,
          name: x.name,
          image: x.uri,
          description: x.description,
          externalLink: x.external_link
        }
      })
    setUnsoldTokens(data)
  }

  const getMarketTokens = async () => {
    if (!(query.collectionId)) return
    let data = await nftContract.fetchSoldCollectionTokens(query.collectionId, 10, 1)
    data = await Promise.all(
      data
        .filter(x => x[0].toNumber())
        .map(async x => {
          let marketToken = await marketContract.getMarketItem(x.tokenId)
          // console.log(x, marketToken);
          let result = {};
          result['tokenId'] = x.tokenId
          result['name'] = x.name
          result['image'] = x.uri
          result['price'] = marketToken.price
          result['onSale'] = marketToken.onSale
          return result
        })
    )
    data = data.filter(x => x.onSale)
    console.log(data);
    setMarketTokens(data)
  }

  const loadContracts = () => {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    nftContract = new ethers.Contract(nftaddress, NFT.abi, signer)
    marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
  }

  useEffect(() => {
    loadContracts()
    getUnsoldTokens()
    getMarketTokens()
  }, [query])

  useEffect(() => {
    console.log('unsoldTokens', unsoldTokens);
    console.log('marketTokens', marketTokens);
  }, [marketTokens, unsoldTokens])
  

  return (
    // <div className="d-flex justify-content-center">
    //   <div class="mx-3">
    <div class="d-flex bg-dark justify-content-around" style={{flexWrap: 'wrap'}}>
      {
        unsoldTokens.map(token => {
          return (
            <div class="bg-dark shadow-lg my-3 d-flex flex-column align-items-center" style={{ width: '400px', borderRadius: '10px', cursor: 'pointer' }} onClick={() => {
              router.push(`nft/${token.tokenId}`)
            }}>
              <div className='w-100' style={{ height: '300px' }}>
                <img
                  src={token.image}
                  alt="Picture of the author"
                  style={{ width: '100%', height: '100%', borderRadius: '10px 10px 0px 0px' }}
                />
              </div>
              <p className='text-light'>{token.name}</p>
            </div>
          )
        })
      }
      {
        marketTokens.map(token => {
          return (
            <div class="bg-dark shadow-lg m-2 d-flex flex-column align-items-center" style={{ width: '400px', borderRadius: '10px', cursor: 'pointer' }} onClick={() => {
              router.push(`nft/${token.tokenId}`)
            }}>
              <div className='w-100' style={{ height: '300px' }}>
                <img
                  src={token.image}
                  alt="Picture of the author"
                  style={{ width: '100%', height: '100%', borderRadius: '10px 10px 0px 0px' }}
                />
              </div>
              <div className='w-100 d-flex justify-content-between px-4'>
                <p className='text-light'>{token.name}</p>
                <p className='text-light'>{token.price.toNumber()} eth</p>
              </div>
            </div>
          )
        })
      }

    </div>
    //   </div>
    // </div>
  )
}
