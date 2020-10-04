import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import LOGO from '../../assets/images/soon.png'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

export default function Earn() {
  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>DYP Referral</TYPE.white>
                <img src={LOGO} style={{ height: '39px' }} alt={'logo'} />
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Should you refer DYP to your friends, 5% of your friends’ rewards will be automatically sent to you
                  whenever your friends stake DYP. You do not need to stake, it’s automatically sent to you, free of gas
                  fee.
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
