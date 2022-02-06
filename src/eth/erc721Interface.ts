import { utils } from 'ethers'
const { Interface } = utils

const abi = require('../abis/ERC721Token.json').abi
const ERC721Interface = new Interface(abi)

export default ERC721Interface
