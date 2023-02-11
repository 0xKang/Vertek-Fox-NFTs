import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  // Attach to deployed contract
  const contract = await NftContractProvider.getContract();
  await // await contract.mint(1, {
  //   value: 1000000000000,
  // })
  (
    await contract.mintForAddress(4, '0xe9a274F0153c9D24a6C081465e0641ff0bBD0286')
  ).wait();

  console.log('minted!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
