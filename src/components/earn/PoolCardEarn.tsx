import React from 'react'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import styled from 'styled-components'
import { TYPE, ExternalLink } from '../../theme'
import DoubleCurrencyLogo from '../DoubleLogo'
import { ButtonPrimary } from '../Button'
import { EarnVaultETH } from '../../state/stake/hooks'
import { useColor } from '../../hooks/useColor'
import { CardNoise, CardBGImage } from './styled'
import { unwrappedToken } from '../../utils/wrappedCurrency'
//import getFormattedNumber from '../Function/get-formatted-number'

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

const AprMobile = styled.div`
  display: none;
  font-weight=300; 
   font-size=14px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: block;
    font-weight=300; 
    font-size=14px;
  `};
`

export default function PoolCardEarn({ stakingInfo }: { stakingInfo: EarnVaultETH }) {
  const token0 = stakingInfo.tokens[1]
  const apr = stakingInfo.apr
  const days = stakingInfo.days
  const link = stakingInfo.link

  const currency0 = unwrappedToken(token0)

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
          <AprMobile>
            <TYPE.white fontWeight={500} fontSize={14}>
              APY: {apr}
            </TYPE.white>
          </AprMobile>
        </TYPE.white>

        <ExternalLink
          style={{
            width: '100%'
          }}
          href={`https://vault.dyp.finance/${link}`}
          target="_blank"
        >
          <ButtonPrimary padding="8px" borderRadius="8px">
            Supply
          </ButtonPrimary>
        </ExternalLink>
      </TopSection>

      <StatContainer>
        <RowBetween>
          <TYPE.white> Minimum Lock Time </TYPE.white>
          <TYPE.white>{days}</TYPE.white>
        </RowBetween>
        <RowBetween>
          <TYPE.white> APY </TYPE.white>
          <TYPE.white>{apr}</TYPE.white>
        </RowBetween>
      </StatContainer>
    </Wrapper>
  )
}
