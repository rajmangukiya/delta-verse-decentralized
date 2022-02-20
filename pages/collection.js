import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Image from 'next/image'
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Collection() {
  return (
    <div className="d-flex justify-content-center">
      <div class="mx-3 my-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <Image
                src = {require('../images/art.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <div class="card-body bg-dark">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">HAPE Prime</h6>
                      <h6 class="card-subtitle text-muted">HAPE Prime</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">Price</h6>
                      <h6 class="card-subtitle mx-2 text-muted">100.00 
                        <Image
                            src = {require('../images/art.jpg')}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <Image
                src = {require('../images/art.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <div class="card-body bg-dark">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">HAPE Prime</h6>
                      <h6 class="card-subtitle text-muted">HAPE Prime</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">Price</h6>
                      <h6 class="card-subtitle mx-2 text-muted">100.00 
                        <Image
                            src = {require('../images/art.jpg')}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <Image
                src = {require('../images/art.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <div class="card-body bg-dark">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">HAPE Prime</h6>
                      <h6 class="card-subtitle text-muted">HAPE Prime</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">Price</h6>
                      <h6 class="card-subtitle mx-2 text-muted">100.00 
                        <Image
                            src = {require('../images/art.jpg')}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <Image
                src = {require('../images/art.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <div class="card-body bg-dark">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">HAPE Prime</h6>
                      <h6 class="card-subtitle text-muted">HAPE Prime</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">Price</h6>
                      <h6 class="card-subtitle mx-2 text-muted">100.00 
                        <Image
                          src = {require('../images/art.jpg')}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <Image
                src = {require('../images/art.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <div class="card-body bg-dark">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">HAPE Prime</h6>
                      <h6 class="card-subtitle text-muted">HAPE Prime</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">Price</h6>
                      <h6 class="card-subtitle mx-2 text-muted">100.00 
                        <Image
                          src = {require('../images/art.jpg')}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <Image
                src = {require('../images/art.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <div class="card-body bg-dark">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">HAPE Prime</h6>
                      <h6 class="card-subtitle text-muted">HAPE Prime</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6 class="card-title text-light">Price</h6>
                      <h6 class="card-subtitle mx-2 text-muted">100.00 
                        <Image
                          src = {require('../images/art.jpg')}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
