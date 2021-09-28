/* eslint-disable prefer-const */
import { dataSource, log } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export function getFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xe77a7c836720897cd3fbd6c0c0067c5ca278603f' // harmony
  if (network == 'harmony_testnet') return '0xae6fc6e36e1c77701299291978be227a1d9eea8a'
  if (network == 'rinkeby') return '0xc9ae161dc43957cd56ed7cac2cc4e302b44df374'
  log.warning('no factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getStakingRewardsFactoryAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xfd9744ba0c2de4abf7cab9e2dfdbda1ea0a9363f'
  if (network == 'harmony_testnet') return '0x15b61cc2ac17e9826277b3ff41aa2644a774daab'
  if (network == 'rinkeby') return '0x709db16a6ef437197938256460c49183dc36ca4d'
  log.warning('no staking rewards factory address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getNativeCurrencyWrapperAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a' // WONE || HARMONY MAINNET
  if (network == 'harmony_testnet') return'0x7466d7d0c21fa05f32f5a0fa27e12bdc06348ce2' //WONE (Wrapped ONE) || 1666700000 || mainnet TESTNET
  if (network == 'rinkeby') return '0xc778417e063141139fce010982780140aa0cd5ab'
  log.warning('no native currency wrapper address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getLiquidityTrackingTokenAddresses(): string[] {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') {
    return [
      '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', // wone
      '0xE176EBE47d621b984a73036B9DA5d834411ef734', // busd
      '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f', // usdt (ONE USDT <1USDT)
      '0x985458E523dB3d53125813eD68c274899e9DfAb4', // usdc
      '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339', // dai
      '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9', // wbtc
      '0x218532a12a389a4a92fC0C5Fb22901D1c19198aA', // chainlink (LINK)
      '0x47f08700D6d090509F3574CBd75b8599777fCD9c' // xDEXS
    ]
  }
  if (network == 'harmony_testnet') {
    return [
      '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2', // wone
      '0x0E80905676226159cC3FF62B1876C907C91F7395', // busd
      '0x6c4387C4f570Aa8cAdcaFFc5E73ecb3D0F8Fc593', // wbtc
      '0x1E120B3b4aF96e7F394ECAF84375b1C661830013', // one ETH (1ETH)
      '0xDCfe8E086A17ac9Fd27f95fd7fCe2f78546A2c95' // xDEXS
    ]
  }
  if (network == 'rinkeby') {
    return [
      '0xc778417e063141139fce010982780140aa0cd5ab', // weth
      '0x03c8551611d4c718a1c3599a933d7e7c2e8038dc', // usdc
      '0x1dbdfbf4787b14c2d0936e1b48546641e33a8418', // usdt
      '0xd6b447a8027db327ff074b156742ba1b97d52e35', // badger
      '0x15f3adb465bbc6e880093ec70c8559fd054ad439', // wbtc
      '0xa7b48892d33b4615322ba61b2cffe6f295d512d5', // digg
      '0x146942de725f2d28857e3b22356433c54fbf9dad' // dai
    ]
  }
  log.warning('no liquidity tracking token address for unsupported network {}', [network])
  return []
}

export function getUsdcNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'harmony_testnet') return '0x0E80905676226159cC3FF62B1876C907C91F7395' // BUSD PAIR
  if (network == 'rinkeby') return '0x0502490ec71bc30eb72ce74a597ab86a690bbcfc'
  log.warning('no usdc native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getDaiNativeCurrencyWrapperPairAddress(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'harmony_testnet') return ADDRESS_ZERO
  if (network == 'rinkeby') return '0x0712a85d3ed7e6681624cb27dff4c1f292652641'
  log.warning('no dai native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}

export function getUsdtNativeCurrencyWrapperPair(): string {
  let network = dataSource.network() as string
  // not using a switch-case because using strings is not yet supported (only u32)
  if (network == 'mainnet') return ADDRESS_ZERO
  if (network == 'harmony_testnet') return ADDRESS_ZERO
  if (network == 'rinkeby') return '0x40715b56f2c11a007e2f3700c59ed74d2994c4d6'
  log.warning('no usdt native currency wrapper pair address for unsupported network {}', [network])
  return ADDRESS_ZERO
}
