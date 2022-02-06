import styled from 'styled-components'
import { useEthers } from '@usedapp/core'

const StyledConnectButton = styled.button`
  background: orange;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 20px;
  align-self: flex-end;
`

const NetworkConnection = ({ chainId, account }: {chainId: number|undefined, account: string|undefined|null}) => {
  if(!account) {
    return <div>Please connect wallet</div>
  }

  if(chainId === 4) {
    return <div>Connected to Rinkeby</div>
  }

  return <div>Switch network to Rinkeby</div>

}

const Connect = () => {

  const {activateBrowserWallet, account, chainId} = useEthers()
  const connectWallet = () => {
    activateBrowserWallet()
  }

  return (
    <div>
      <StyledConnectButton onClick={connectWallet}>Connect</StyledConnectButton>
      <NetworkConnection chainId={chainId} account={account} />
    </div>
  )
}

export default Connect

