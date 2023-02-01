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
  // hiddenMetadataUri: 'ipfs://bafybeied4mz3at4psihbidp3szndfdjgwnjrn2ti6coir34v634kfkfcfi/hidden.json',
  hiddenMetadataUri: 'ipfs://bafybeigm3ld5qff2vh3eaxzcmpbyyp6miwdohwayysoarmhz3vsmhzn2ay/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    // price: 0.5,
    price: 0.000001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    // price: 0.5,
    price: 0.000001,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    // price: 0.5,
    price: 0.000001,
    maxMintAmountPerTx: 50,
  },
  contractAddress: '0x8bfDaa97b6F10B5F754196AA3E005A51637BDA15',
  marketplaceIdentifier: 'VFOX',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
