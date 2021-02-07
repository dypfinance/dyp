import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { ExternalLink, TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import Whitelist from '../../components/Whitelist'
import Peckshield from '../../assets/images/peckshield.png'
import Consilium from '../../assets/images/consilium.png'
import Certik from '../../assets/images/certik.png'

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

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  -webkit-align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        justify-content: space-between;
  `}
`

const Item = styled.div`
  display: grid;
  justify-items: center;
`

const TextNews = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: black;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 10px;
        font-weight: 500;
  `}
`

// const popUpAlert = function() {
//   alert('Coming soon!')
// }

export default function Index() {
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
                <TYPE.white fontWeight={600}>Defi Yield Protocol Smart Contracts Audit</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Hi, it is a pleasure to have you with us! Here, at Defi Yield Protocol, we unquestionably value your
                  security. Thus, to avoid any plausible vulnerability in the development of smart contracts, we have
                  requested services from three reputable security audit companies. We have chosen Blockchain Consilium,
                  Certik, and Peckshield (also, heartiest thank you, in this way!).
                  <div /> In addition, all our smart contracts are monitored 24/7 through a Security Oracle, powered by
                  Certik.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Feel free to check every security audit that we have uploaded on our{' '}
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://github.com/dypfinance/"
                  >
                    repo
                  </StyledLink>
                  !
                </TYPE.white>
              </RowBetween>
              <RowBetween />
              <RowBetween>
                <TYPE.white fontSize={14} fontWeight={600}>
                  Token Smart Contract:
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://github.com/dypfinance/contract-security-audit"
                  >
                    https://github.com/dypfinance/contract-security-audit
                  </StyledLink>
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween />
              <RowBetween>
                <TYPE.white fontSize={14} fontWeight={600}>
                  Staking & Governance:
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://github.com/dypfinance/staking-governance-security-audits"
                  >
                    https://github.com/dypfinance/staking-governance-security-audits
                  </StyledLink>
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween />
              <RowBetween>
                <TYPE.white fontSize={14} fontWeight={600}>
                  Token Lock Vesting:
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://github.com/dypfinance/token-lock-vesting-contracts/tree/main/Blockchain%20Consilium%20Audit"
                  >
                    https://github.com/dypfinance/token-lock-vesting-contracts/
                  </StyledLink>
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween />
              <RowBetween>
                <TYPE.white fontSize={14} fontWeight={600}>
                  Certik Security Oracle:
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  <StyledLink
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://github.com/dypfinance/contract-security-audit"
                  >
                    https://www.certik.org/projects/dypfinance
                  </StyledLink>
                </TYPE.white>
              </RowBetween>{' '}
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
        <RowBetween />
        <RowBetween style={{ maxWidth: '800px', paddingTop: '30px' }}>
          <StyledNav>
            <ExternalLink
              style={{ color: 'white', textDecoration: 'underline' }}
              href="https://www.blockchainconsilium.com/"
              target="_blank"
            >
              <Item>
                <img src={Consilium} style={{ width: '70px' }} alt={'logo'} />
                <TextNews>Blockchain Consilium</TextNews>
              </Item>
            </ExternalLink>
            <ExternalLink
              style={{ color: 'white', textDecoration: 'underline' }}
              href="https://certik.foundation/"
              target="_blank"
            >
              <Item>
                <img src={Certik} style={{ width: '70px' }} alt={'logo'} />
                <TextNews>Certik Foundation</TextNews>
              </Item>
            </ExternalLink>
            <ExternalLink
              style={{ color: 'white', textDecoration: 'underline' }}
              href="https://peckshield.com"
              target="_blank"
            >
              <Item>
                <img src={Peckshield} style={{ width: '70px' }} alt={'logo'} />
                <TextNews>Peckshield</TextNews>
              </Item>
            </ExternalLink>
          </StyledNav>
        </RowBetween>
      </TopSection>
    </PageWrapper>
  )
}
