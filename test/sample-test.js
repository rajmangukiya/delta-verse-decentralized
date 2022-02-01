let nft
let collection
let market

describe("NFTMarket", function () {
  it("Should create and execute collection functionality", async function () {
    const Collection = await ethers.getContractFactory("Collection")
    collection = await Collection.deploy()
    await collection.deployed()

    await collection.createCollection("image1", 1)
    await collection.createCollection("image2", 2)

    const collections = await collection.fetchAllCollection(2, 1)
    const myCollections = await collection.fetchAllCollection(2, 1)
    const categoryCollection = await collection.fetchCategoryCollection(1, 2, 1)
  })

  it("Should create and execute NFT functionality", async function () {
    const Market = await ethers.getContractFactory("NFTMarket")
    market = await Market.deploy()
    await market.deployed()

    const NFT = await ethers.getContractFactory("NFT")
    nft = await NFT.deploy(market.address)
    await nft.deployed()

    await nft.createToken("image1", 1)
    await nft.createToken("image2", 2)

    const collection = await nft.getCollectionId(1)
    console.log('collection: ', collection);

    const myNfts = await nft.fetchMyTokens(2, 1)
    
    const myCollectionsNfts = await nft.fetchMyCollectionTokens(2, 2, 1)
  })

  it("Should create and execute NFTMarket functionality", async function () {

    const accounts = await ethers.getSigners()

    await market.createMarketItem(nft.address, 1, ethers.utils.parseEther("1"))
    await market.connect(accounts[1]).createMarketItem(nft.address, 2, ethers.utils.parseEther("2"))

    const items = await market.fetchAllMarketItems(2, 1)

    const myItems = await market.fetchMyNFTs(2, 1)

    const createdItems = await market.fetchItemsCreated(2, 1)

    const collectionItems = await market.fetchCollectionItems(2, 2, 1)

    const tokenHistory = await market.tokenHistory(1)
    console.log(tokenHistory);
  })
})
