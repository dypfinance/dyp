import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
//import LOGO from '../../assets/images/soon.png'
import Whitelist from '../../components/Whitelist'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const StyledLink = styled.a`
  color: grey;
  -webkit-align-items: center;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`

export default function Bridge() {
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
                <TYPE.white fontWeight={600}>DYP Bridge</TYPE.white>
                {/*<img src={LOGO} style={{ height: '39px' }} alt={'logo'} />*/}
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  The Bridge will help you swap DYP tokens between Ethereum Network and Binance Smart Chain Network.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f"
                  >
                    DeFi Yield Protocol Bridge Tutorial
                  </StyledLink>
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Visit{' '}
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://bridge.dyp.finance/"
                  >
                    bridge.dyp.finance
                  </StyledLink>{' '}
                  to start using the DeFi Yield Protocol Bridge.
                </TYPE.white>
              </RowBetween>{' '}
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>
    </PageWrapper>
  )
}
