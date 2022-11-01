import Link from 'next/link'
import React from 'react'

const SellNftDes = ({ setPrice, addToMarket }) => {
  return (
    <>
      <form>
        <div class="mb-3">
          <input type="text" placeholder='Enter price' class="form-control" id="price" onChange={(e) => setPrice(e.target.value)} />
        </div>
      </form>
      <div onClick={addToMarket} style={{cursor: 'pointer'}} className="d-flex">
        <div class="text-light bg-primary px-4 py-2 rounded-1">
          Buy now
        </div>
      </div>
    </>
  )
}

export default SellNftDes