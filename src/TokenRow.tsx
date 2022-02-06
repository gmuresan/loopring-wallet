import TokenMetadata from './TokenMetadata'
import useEthCall from './hooks/useEthCall'

const TokenRow = ({account, tokenIndex}: {account:string, tokenIndex: number}) => {


  const res = useEthCall('tokenOfOwnerByIndex', [account, tokenIndex])

  if(res) {
    const tokenId: number = parseInt(res[0]._hex)
    return (
      <>
        <td>
          {tokenId}
        </td>
        <td>
          <TokenMetadata tokenId={tokenId} />
        </td>
      </>
    )
  }

  return <td>Loading</td>

}

export default TokenRow
