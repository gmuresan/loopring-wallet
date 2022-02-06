import {useContractCall} from '@usedapp/core'
import ERC721Interface from '../eth/erc721Interface'
import { NFT_CONTRACT_ADDRESS } from '../constants'

const useEthCall = (method: string, args: any[]) => {
  const res = useContractCall({
    abi: ERC721Interface,
    address: NFT_CONTRACT_ADDRESS,
    method: method,
    args: args,
  })

  return res
}

export default useEthCall
