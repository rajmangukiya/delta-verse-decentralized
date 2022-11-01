// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    address contractAddress;

    struct NFTStruct {
        uint256 tokenId;
        address owner;
        string uri;
        uint256 collectionId;
        string name;
        string description;
        string external_link;
        uint256 rarity;
        bool isSold;
    }

    mapping(uint256 => NFTStruct) public tokenIdToToken;

    constructor(address marketplaceAddress) ERC721("Metaverse", "METT") {
        contractAddress = marketplaceAddress;
    }

    function transferOwnerFrom(
        address to,
        uint256 tokenId
    ) public {
        tokenIdToToken[tokenId].owner = to;
    }

    function getTokenCount() public view returns (uint256) {
        return _tokenIds.current();
    }

    function setSold(uint256 _tokenId) public {
        tokenIdToToken[_tokenId].isSold = true;
    }

    function setUnSold(uint256 _tokenId) public {
        tokenIdToToken[_tokenId].isSold = false;
    }

    function createToken(string memory tokenURI, uint256 collectionId, string memory name, string memory description, string memory external_link, uint256 rarity) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        tokenIdToToken[newItemId] = NFTStruct(
            newItemId,
            msg.sender,
            tokenURI,
            collectionId,
            name,
            description,
            external_link,
            rarity,
            false
        );
        setApprovalForAll(contractAddress, true);
        return 10;
    }

    function getNft(uint256 _tokenId)  public view returns (NFTStruct memory) {
        return tokenIdToToken[_tokenId];
    }

    function fetchMyTokens(uint256 perPage, uint pageNo) public view virtual returns (NFTStruct[] memory) {
        NFTStruct[] memory myTokens = new NFTStruct[](
            perPage
        );
        uint256 count = 1;
        uint256 tokenIndex = 0;
        for (
            uint256 i = 0;
            i <= _tokenIds.current() && tokenIndex < perPage;
            i++
        ) {
            if (tokenIdToToken[i].owner == msg.sender) {
                count++;
                if (count > ((pageNo - 1) * perPage)) {
                    myTokens[tokenIndex] = tokenIdToToken[i];
                    tokenIndex++;
                }
            }
        }
        return myTokens;
    }

    function fetchMyUnsoldCollectionTokens(uint256 collectionId, uint256 perPage, uint pageNo) public view virtual returns (NFTStruct[] memory) {
        NFTStruct[] memory myTokens = new NFTStruct[](
            perPage
        );
        uint256 count = 1;
        uint256 tokenIndex = 0;
        for (
            uint256 i = 1;
            i <= _tokenIds.current() && tokenIndex < perPage;
            i++
        ) {
            if (tokenIdToToken[i].owner == msg.sender && tokenIdToToken[i].collectionId == collectionId && !(tokenIdToToken[i].isSold)) {
                count++;
                if (count > ((pageNo - 1) * perPage)) {
                    myTokens[tokenIndex] = tokenIdToToken[i];
                    tokenIndex++;
                }
            }
        }
        return myTokens;
    }

    function fetchSoldCollectionTokens(uint256 collectionId, uint256 perPage, uint pageNo) public view virtual returns (NFTStruct[] memory) {
        NFTStruct[] memory myTokens = new NFTStruct[](
            perPage
        );
        uint256 count = 1;
        uint256 tokenIndex = 0;
        for (
            uint256 i = 1;
            i <= _tokenIds.current() && tokenIndex < perPage;
            i++
        ) {
            if (tokenIdToToken[i].collectionId == collectionId && tokenIdToToken[i].isSold) {
                count++;
                if (count > ((pageNo - 1) * perPage)) {
                    myTokens[tokenIndex] = tokenIdToToken[i];
                    tokenIndex++;
                }
            }
        }
        return myTokens;
    }

    function getCollectionId (uint256 tokenId) public view returns (uint256) {
        return tokenIdToToken[tokenId].collectionId;
    }
}