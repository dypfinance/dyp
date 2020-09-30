import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE, ExternalLink } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'

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
                <TYPE.white fontWeight={600}>DYP Governace</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  DYP tokens represent voting shares in DeFi Yield protocol governance. The introduction of DYP tokens
                  serves this purpose, enabling shared community ownership and a vibrant, diverse, and dedicated
                  governance system, which will actively guide the protocol toward the future. <div></div>
                  DYP holders through governance can vote to add more pools, burn tokens, or allocate DYP toward grants,
                  strategic partnerships, governance initiatives, additional liquidity mining pools, and other programs.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <ExternalLink
                  style={{ color: 'white', textDecoration: 'underline' }}
                  href="https://gov.dyp.finance/"
                  target="_blank"
                >
                  <TYPE.white fontSize={14}>
                    Set up an account on gov.dyp.finance to start shaping and participating in protocol governance.
                  </TYPE.white>
                </ExternalLink>
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
