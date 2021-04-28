import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { STAKING_REWARDS_INFO, useEarnInfo } from '../../state/stake/hooks'
import { TYPE, ExternalLink } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import Loader from '../../components/Loader'
import { useActiveWeb3React } from '../../hooks'
import Whitelist from '../../components/Whitelist'
//import getFormattedNumber from '../../components/Function/get-formatted-number'
import PoolCardEarn from '../../components/earn/PoolCardEarn'

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

export default function Vault() {
  const { chainId } = useActiveWeb3React()
  const stakingInfos = useEarnInfo()
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
                <TYPE.white fontWeight={600}>DYP Earn Vault</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  The DYP Earn Vault is an automated yield farming contract with Compound integration and support for
                  ETH, WBTC, USDC, USDT, and DAI markets. The interest from Compound is entirely distributed to the
                  users; from the other strategies, a substantial proportion of the profits (75%) is converted to ETH
                  and distributed to the liquidity providers, whereas the remainder (25%) is used to buy back our
                  protocol token and burn it.
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween />{' '}
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                href="https://compound.finance/docs"
                target="_blank"
              >
                <TYPE.white fontSize={14}>Read more about Compound</TYPE.white>
              </ExternalLink>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Vaults</TYPE.mediumHeader>
          {/*<Countdown exactEnd={stakingInfos?.[0]?.periodFinish} />*/}
          {/*<TYPE.black>Total Value Locked: ${getFormattedNumber(tvl, 2)}</TYPE.black>*/}
        </DataRow>

        <PoolSection>
          {stakingRewardsExist && stakingInfos?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            'No active rewards'
          ) : (
            stakingInfos?.map(stakingInfo2 => {
              // need to sort by added liquidity here
              return <PoolCardEarn key={stakingInfo2.stakingRewardAddress} stakingInfo={stakingInfo2} />
            })
          )}
        </PoolSection>
      </AutoColumn>
      <RowBetween />
    </PageWrapper>
  )
}
