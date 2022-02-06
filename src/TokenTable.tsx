import {useEthers, useContractCall} from '@usedapp/core'
import ERC721Interface from './eth/erc721Interface'
import Table from './components/Table'
import TokenRow from './TokenRow'


const CONTRACT = '0xdea46615e69c1acbf7f0260ffead9853557cb9fb'



const TokenTable = () => {
  const {account} = useEthers()
  const res = useContractCall({
    abi: ERC721Interface,
    address: CONTRACT,
    method: 'balanceOf',
    args: [account]
  })

  let rows: any[] = []
  if(res && account) {
    const res0 = res[0]
    const numTokens = parseInt(res0._hex)
    for(let i=0; i<numTokens; i++) {
      rows.push(
        <tr key={i}>
          <TokenRow account={account} tokenIndex={i} />
        </tr>
      )
    }
  }
  return (
    <Table headerNames={['Token ID', 'IPFS Metadata Hash']}>
      {rows}
    </Table>
  )

}

export default TokenTable
