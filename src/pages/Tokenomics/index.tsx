import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'

import Chart from '../../assets/images/Charts2.png'
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

const IMGs = styled.div`
  max-width: 720px;
`

const window1 = window

export default function Tokenomics() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const circulatingSupply = window1.get_circulating_supply
  //console.log('aaa+ ', circulatingSupply)
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
                <TYPE.white fontWeight={600}>Tokenomics</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={13}>DYP contract address: 0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Initial Circulating Supply: {getFormattedNumber(circulatingSupply, 2)} DYP
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>DYP Allocation</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  30,000,000 DYP have been minted at genesis and will become accessible over the course of 2 years. The
                  2-year allocation is as follows:
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  75.30% to DeFi Yield protocol community members:<div></div>
                  12,000,000 DYP distributed for pool rewards over the next 12 months<div></div>
                  5,000,000 DYP distributed to Ethereum mining pool after launch (Q1/2021) - locked on smart contract
                  <div></div>
                  5,181,152 DYP reserved for other staking pools - locked on smart contract<div></div>
                  200,000 DYP locked for one year to Uniswap liquidity on token launch
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  8.03% to team members and future employees: 2,411,200 DYP vested for 24 months, released monthly
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  16.67% to investors: 5,000,000 DYP - 4,348,469 BURNED & REMOVED from the total supply TH
                  0x69d1faef4d41752c200dfe68b103c2823f94f225c502b455321bae0d94ebf8a5
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>No Additional Tokens Can Be Minted!</TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>
      <IMGs>
        <img src={Chart} alt={'logo'} style={{ width: '100%' }} />
      </IMGs>
    </PageWrapper>
  )
}
