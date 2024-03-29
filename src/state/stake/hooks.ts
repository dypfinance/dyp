import { ChainId, CurrencyAmount, JSBI, Token, TokenAmount, WETH, Pair } from '@uniswap/sdk'
import { useMemo } from 'react'
import { UNI, USDC, USDT, WBTC, DYP, WBNB, BUSD, DAI } from '../../constants'
// import { DAI, UNI, USDC, USDT, WBTC, DYP } from '../../constants'
import { STAKING_REWARDS_INTERFACE } from '../../constants/abis/staking-rewards'
import { useActiveWeb3React } from '../../hooks'
import { NEVER_RELOAD, useMultipleContractSingleData } from '../multicall/hooks'
import { tryParseAmount } from '../swap/hooks'

export const STAKING_GENESIS = 1600387200

export const REWARDS_DURATION_DAYS = 60

// TODO add staking rewards addresses here
export const STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: {
    tokens: [Token, Token]
    stakingRewardAddress: string
    apr: string
    days: string
  }[]
} = {
  [ChainId.MAINNET]: [
    {
      // stakingRewardAddress: address of liq pool
      tokens: [DYP, WETH[ChainId.MAINNET]],
      stakingRewardAddress: '0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711',
      apr: '20%',
      days: '30 Days'
    },
    {
      tokens: [DYP, USDC],
      stakingRewardAddress: '0x7FBa4B8Dc5E7616e59622806932DBea72537A56b',
      apr: '25%',
      days: '60 Days'
    },
    {
      tokens: [DYP, USDT],
      stakingRewardAddress: '0x6C3e4cb2E96B01F4b866965A91ed4437839A121a',
      apr: '30%',
      days: '90 Days'
    },
    {
      tokens: [DYP, WBTC],
      stakingRewardAddress: '0xCA35e32e7926b96A9988f61d510E038108d8068e',
      apr: '35%',
      days: '120 Days'
    }
    // {
    //   // stakingRewardAddress: address of liq pool
    //   tokens: [WETH[ChainId.MAINNET], DAI],
    //   stakingRewardAddress: '0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711'
    // }
  ]
}

export const STAKING_REWARDS_INFO_BSC: {
  [chainId in ChainId]?: {
    tokens: [Token, Token]
    stakingRewardAddress: string
    apr: string
    days: string
  }[]
} = {
  [ChainId.MAINNET]: [
    {
      tokens: [DYP, WBNB],
      stakingRewardAddress: '0x7FBa4B8Dc5E7616e59622806932DBea72537A56b',
      apr: '20%',
      days: '100'
    },
    {
      // stakingRewardAddress: address of liq pool
      tokens: [DYP, WETH[ChainId.MAINNET]],
      stakingRewardAddress: '0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711',
      apr: '99%',
      days: '100'
    },
    {
      tokens: [DYP, BUSD],
      stakingRewardAddress: '0x6C3e4cb2E96B01F4b866965A91ed4437839A121a',
      apr: '20%',
      days: '100'
    }
  ]
}

export const EARN_VAULT_ETH: {
  [chainId in ChainId]?: {
    tokens: [Token, Token]
    stakingRewardAddress: string
    apr: string
    days: string
    link: string
  }[]
} = {
  [ChainId.MAINNET]: [
    {
      // stakingRewardAddress: address of liq pool
      tokens: [DYP, WETH[ChainId.MAINNET]],
      stakingRewardAddress: '0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711',
      apr: '3%-13%',
      days: '3 Days',
      link: 'vault-list-eth'
    },
    {
      tokens: [DYP, WBTC],
      stakingRewardAddress: '0x7FBa4B8Dc5E7616e59622806932DBea72537A56b',
      apr: '3%-13%',
      days: '3 Days',
      link: 'vault-list-wbtc'
    },
    {
      tokens: [DYP, USDT],
      stakingRewardAddress: '0x6C3e4cb2E96B01F4b866965A91ed4437839A121a',
      apr: '9%-23%',
      days: '3 Days',
      link: 'vault-list-usdt'
    },
    {
      tokens: [DYP, USDC],
      stakingRewardAddress: '0xCA35e32e7926b96A9988f61d510E038108d8068e',
      apr: '8%-22%',
      days: '3 Days',
      link: 'vault-list-usdc'
    },
    {
      tokens: [DYP, DAI],
      stakingRewardAddress: '0xCA35e32e7926b96A9988f61d510E038108d8068e',
      apr: '8%-21%',
      days: '3 Days',
      link: 'vault-list-dai'
    }
  ]
}

export interface StakingInfo {
  // the address of the reward contract
  stakingRewardAddress: string
  // the tokens involved in this pair
  tokens: [Token, Token]
  // the amount of token currently staked, or undefined if no account
  stakedAmount: TokenAmount
  // the amount of reward token earned by the active account, or undefined if no account
  earnedAmount: TokenAmount
  // the total amount of token staked in the contract
  totalStakedAmount: TokenAmount
  // the amount of token distributed per second to all LPs, constant
  totalRewardRate: TokenAmount
  // the current amount of token distributed to the active account per second.
  // equivalent to percent of total supply * reward rate
  rewardRate: TokenAmount
  // when the period ends
  periodFinish: Date | undefined
  //apr
  apr: string
  //days
  days: string
  // calculates a hypothetical amount of token distributed to the active account per second.
  getHypotheticalRewardRate: (
    stakedAmount: TokenAmount,
    totalStakedAmount: TokenAmount,
    totalRewardRate: TokenAmount
  ) => TokenAmount
}

export interface StakingInfoBSC {
  // the address of the reward contract
  stakingRewardAddress: string
  // the tokens involved in this pair
  tokens: [Token, Token]
  // the amount of token currently staked, or undefined if no account
  stakedAmount: TokenAmount
  // the amount of reward token earned by the active account, or undefined if no account
  earnedAmount: TokenAmount
  // the total amount of token staked in the contract
  totalStakedAmount: TokenAmount
  // the amount of token distributed per second to all LPs, constant
  totalRewardRate: TokenAmount
  // the current amount of token distributed to the active account per second.
  // equivalent to percent of total supply * reward rate
  rewardRate: TokenAmount
  // when the period ends
  periodFinish: Date | undefined
  //apr
  apr: string
  //days
  days: string
  // calculates a hypothetical amount of token distributed to the active account per second.
  getHypotheticalRewardRate: (
    stakedAmount: TokenAmount,
    totalStakedAmount: TokenAmount,
    totalRewardRate: TokenAmount
  ) => TokenAmount
}

export interface EarnVaultETH {
  // the address of the reward contract
  stakingRewardAddress: string
  // the tokens involved in this pair
  tokens: [Token, Token]
  //apr
  apr: string
  //days
  days: string
  //link
  link: string
}

// gets the staking info from the network for the active chain id
export function useStakingInfo(pairToFilterBy?: Pair | null): StakingInfo[] {
  const { chainId, account } = useActiveWeb3React()

  const info = useMemo(
    () =>
      chainId
        ? STAKING_REWARDS_INFO[chainId]?.filter(stakingRewardInfo =>
            pairToFilterBy === undefined
              ? true
              : pairToFilterBy === null
              ? false
              : pairToFilterBy.involvesToken(stakingRewardInfo.tokens[0]) &&
                pairToFilterBy.involvesToken(stakingRewardInfo.tokens[1])
          ) ?? []
        : [],
    [chainId, pairToFilterBy]
  )

  const uni = chainId ? UNI[chainId] : undefined

  const rewardsAddresses = useMemo(() => info.map(({ stakingRewardAddress }) => stakingRewardAddress), [info])
  const aprs = useMemo(() => info.map(({ apr }) => apr), [info])
  const dayss = useMemo(() => info.map(({ days }) => days), [info])

  const accountArg = useMemo(() => [account ?? undefined], [account])

  // get all the info from the staking rewards contracts
  const balances = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'balanceOf', accountArg)
  const earnedAmounts = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'earned', accountArg)
  const totalSupplies = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'totalSupply')

  // tokens per second, constants
  const rewardRates = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'rewardRate',
    undefined,
    NEVER_RELOAD
  )
  const periodFinishes = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'periodFinish',
    undefined,
    NEVER_RELOAD
  )

  return useMemo(() => {
    if (!chainId || !uni) return []

    return rewardsAddresses.reduce<StakingInfo[]>((memo, rewardsAddress, index) => {
      // these two are dependent on account
      const balanceState = balances[index]
      const earnedAmountState = earnedAmounts[index]

      // these get fetched regardless of account
      const totalSupplyState = totalSupplies[index]
      const rewardRateState = rewardRates[index]
      const periodFinishState = periodFinishes[index]

      if (
        // these may be undefined if not logged in
        !balanceState?.loading &&
        !earnedAmountState?.loading &&
        // always need these
        totalSupplyState &&
        !totalSupplyState.loading &&
        rewardRateState &&
        !rewardRateState.loading &&
        periodFinishState &&
        !periodFinishState.loading
      ) {
        if (
          balanceState?.error ||
          earnedAmountState?.error ||
          totalSupplyState.error ||
          rewardRateState.error ||
          periodFinishState.error
        ) {
          console.error('Failed to load staking rewards info')
          return memo
        }

        // get the LP token
        const tokens = info[index].tokens
        const dummyPair = new Pair(new TokenAmount(tokens[0], '0'), new TokenAmount(tokens[1], '0'))

        // check for account, if no account set to 0

        const stakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(balanceState?.result?.[0] ?? 0))
        const totalStakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(totalSupplyState.result?.[0]))
        const totalRewardRate = new TokenAmount(uni, JSBI.BigInt(rewardRateState.result?.[0]))

        const getHypotheticalRewardRate = (
          stakedAmount: TokenAmount,
          totalStakedAmount: TokenAmount,
          totalRewardRate: TokenAmount
        ): TokenAmount => {
          return new TokenAmount(
            uni,
            JSBI.greaterThan(totalStakedAmount.raw, JSBI.BigInt(0))
              ? JSBI.divide(JSBI.multiply(totalRewardRate.raw, stakedAmount.raw), totalStakedAmount.raw)
              : JSBI.BigInt(0)
          )
        }

        const individualRewardRate = getHypotheticalRewardRate(stakedAmount, totalStakedAmount, totalRewardRate)

        const periodFinishMs = periodFinishState.result?.[0]?.mul(1000)?.toNumber()
        memo.push({
          days: dayss[index],
          apr: aprs[index],
          stakingRewardAddress: rewardsAddress,
          tokens: info[index].tokens,
          periodFinish: periodFinishMs > 0 ? new Date(periodFinishMs) : undefined,
          earnedAmount: new TokenAmount(uni, JSBI.BigInt(earnedAmountState?.result?.[0] ?? 0)),
          rewardRate: individualRewardRate,
          totalRewardRate: totalRewardRate,
          stakedAmount: stakedAmount,
          totalStakedAmount: totalStakedAmount,
          getHypotheticalRewardRate
        })
      }
      return memo
    }, [])
  }, [
    aprs,
    balances,
    chainId,
    dayss,
    earnedAmounts,
    info,
    periodFinishes,
    rewardRates,
    rewardsAddresses,
    totalSupplies,
    uni
  ])
}

export function useStakingInfoBSC(pairToFilterBy?: Pair | null): StakingInfoBSC[] {
  const { chainId, account } = useActiveWeb3React()

  const info = useMemo(
    () =>
      chainId
        ? STAKING_REWARDS_INFO_BSC[chainId]?.filter(stakingRewardInfo =>
            pairToFilterBy === undefined
              ? true
              : pairToFilterBy === null
              ? false
              : pairToFilterBy.involvesToken(stakingRewardInfo.tokens[0]) &&
                pairToFilterBy.involvesToken(stakingRewardInfo.tokens[1])
          ) ?? []
        : [],
    [chainId, pairToFilterBy]
  )

  const uni = chainId ? UNI[chainId] : undefined

  const rewardsAddresses = useMemo(() => info.map(({ stakingRewardAddress }) => stakingRewardAddress), [info])
  const aprs = useMemo(() => info.map(({ apr }) => apr), [info])
  const dayss = useMemo(() => info.map(({ days }) => days), [info])

  const accountArg = useMemo(() => [account ?? undefined], [account])

  // get all the info from the staking rewards contracts
  const balances = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'balanceOf', accountArg)
  const earnedAmounts = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'earned', accountArg)
  const totalSupplies = useMultipleContractSingleData(rewardsAddresses, STAKING_REWARDS_INTERFACE, 'totalSupply')

  // tokens per second, constants
  const rewardRates = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'rewardRate',
    undefined,
    NEVER_RELOAD
  )
  const periodFinishes = useMultipleContractSingleData(
    rewardsAddresses,
    STAKING_REWARDS_INTERFACE,
    'periodFinish',
    undefined,
    NEVER_RELOAD
  )

  return useMemo(() => {
    if (!chainId || !uni) return []

    return rewardsAddresses.reduce<StakingInfoBSC[]>((memo, rewardsAddress, index) => {
      // these two are dependent on account
      const balanceState = balances[index]
      const earnedAmountState = earnedAmounts[index]

      // these get fetched regardless of account
      const totalSupplyState = totalSupplies[index]
      const rewardRateState = rewardRates[index]
      const periodFinishState = periodFinishes[index]

      if (
        // these may be undefined if not logged in
        !balanceState?.loading &&
        !earnedAmountState?.loading &&
        // always need these
        totalSupplyState &&
        !totalSupplyState.loading &&
        rewardRateState &&
        !rewardRateState.loading &&
        periodFinishState &&
        !periodFinishState.loading
      ) {
        if (
          balanceState?.error ||
          earnedAmountState?.error ||
          totalSupplyState.error ||
          rewardRateState.error ||
          periodFinishState.error
        ) {
          console.error('Failed to load staking rewards info')
          return memo
        }

        // get the LP token
        const tokens = info[index].tokens
        const dummyPair = new Pair(new TokenAmount(tokens[0], '0'), new TokenAmount(tokens[1], '0'))

        // check for account, if no account set to 0

        const stakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(balanceState?.result?.[0] ?? 0))
        const totalStakedAmount = new TokenAmount(dummyPair.liquidityToken, JSBI.BigInt(totalSupplyState.result?.[0]))
        const totalRewardRate = new TokenAmount(uni, JSBI.BigInt(rewardRateState.result?.[0]))

        const getHypotheticalRewardRate = (
          stakedAmount: TokenAmount,
          totalStakedAmount: TokenAmount,
          totalRewardRate: TokenAmount
        ): TokenAmount => {
          return new TokenAmount(
            uni,
            JSBI.greaterThan(totalStakedAmount.raw, JSBI.BigInt(0))
              ? JSBI.divide(JSBI.multiply(totalRewardRate.raw, stakedAmount.raw), totalStakedAmount.raw)
              : JSBI.BigInt(0)
          )
        }

        const individualRewardRate = getHypotheticalRewardRate(stakedAmount, totalStakedAmount, totalRewardRate)

        const periodFinishMs = periodFinishState.result?.[0]?.mul(1000)?.toNumber()
        memo.push({
          days: dayss[index],
          apr: aprs[index],
          stakingRewardAddress: rewardsAddress,
          tokens: info[index].tokens,
          periodFinish: periodFinishMs > 0 ? new Date(periodFinishMs) : undefined,
          earnedAmount: new TokenAmount(uni, JSBI.BigInt(earnedAmountState?.result?.[0] ?? 0)),
          rewardRate: individualRewardRate,
          totalRewardRate: totalRewardRate,
          stakedAmount: stakedAmount,
          totalStakedAmount: totalStakedAmount,
          getHypotheticalRewardRate
        })
      }
      return memo
    }, [])
  }, [
    aprs,
    balances,
    chainId,
    dayss,
    earnedAmounts,
    info,
    periodFinishes,
    rewardRates,
    rewardsAddresses,
    totalSupplies,
    uni
  ])
}

export function useEarnInfo(pairToFilterBy?: Pair | null): EarnVaultETH[] {
  const { chainId } = useActiveWeb3React()

  const info = useMemo(
    () =>
      chainId
        ? EARN_VAULT_ETH[chainId]?.filter(stakingRewardInfo =>
            pairToFilterBy === undefined
              ? true
              : pairToFilterBy === null
              ? false
              : pairToFilterBy.involvesToken(stakingRewardInfo.tokens[0]) &&
                pairToFilterBy.involvesToken(stakingRewardInfo.tokens[1])
          ) ?? []
        : [],
    [chainId, pairToFilterBy]
  )

  const rewardsAddresses = useMemo(() => info.map(({ stakingRewardAddress }) => stakingRewardAddress), [info])
  const aprs = useMemo(() => info.map(({ apr }) => apr), [info])
  const dayss = useMemo(() => info.map(({ days }) => days), [info])
  const link = useMemo(() => info.map(({ link }) => link), [info])

  return useMemo(() => {
    return rewardsAddresses.reduce<EarnVaultETH[]>((memo, rewardsAddress, index) => {
      memo.push({
        days: dayss[index],
        apr: aprs[index],
        link: link[index],
        stakingRewardAddress: rewardsAddress,
        tokens: info[index].tokens
      })
      return memo
    }, [])
  }, [aprs, dayss, rewardsAddresses, link])
}

export function useTotalUniEarned(): TokenAmount | undefined {
  const { chainId } = useActiveWeb3React()
  const uni = chainId ? UNI[chainId] : undefined
  const stakingInfos = useStakingInfo()

  return useMemo(() => {
    if (!uni) return undefined
    return (
      stakingInfos?.reduce(
        (accumulator, stakingInfo) => accumulator.add(stakingInfo.earnedAmount),
        new TokenAmount(uni, '0')
      ) ?? new TokenAmount(uni, '0')
    )
  }, [stakingInfos, uni])
}

// based on typed value
export function useDerivedStakeInfo(
  typedValue: string,
  stakingToken: Token,
  userLiquidityUnstaked: TokenAmount | undefined
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = tryParseAmount(typedValue, stakingToken)

  const parsedAmount =
    parsedInput && userLiquidityUnstaked && JSBI.lessThanOrEqual(parsedInput.raw, userLiquidityUnstaked.raw)
      ? parsedInput
      : undefined

  let error: string | undefined
  if (!account) {
    error = 'Connect Wallet'
  }
  if (!parsedAmount) {
    error = error ?? 'Enter an amount'
  }

  return {
    parsedAmount,
    error
  }
}

// based on typed value
export function useDerivedUnstakeInfo(
  typedValue: string,
  stakingAmount: TokenAmount
): {
  parsedAmount?: CurrencyAmount
  error?: string
} {
  const { account } = useActiveWeb3React()

  const parsedInput: CurrencyAmount | undefined = tryParseAmount(typedValue, stakingAmount.token)

  const parsedAmount = parsedInput && JSBI.lessThanOrEqual(parsedInput.raw, stakingAmount.raw) ? parsedInput : undefined

  let error: string | undefined
  if (!account) {
    error = 'Connect Wallet'
  }
  if (!parsedAmount) {
    error = error ?? 'Enter an amount'
  }

  return {
    parsedAmount,
    error
  }
}
