import TokenMetadata from './TokenMetadata'
import useEthCall from './hooks/useEthCall'
import { useDispatch } from 'react-redux'
import { add } from './store/hiddenTokens'

const TokenRow = ({account, tokenIndex}: {account:string, tokenIndex: number}) => {

  const res = useEthCall('tokenOfOwnerByIndex', [account, tokenIndex])

  const dispatch = useDispatch()

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
        <td>
          <button onClick={() => dispatch(add(tokenIndex))}>
            Hide
          </button>
        </td>
      </>
    )
  }

  return <td>Loading</td>

}

export default TokenRow
