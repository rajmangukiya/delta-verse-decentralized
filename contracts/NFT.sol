// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    struct NFTStruct {
        uint256 tokenId;
        address owner;
        string uri;
        uint256 collectionId;
    }

    mapping(uint256 => NFTStruct) tokenIdToToken;

    constructor(address marketplaceAddress) ERC721("Metaverse", "METT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI, uint256 collectionId) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        tokenIdToToken[newItemId] = NFTStruct(
            newItemId,
            msg.sender,
            tokenURI,
            collectionId
        );
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }

    function fetchMyTokens(uint256 tokenCount, uint256 perPage, uint pageNo) public view virtual returns (NFTStruct[] memory) {
        NFTStruct[] memory myTokens = new NFTStruct[](
            perPage
        );
        uint256 count = 1;
        uint256 tokenIndex = 0;
        for (
            uint256 i = 0;
            i < tokenCount && tokenIndex < perPage;
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

    function fetchMyCollectionTokens(uint256 tokenCount, uint256 collectionId, uint256 perPage, uint pageNo) public view virtual returns (NFTStruct[] memory) {
        NFTStruct[] memory myTokens = new NFTStruct[](
            perPage
        );
        uint256 count = 1;
        uint256 tokenIndex = 0;
        for (
            uint256 i = 0;
            i < tokenCount && tokenIndex < perPage;
            i++
        ) {
            if (tokenIdToToken[i].owner == msg.sender && tokenIdToToken[i].collectionId == collectionId) {
                count++;
                if (count > ((pageNo - 1) * perPage)) {
                    myTokens[tokenIndex] = tokenIdToToken[i];
                    tokenIndex++;
                }
            }
        }
        return myTokens;
    }
}