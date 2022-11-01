import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router'
import { categories } from '../helpers'

<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js"
></script>
export default () => {

  const router = useRouter()


  return (
    <div className="bg-dark">

      {/* ------------------------------------------------- */}
      <div className="container w-75">
        <div className="row">
          <div className="col m-auto p-auto">
            <h1 className="primary text-light fs-1">
              Create, Buy & Sell Awesome Arts <br />
              <small className="text-muted fs-3">
                Delta Verse is a virtual market place to sell and buy art works
              </small>
            </h1>
            <div className="container align-items-center">
              <div className="row justify-content-center d-flex align-items-end">
                <div className="col-4">
                  {/* <a type="button" className="btn btn-outline-primary btn-lg m-3 px-4" href='create'>Create</a> */}
                  <Link href="/create-nft">
                    <a type="button" className="btn-lg btn-primary m-3 px-4 text-dark" style={{ textDecoration: "none" }}>
                      Create
                    </a>
                  </Link>
                </div>
                <div className="col-4">
                  <a type="button" className="btn-lg btn-primary m-3 px-4 text-dark" style={{ textDecoration: "none" }} href='collection'>
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-auto m-auto d-flex justify-content-end">
            <div className="card w-75 h-75">
              <Image
                src={require('../images/index.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <div className="card-body bg-dark d-flex justify-content-center align-items-center">
                <Link href="/">

                    <a className="navbar-brand text-light px-3 mx-2 d-flex justify-content-between align-items-center">
                      <Image
                        src={require('../images/index_1.png')}
                        alt="Picture of the author"
                        width={30}
                        height={30}
                      />
                      Delta Verse
                    </a>
                </Link>

                <a className="navbar-brand text-light px-3 mx-2 d-flex justify-content-between align-items-center">
                    10.0
                    <Image
                      src={require('../images/eth.png')}
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------- */}

      <div className="my-5">
        <h1 className="text-center text-light fs-2">Browse by category</h1>
      </div>

      {/* ------------------------------------------------ */}
      <div className="mx-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            categories.map(x => {
              return (
                <div className="col" onClick={() => {
                  router.push({
                    pathname: '/collection',
                    query: {
                      category: x.categoryId
                    }
                  })
                }}>
                  <div className="card w-100 h-75">
                    <img
                      src={x.image}
                      alt="Picture of the author"
                      className="w-100 h-75"
                    // width={500}
                    // height={500}
                    />
                    {/* <img src={i} className="card-img-top" alt="..." /> */}
                    <div className="card-body bg-dark d-flex justify-content-center align-items-end">
                      <h5 className="card-title text-center text-light">{x.name}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* <div className="col">
            <div className="card">
              <Image
                src={require('../images/music.jpg')}
                alt="Picture of the author"
              // width={500}
              // height={500}
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-light">Music</h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src={require('../images/photography.jpg')}
                alt="Picture of the author"
              // width={500}
              // height={500}
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-light">Photography</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src={require('../images/sports.jpg')}
                alt="Picture of the author"
              // width={500}
              // height={500}
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-light">Sports</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src={require('../images/collectibles.png')}
                alt="Picture of the author"
              // width={500}
              // height={500}
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-light">Collectibles</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src={require('../images/domain.jpg')}
                alt="Picture of the author"
              // width={500}
              // height={500}
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-light">Domain Names</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* --------------------------------------------------- */}

    </div>
  )
}
