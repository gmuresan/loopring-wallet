import useEthCall from './hooks/useEthCall'

const TokenMetadata = ({tokenId}: {tokenId: number}) => {

  const res = useEthCall('tokenURI', [tokenId])

  if(res) {
    const parts = res[0].split('/')
    const metadataIpfsHash = parts[parts.length-1]
    return <>{metadataIpfsHash}</>

  }

  return <>Loading</>

}

export default TokenMetadata
