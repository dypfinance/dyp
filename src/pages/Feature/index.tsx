import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import Whitelist from '../../components/Whitelist'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

export default function Feature() {
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
                <TYPE.white fontWeight={600}>DYP Anti-Manipulation Feature</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Why is DeFi Yield Protocol Unique? DeFi Yield Protocol: Your New On-The-Go DeFi
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  DeFi Yield Protocol (DYP) will provide a solution to the risk Yield Farming brought in. How? – The DYP
                  is developing a platform that allows anyone to provide liquidity and be rewarded with DYP tokens, and
                  at the same time maintaining both token price stability and secure and simplified DeFi for end users.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>How will this work?</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  By providing liquidity to any of this DYP pair pool on Uniswap (DYP/ETH, DYP/USDC, DYP/USDT and
                  DYP/WBTC POOL), you’ll be able to use a feature which you’ll only experience with DYP. I’m talking
                  about the anti-manipulation feature wherein all pool rewards are automatically converted from DYP to
                  ETH by the smart contract at 00:00 UTC, and ETH is distributed as a reward to the liquidity providers.
                  It means that from that time, no one can move their funds yet unless the auto-conversion has done.
                  Cool feature, right? No whales will be able to sell their DYP profit that will cause the volatility on
                  its price.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>Let’s dig a bit more about this.</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Every day at 00:00 UTC, the smart contract will automatically try to convert 276,480 DYP (69,120 DYP
                  reward per day, per DYP pool mentioned above) to ETH. If the DYP price is affected by more than 2.5%,
                  then the maximum DYP amount that does not affect the price will be swapped to ETH, with the remaining
                  amount distributed in the next day’s rewards. After seven days, if there are still undistributed DYP
                  rewards, the DeFi Yield protocol governance will vote on whether the remaining DYP will be distributed
                  to the token holders or burned, which removes them from circulation.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Knowing that there will be anti-manipulation feature for every DYP pair pool, plankton or shrimp users
                  (in opposed to whales) can now enjoy getting profit without worrying whales will move the market,
                  affecting the DYP’s prices.
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>
    </PageWrapper>
  )
}
