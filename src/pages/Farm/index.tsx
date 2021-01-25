import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { STAKING_REWARDS_INFO, useStakingInfo } from '../../state/stake/hooks'
import { TYPE, ExternalLink } from '../../theme'
import PoolCardConstant from '../../components/earn/PoolCardConstant'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
// import { Countdown } from './Countdown'
import Loader from '../../components/Loader'
import { useActiveWeb3React } from '../../hooks'
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

  //console.log('1111', stakingInfos)
  const DataRow = styled(RowBetween)`
    ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `};
  `
  // eslint-disable-next-line
  //@ts-ignore
  const [tvl, setTvl] = React.useState(0)
  // eslint-disable-next-line
  //@ts-ignore
  tvl === 0 &&
    window1
      // eslint-disable-next-line
      // @ts-ignore
      .FarmingTvl()
      // eslint-disable-next-line
      //@ts-ignore
      .then(tvl => setTvl(tvl))
      .catch(console.error)
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
                <TYPE.white fontWeight={600}>DYP Farming Pools</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>Deposit your DYP tokens to earn DYP rewards.</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  To start earning DYP rewards, you must deposit your DYP tokens into the corresponding list of pools.
                  Each pool will have four different staking options, with rewards starting from 20% APR up to 35% APR,
                  depending on the lock time from a minimum of thirty days up to 120 days. <br />
                  The staking pools have the REINVEST function integrated, it means you are able to automatically add
                  your daily rewards to the staking pool. Also, the DYP Referral is integrated. Should you refer DYP to
                  your friends, 5% of your friends rewards will be automatically sent to you whenever your friends stake
                  DYP. You do not need to stake, it’s automatically sent to you, free of gas fee.
                </TYPE.white>
              </RowBetween>{' '}
              {/*<ExternalLink*/}
              {/*  style={{ color: 'white', textDecoration: 'underline' }}*/}
              {/*  href="https://dypfinance.medium.com/dyp-staking-pools-tutorial-82bd49e65527"*/}
              {/*  target="_blank"*/}
              {/*>*/}
              {/*  <TYPE.white fontSize={14}>DYP Staking Pools Tutorial</TYPE.white>*/}
              {/*</ExternalLink>*/}
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
              return <PoolCardConstant key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} />
            })
          )}
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
