import {useContractCall} from '@usedapp/core'
import ERC721Interface from './eth/erc721Interface'

const CONTRACT = '0xdea46615e69c1acbf7f0260ffead9853557cb9fb'

const TokenMetadata = ({tokenId}: {tokenId: number}) => {

  const res = useContractCall({
    abi: ERC721Interface,
    address: CONTRACT,
    method: 'tokenURI',
    args: [tokenId]
  })

  if(res) {
    const parts = res[0].split('/')
    const metadataIpfsHash = parts[parts.length-1]
    return <>{metadataIpfsHash}</>

  }

  return <>Loading</>

}

export default TokenMetadata
