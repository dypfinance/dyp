import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'

import Chart from '../../assets/images/Charts2.png'
import Whitelist from '../../components/Whitelist'

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

export default function Tokenomics() {
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
                  75.30% to DeFi Yield protocol community members: 22,588,800 DYP<div></div>
                  16,588,800 DYP distributed for pool rewards over the next 60 days<div></div>
                  5,000,000 DYP distributed over the next 60-120 days to Ethereum mining pool<div></div>
                  1,000,000 DYP locked for one year to Uniswap liquidity on token launch<div></div>
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  8.03% to team members and future employees: 2,411,200 DYP vested for 24 months, released monthly
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>16.67% to investors: 5,000,000 DYP</TYPE.white>
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
