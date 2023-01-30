import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.bsc,
  mainnet: Networks.bsc,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'VertekFox',
  tokenName: 'VERTEK FOX',
  tokenSymbol: 'VFOX',
  hiddenMetadataUri: 'ipfs://bafybeied4mz3at4psihbidp3szndfdjgwnjrn2ti6coir34v634kfkfcfi/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.5,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.5,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.5,
    maxMintAmountPerTx: 50,
  },
  contractAddress: '0x595DC072a1DD75e9E1921CA50a99e8c8dE2D6dDf',
  marketplaceIdentifier: 'VFOX',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
