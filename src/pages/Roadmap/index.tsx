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
  max-width: 1000px;
  width: 100%;
`

const MidLine = styled(AutoColumn)`
  content: '';
  position: absolute;
  width: 6px;
  background-color: red;
  // background-color: #182848;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      left: 0;
`}
`
const DataCardLeft = styled(AutoColumn)`
  position: relative;
  width: 600px
  max-width: 48%;
  left: 1%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      left: 1%;
      position: relative;
      max-width: 80%;
      width: 420px;
`}
`

const DataCardRight = styled(AutoColumn)`
  left: 51%;
  position: relative;
  max-width: 48%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      left: 1%;
      position: relative;
      width: 420px
      max-width: 80%;
`}
`

export default function Roadmap() {
  return (
    <PageWrapper gap="lg" justify="center">
      <Whitelist />
      <TYPE.black fontWeight={500} fontSize={35}>
        Roadmap Overview 2020 & 2021
      </TYPE.black>
      <TopSection gap="md">
        <AutoColumn gap="md" style={{ position: 'relative' }}>
          <MidLine></MidLine>
          <RowBetween>
            <DataCardLeft>
              <RowBetween>
                <TYPE.black fontWeight={600} fontSize={30}>
                  Q3/2020
                </TYPE.black>
              </RowBetween>
              <DataCard>
                <CardBGImage />
                <CardNoise />
                <CardSection>
                  <AutoColumn gap="md">
                    <RowBetween>
                      <TYPE.white fontWeight={600}>
                        ✓ Creation of DeFi Yield Protocol platform<div></div>✓ DYP Documentation Release<div></div>✓
                        Building DYP ERC-20 Token Smart Contract<div></div>✓ DYP Community Marketing<div></div>
                      </TYPE.white>
                    </RowBetween>
                  </AutoColumn>
                </CardSection>
                <CardBGImage />
                <CardNoise />
              </DataCard>
            </DataCardLeft>
          </RowBetween>
          <RowBetween>
            <DataCardRight>
              <RowBetween>
                <TYPE.black fontWeight={600} fontSize={30}>
                  Q4/2020
                </TYPE.black>
              </RowBetween>
              <DataCard>
                <CardBGImage />
                <CardNoise />
                <CardSection>
                  <AutoColumn gap="md">
                    <RowBetween>
                      <TYPE.white fontWeight={600}>
                        ✓ Token Crowdsale scheduled toward the end of October<div></div>✓ Uniswap Listing<div></div>✓
                        Liquidity Lock<div></div>✓ Listing DYP in other exchanges<div></div>✓ Building Smart Contract
                        for Liquidity Mining pools<div></div>✓ Building Smart Contract for miners<div></div>✓ Smart
                        Contract Security Audit<div></div>✓ Add Liquidity Participating Pools<div></div>✓ Ethereum
                        mining pool Whitelist Launch<div></div>✓ Launch DYP Governance<div></div>✓ Launch DYP Referral
                        <div></div>
                      </TYPE.white>
                    </RowBetween>
                  </AutoColumn>
                </CardSection>
                <CardBGImage />
                <CardNoise />
              </DataCard>
            </DataCardRight>
          </RowBetween>
          <RowBetween>
            <DataCardLeft>
              <RowBetween>
                <TYPE.black fontWeight={600} fontSize={30}>
                  Q1/2021
                </TYPE.black>
              </RowBetween>
              <DataCard>
                <CardBGImage />
                <CardNoise />
                <CardSection>
                  <AutoColumn gap="md">
                    <RowBetween>
                      <TYPE.white fontWeight={600}>
                        ✓ Launch DYP Earn Vault<div></div>✓ Bridge for swapping DYP between BSC and ETH networks
                        <div></div>✓ Partnerships<div></div>✓ DYP Apps Development<div></div>➫ Launch DYP Tools
                      </TYPE.white>
                    </RowBetween>
                  </AutoColumn>
                </CardSection>
                <CardBGImage />
                <CardNoise />
              </DataCard>
            </DataCardLeft>
          </RowBetween>
          <RowBetween>
            <DataCardRight>
              <RowBetween>
                <TYPE.black fontWeight={600} fontSize={30}>
                  Q2/2021 - Q4/2021
                </TYPE.black>
              </RowBetween>
              <DataCard>
                <CardBGImage />
                <CardNoise />
                <CardSection>
                  <AutoColumn gap="md">
                    <RowBetween>
                      <TYPE.white fontWeight={600}>
                        ➫Launch DYP NFT dApp v1.0<div></div>➫ Launch Ethereum mining pool & yield farming for miners
                        <div></div>➫ Launch DYP Lending<div></div>➫ Migration from Uniswap<div></div>➫ Built-in
                        insurance for all DYP liquidity providers<div></div>➫ Further extension and project growth in
                        different areas<div></div>
                      </TYPE.white>
                    </RowBetween>
                  </AutoColumn>
                </CardSection>
                <CardBGImage />
                <CardNoise />
              </DataCard>
            </DataCardRight>
          </RowBetween>
        </AutoColumn>
      </TopSection>
    </PageWrapper>
  )
}
