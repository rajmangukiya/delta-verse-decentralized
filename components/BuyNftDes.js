import Link from 'next/link'
import React from 'react'
import { ethers } from 'ethers'

const BuyNftDes = ({ itemData, buyNft }) => {
  return (
    <>
      <div class="bg-dark text-white w-75 p-3 my-5 border border-light rounded">
        <h6 class="text-muted">Current price</h6>
        <div class="row">
          <div class="col-6">
            <h3 class="text-white">{itemData?.price?.toNumber()} @</h3>
          </div>
          <div class="col-6 d-flex justify-content-end">
            <h3 class="text-white">$ {itemData?.price?.toNumber() * 3237.86}</h3>
          </div>
        </div>
      </div>
      <div onClick={buyNft} className="d-flex">
        <div class="text-light bg-primary px-4 py-2 rounded-1" style={{cursor: 'pointer'}}>
          Buy now
        </div>
      </div>
    </>
  )
}

export default BuyNftDes