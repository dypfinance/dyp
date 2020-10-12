import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import LOGO from '../../assets/images/soon.png'
import Whitelist from '../../components/Whitelist'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

export default function Vault() {
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
                <img src={LOGO} style={{ height: '39px' }} alt={'logo'} />
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  The DYP Earn Vault is an automated yield farming contract that allows users to deposit a particular
                  token, for which the protocol automates yield farming strategies by moving providers funds between the
                  most profitable platforms. Of the profits, 75% is converted to ETH and distributed to the liquidity
                  providers, while the remaining 25% is used to buy back our protocol governance token in order to add
                  liquidity.
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
