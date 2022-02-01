// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./NFT.sol";
import "hardhat/console.sol";

contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemId;
    Counters.Counter private _itemsSold;

    address payable owner;
    uint256 listingPrice = 0.025 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    struct ItemHistory {
        address payable seller;
        address payable owner;
        uint256 price;
        uint256 date;
    }

    struct MarketItem {
        uint256 itemId;
        uint256 tokenId;
        uint256 collectionId;
        address payable owner;
        address payable rootOwner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private marketItems;
    mapping(uint256 => ItemHistory[]) private itemHistory;

    event MarketItemCreated(
        uint256 indexed itemId,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    /* Returns the listing price of the contract */
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    /* Places an item for sale on the marketplace */
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must be at least 1 wei");

        NFT nft = NFT(nftContract);

        _itemId.increment();
        uint256 itemId = _itemId.current();

        marketItems[itemId] = MarketItem(
            itemId,
            tokenId,
            nft.getCollectionId(tokenId),
            payable(msg.sender),
            payable(msg.sender),
            price,
            false
        );

        itemHistory[itemId].push(
            ItemHistory(
                payable(address(0)),
                payable(msg.sender),
                price,
                block.timestamp
            )
        );

        emit MarketItemCreated(
            itemId,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function createMarketSale(address nftContract, uint256 itemId)
        public
        payable
        nonReentrant
    {
        uint256 price = marketItems[itemId].price;
        uint256 tokenId = marketItems[itemId].tokenId;

        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        NFT nft = NFT(nftContract);
        nft.transferOwnerFrom(msg.sender, tokenId);

        marketItems[itemId].owner.transfer(msg.value);
        marketItems[itemId].owner = payable(msg.sender);
        marketItems[itemId].sold = true;
    }

    /* Returns all unsold market items */
    function fetchAllMarketItems(uint256 perPage, uint256 pageNo)
        public
        view
        returns (MarketItem[] memory)
    {
        uint256 itemCount = _itemId.current();
        MarketItem[] memory items = new MarketItem[](perPage);
        for (
            uint256 i = ((pageNo - 1) * perPage) + 1;
            i <= itemCount && i <= (pageNo * perPage);
            i++
        ) {
            MarketItem storage item = marketItems[i];
            items[i - 1] = item;
        }

        return items;
    }

    /* Returns onlyl items that a user has purchased */
    function fetchMyNFTs(uint256 perPage, uint256 pageNo)
        public
        view
        returns (MarketItem[] memory)
    {
        uint256 itemCount = _itemId.current();
        MarketItem[] memory dumCollections = new MarketItem[](perPage);
        uint256 count = 1;
        uint256 itemIndex = 0;
        for (uint256 i = 1; i <= itemCount && itemIndex < perPage; i++) {
            MarketItem storage item = marketItems[i];
            if (item.owner == msg.sender) {
                if (count > ((pageNo - 1) * perPage)) {
                    dumCollections[itemIndex] = item;
                    itemIndex++;
                }
                count++;
            }
        }
        return dumCollections;
    }

    /* Returns only items a user has created */
    function fetchItemsCreated(uint256 perPage, uint256 pageNo)
        public
        view
        returns (MarketItem[] memory)
    {
        uint256 itemCount = _itemId.current();
        MarketItem[] memory dumCollections = new MarketItem[](perPage);
        uint256 count = 1;
        uint256 itemIndex = 0;
        for (uint256 i = 1; i <= itemCount && itemIndex < perPage; i++) {
            MarketItem storage item = marketItems[i];
            if (item.rootOwner == msg.sender) {
                if (count > ((pageNo - 1) * perPage)) {
                    dumCollections[itemIndex] = item;
                    itemIndex++;
                }
                count++;
            }
        }
        return dumCollections;
    }

    function fetchCollectionItems(
        uint256 collectionId,
        uint256 perPage,
        uint256 pageNo
    ) public view virtual returns (MarketItem[] memory) {
        uint256 itemCount = _itemId.current();
        MarketItem[] memory items = new MarketItem[](perPage);
        uint256 count = 1;
        uint256 itemIndex = 0;
        for (uint256 i = 1; i <= itemCount && itemIndex < perPage; i++) {
            MarketItem storage item = marketItems[i];
            if (item.collectionId == collectionId) {
                if (count > ((pageNo - 1) * perPage)) {
                    items[itemIndex] = item;
                    itemIndex++;
                }
                count++;
            }
        }
        return items;
    }

    function tokenHistory(uint256 tokenId) public view returns (ItemHistory[] memory) {
      return itemHistory[tokenId];
    }
}
