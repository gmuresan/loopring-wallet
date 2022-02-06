import {useContractCall} from '@usedapp/core'
import ERC721Interface from './eth/erc721Interface'
import TokenMetadata from './TokenMetadata'

const CONTRACT = '0xdea46615e69c1acbf7f0260ffead9853557cb9fb'

const TokenRow = ({account, tokenIndex}: {account:string, tokenIndex: number}) => {

  const res = useContractCall({
    abi: ERC721Interface,
    address: CONTRACT,
    method: 'tokenOfOwnerByIndex',
    args: [account, tokenIndex]
  })
  if(res) {
    const tokenId = parseInt(res[0]._hex)
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
