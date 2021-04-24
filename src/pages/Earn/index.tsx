import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { STAKING_REWARDS_INFO, useStakingInfo, useStakingInfoBSC } from '../../state/stake/hooks'
import { TYPE, ExternalLink } from '../../theme'
import PoolCard from '../../components/earn/PoolCard'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
// import { Countdown } from './Countdown'
import Loader from '../../components/Loader'
import { useActiveWeb3React } from '../../hooks'
import Arrow from '../../assets/svg/arrow.svg'
import Whitelist from '../../components/Whitelist'
import getFormattedNumber from '../../components/Function/get-formatted-number'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

// const SpaceBetween = styled.div`
//   display: block;
// `

const window1 = window

export default function Earn() {
  const { chainId } = useActiveWeb3React()
  const stakingInfos = useStakingInfo()
  const stakingInfosBsc = useStakingInfoBSC()
  const DataRow = styled(RowBetween)`
    ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `};
  `
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const tvl = window1.COMBINED_TVL
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const tvlBsc = window1.getTvlBsc
  const stakingRewardsExist = Boolean(typeof chainId === 'number' && (STAKING_REWARDS_INFO[chainId]?.length ?? 0) > 0)

  return (
    <PageWrapper gap="lg" justify="center">
      <Whitelist />
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>DYP ETH Staking Pools</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Deposit your liquidity provider tokens to receive Ethereum rewards.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  In order to lower the risk of DYP price volatility, all pool rewards are automatically converted from
                  DYP to ETH by the smart contract, and ETH is distributed as a reward to the liquidity providers.
                  <div></div>Maintaining token price stability — every 24 hours, the smart contract will automatically
                  try to convert the DYP rewards to ETH. If the DYP price is affected by more than{' '}
                  <a style={{ color: 'red', textDecoration: 'none' }} href="#earn">
                    <img src={Arrow} alt="icon" />
                    2.5%
                  </a>
                  , then the maximum DYP amount that does not affect the price will be swapped to ETH, with the
                  remaining amount distributed in the next day’s rewards. After seven days, if we still have
                  undistributed DYP rewards, the DeFi Yield protocol governance will vote on whether the remaining DYP
                  will be distributed to the token holders or burned (all burned tokens are removed from circulation).
                </TYPE.white>
              </RowBetween>{' '}
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                href="https://dypfinance.medium.com/dyp-staking-pools-tutorial-82bd49e65527"
                target="_blank"
              >
                <TYPE.white fontSize={14}>DYP ETH Staking Pools Tutorial</TYPE.white>
              </ExternalLink>
              <RowBetween />{' '}
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                href="https://medium.com/@dypfinance/introducing-the-defi-yield-protocol-12ea2146d328"
                target="_blank"
              >
                <TYPE.white fontSize={14}>Read more about DYP</TYPE.white>
              </ExternalLink>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Participating pools</TYPE.mediumHeader>
          {/*<Countdown exactEnd={stakingInfos?.[0]?.periodFinish} />*/}
          <TYPE.black>Total Value Locked: ${getFormattedNumber(tvl, 2)}</TYPE.black>
        </DataRow>

        <PoolSection>
          {stakingRewardsExist && stakingInfos?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            'No active rewards'
          ) : (
            stakingInfos?.map(stakingInfo => {
              // need to sort by added liquidity here
              return <PoolCard key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} />
            })
          )}
        </PoolSection>
      </AutoColumn>
      <RowBetween />
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>DYP BSC Staking Pools</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Deposit your liquidity provider tokens to receive ETH/BNB/DYP as rewards.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  NOTE: The staking dApp works ONLY with the PancakeSwap V1 (old) LP tokens!
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  When you add your liquidity to PancakeSwap be sure that you add it on the old version{' '}
                  <ExternalLink
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://pancakeswap-v1.dyp.finance/#/swap"
                    target="_blank"
                  >
                    <TYPE.white fontSize={14}>https://pancakeswap-v1.dyp.finance/#/swap</TYPE.white>
                  </ExternalLink>
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  In order to lower the risk of DYP price volatility, all pool rewards are automatically converted from
                  DYP to BNB by the smart contract, and ETH/BNB/DYP is distributed as a reward to the liquidity
                  providers. The users can choose between three different type of rewards: ETH, BNB, or DYP.
                  <div></div>Maintaining token price stability — every 24 hours, the smart contract will automatically
                  try to convert the DYP rewards to BNB. If the DYP price is affected by more than{' '}
                  <a style={{ color: 'red', textDecoration: 'none' }} href="#earn">
                    <img src={Arrow} alt="icon" />
                    2.5%
                  </a>
                  , then the maximum DYP amount that does not affect the price will be swapped to BNB, with the
                  remaining amount distributed in the next day’s rewards. After seven days, if we still have
                  undistributed DYP rewards, the DeFi Yield protocol governance will vote on whether the remaining DYP
                  will be distributed to the token holders or burned (all burned tokens are removed from circulation).
                </TYPE.white>
              </RowBetween>{' '}
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                href="https://dypfinance.medium.com/defi-yield-protocol-community-update-staking-pools-tutorial-on-binance-smart-chain-dfa342a5634b"
                target="_blank"
              >
                <TYPE.white fontSize={14}>DYP BSC Staking Pools Tutorial</TYPE.white>
              </ExternalLink>
              <RowBetween />{' '}
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f"
                target="_blank"
              >
                <TYPE.white fontSize={14}>Read more about DYP Bridge Tutorial</TYPE.white>
              </ExternalLink>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Participating pools</TYPE.mediumHeader>
          {/*<Countdown exactEnd={stakingInfos?.[0]?.periodFinish} />*/}
          <TYPE.black>Total Value Locked: ${getFormattedNumber(tvlBsc, 2)}</TYPE.black>
        </DataRow>

        <PoolSection>
          {stakingRewardsExist && stakingInfosBsc?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            'No active rewards'
          ) : (
            stakingInfosBsc?.map(stakingInfo => {
              // need to sort by added liquidity here
              return <PoolCard key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} />
            })
          )}
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
