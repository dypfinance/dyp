import React from 'react'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import styled from 'styled-components'
import { TYPE, ExternalLink } from '../../theme'
import DoubleCurrencyLogo from '../DoubleLogo'
import { ButtonPrimary } from '../Button'
import { StakingInfo } from '../../state/stake/hooks'
import { useColor } from '../../hooks/useColor'
import { CardNoise, CardBGImage } from './styled'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import getFormattedNumber from '../Function/get-formatted-number'

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  display: none;
`};
`

const Wrapper = styled(AutoColumn)<{ showBackground: boolean; bgColor: any }>`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  position: relative;
  opacity: ${({ showBackground }) => (showBackground ? '0.6' : '1')};
  background: ${({ theme, bgColor, showBackground }) =>
    `radial-gradient(91.85% 100% at 1.84% 0%, ${bgColor} 0%, ${showBackground ? theme.black : theme.bg5} 100%) `};
  color: ${({ theme, showBackground }) => (showBackground ? theme.white : theme.text1)} !important;

  ${({ showBackground }) =>
    showBackground &&
    `  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);`}
`

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 120px;
  grid-gap: 0px;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 48px 1fr 96px;
  `};
`

const window1 = window

export default function PoolCard({ stakingInfo }: { stakingInfo: StakingInfo }) {
  const token0 = stakingInfo.tokens[0]
  const apr = stakingInfo.apr
  const days = stakingInfo.days

  const currency0 = unwrappedToken(token0)

  let link = 'constant-staking-30'
  let tvlPools = 0
  // eslint-disable-next-line
  //@ts-ignore
  if (window1.the_graph_result.lp_data) {
    // eslint-disable-next-line
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/camelcase
    tvlPools = window1._tvl30
  }
  if (stakingInfo.tokens[1].symbol === 'USDC') {
    link = 'constant-staking-60'
    // eslint-disable-next-line
    //@ts-ignore
    if (window1.the_graph_result.lp_data) {
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      tvlPools = window1._tvl60
    }
  }
  if (stakingInfo.tokens[1].symbol === 'USDT') {
    link = 'constant-staking-90'
    // eslint-disable-next-line
    //@ts-ignore
    if (window1.the_graph_result.lp_data) {
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      tvlPools = window1._tvl90
    }
  }
  if (stakingInfo.tokens[1].symbol === 'WBTC') {
    link = 'constant-staking-120'
    // eslint-disable-next-line
    //@ts-ignore
    if (window1.the_graph_result.lp_data) {
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      tvlPools = window1._tvl120
    }
  }

  // get the color of the token
  const token = currency0
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const backgroundColor = useColor(token)

  return (
    <Wrapper showBackground={false} bgColor={backgroundColor}>
      <CardBGImage desaturate />
      <CardNoise />

      <TopSection>
        <DoubleCurrencyLogo currency0={currency0} size={24} />
        <TYPE.white fontWeight={600} fontSize={24}>
          {currency0.symbol}
        </TYPE.white>

        <ExternalLink
          style={{
            width: '100%'
          }}
          href={`https://app.dyp.finance/${link}`}
          target="_blank"
        >
          <ButtonPrimary padding="8px" borderRadius="8px">
            Deposit
          </ButtonPrimary>
        </ExternalLink>
      </TopSection>

      <StatContainer>
        <RowBetween>
          <TYPE.white> Total Value Locked </TYPE.white>
          <TYPE.white>${getFormattedNumber(tvlPools, 2)}</TYPE.white>
        </RowBetween>
        <RowBetween>
          <TYPE.white> Minimum Lock Time </TYPE.white>
          <TYPE.white>{days}</TYPE.white>
        </RowBetween>
        <RowBetween>
          <TYPE.white> APR </TYPE.white>
          <TYPE.white>{apr}</TYPE.white>
        </RowBetween>
      </StatContainer>
    </Wrapper>
  )
}
