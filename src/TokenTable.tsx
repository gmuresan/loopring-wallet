import {useEthers} from '@usedapp/core'
import Table from './components/Table'
import TokenRow from './TokenRow'
import useEthCall from './hooks/useEthCall'
import { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'


const TokenTable: React.FC = () => {
  const {account} = useEthers()
  const res = useEthCall('balanceOf', [account])
  const hiddenTokens = useSelector((state: RootState) => state.hiddenTokens.tokenIds)

  let rows: any[] = []
  if(res && account) {
    const res0 = res[0]
    const numTokens: number = parseInt(res0._hex)
    for(let i=0; i<numTokens; i++) {
      if(!hiddenTokens.includes(i)) {
        rows.push(
          <tr key={i}>
            <TokenRow account={account} tokenIndex={i} />
          </tr>
        )
      }
    }
  }

  if(!rows.length) {
    return (
      <div>
        Please connect wallet first
      </div>
    )
  }

  return (
    <Table headerNames={['Token ID', 'IPFS Metadata Hash']}>
      {rows}
    </Table>
  )

}

export default TokenTable
