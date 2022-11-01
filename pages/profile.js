import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import CollectedNfts from '../components/CollectedNfts.js';
import CreatedCollections from '../components/CreatedCollections.js';

export default function mycollection() {

  const selectionEnum = {
    collected: 'COLLECTED',
    created: 'CREATED'
  }
  const [selection, setSelection] = useState(selectionEnum.collected)

  const router = useRouter()

  return (
    <div class="bg-dark">
      <div class="card my-5 py-5">
        <Image
          src={require('../images/wallpaper.jpg')}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        {/* <Image 
              src={require('../images/collectibles.jpeg')} 
              class="img2 img-fluid img-thumbnail mx-auto jus" 
              width={50} 
              height={50} 
              alt="..." 
            />     */}
        {/* {/* <Image src={require('../images/l.png')} width={120} height={80} alt="Image Component" /> */}
        <img src={require('../images/music.jpg').default} class="img2 img-fluid img-thumbnail mx-auto rounded mt-n1" width={100} height={100} alt="" />

        <div class="card-body bg-dark">
          <h5 class="card-title text-center text-light">Jack Aranda</h5>
          <p class="card-text text-center"><small class="text-muted">0x7739...29cb</small></p>
        </div>
      </div>
      <div class="container align-items-center bg-dark">
        <div class="row my-5">
          <div class="col-6 d-flex justify-content-center">
            <div class={`btn btn-outline-primary btn-lg m-3 px-4 ${selection == selectionEnum.collected ? 'btn-primary text-light' : 'btn-dark'}`} onClick={() => setSelection(selectionEnum.collected)}>
              Collected
            </div>
          </div>
          <div class="col-6 d-flex justify-content-center">
            <div type="button" class={`btn btn-outline-primary btn-lg m-3 px-4 ${selection == selectionEnum.created ? 'btn-primary text-light' : 'btn-dark'}`} onClick={() => setSelection(selectionEnum.created)}>
              Created
            </div>
          </div>
        </div>
      </div>

      {
        selection == selectionEnum.collected
        ? <CollectedNfts />
        : <CreatedCollections />
      }

      {/* <Collection /> */}
    </div>
  )
}
