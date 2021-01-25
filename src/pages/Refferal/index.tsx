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

export default function Refferal() {
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
                <TYPE.white fontWeight={600}>DYP Referral</TYPE.white>
                {/*<img src={LOGO} style={{ height: '39px' }} alt={'logo'} />*/}
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Should you refer DYP to your friends, 5% of your friends rewards will be automatically sent to you
                  whenever your friends stake DYP. You do not need to stake, it’s automatically sent to you, free of gas
                  fee.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Visit{' '}
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://app.dyp.finance/constant-staking-30"
                  >
                    app.dyp.finance/constant-staking-30
                  </StyledLink>{' '}
                  to get your Referral link.
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
