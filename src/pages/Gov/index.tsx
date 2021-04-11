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

const StyledLink = styled.a`
  color: grey;
  -webkit-align-items: center;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`

// const popUpAlert = function() {
//   alert('Coming soon!')
// }

export default function Gov() {
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
                <TYPE.white fontWeight={600}>DYP Governance</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  DYP tokens represent voting shares in DeFi Yield protocol governance. The introduction of DYP tokens
                  serves this purpose, enabling shared community ownership and a vibrant, diverse, and dedicated
                  governance system, which will actively guide the protocol toward the future. <div></div>
                  DYP holders through governance can vote to add more pools, burn tokens, or allocate DYP toward grants,
                  strategic partnerships, governance initiatives, and other programs.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Visit{' '}
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://gov.dyp.finance/"
                  >
                    gov.dyp.finance
                  </StyledLink>{' '}
                  to start shaping and participating in protocol governance on ETH Network.
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Visit{' '}
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://gov-bsc.dyp.finance/"
                  >
                    gov-bsc.dyp.finance
                  </StyledLink>{' '}
                  to start shaping and participating in protocol governance on BSC Network.
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
