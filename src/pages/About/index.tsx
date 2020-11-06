import React, { useState } from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { ExternalLink, TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import Whitelist from '../../components/Whitelist'

import Rig1 from '../../assets/images/rig1.jpg'
import Rig2 from '../../assets/images/rig2.jpg'
import Rig3 from '../../assets/images/rig3.jpg'
import Rig4 from '../../assets/images/rig4.jpg'
import Rig5 from '../../assets/images/rig5.jpg'

import Logo from '../../assets/svg/logo.svg'
import LinkedinSvg from '../../assets/svg/linkedin_2.svg'
import TwitterSvg from '../../assets/svg/twitter_2.svg'
import GithubSvg from '../../assets/svg/github_black.svg'

import Modal from '../../components/Modal'
import UniBalanceContent from '../../components/Header/UniBalanceContent'
import Bio, { Bio2, Bio3, Bio4 } from '../../components/Bio'
import CoinTelegraph from '../../assets/images/cointelegraph.png'
import NewsBTC from '../../assets/images/newsbtc.jpg'
import UpTrennd from '../../assets/images/uptrennd.png'
import YouTube from '../../assets/images/youtube.png'
import Gokhshtein from '../../assets/svg/gokhshtein.svg'
import Peckshield from '../../assets/images/peckshield.png'
import Consilium from '../../assets/images/consilium.png'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  padding-top: 25px;
`

const NewRow = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  justify-self: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    flex-wrap: wrap;
 `}
`

const TeamRow = styled(AutoColumn)`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  display: grid;
  padding: 0;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  justify-self: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    flex-wrap: wrap;
 `}
`

const Justify = styled.div`
  display: flex;
  justify-content: space-around;
`

const TeamStyle = styled.div`
  box-sizing: border-box;
  margin-bottom: 20px;
  min-width: 0;
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1000px;
  justify-self: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    flex-wrap: wrap;
 `}
`

const DataCardLeft = styled(AutoColumn)`
  max-width: 64%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      left: 1%;
      position: relative;
      max-width: 100%;
`}
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

const IMGs = styled.div`
  max-width: 64%;
  display: grid;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: grid;
    max-width: 100%;
  `}
`

export default function About() {
  const [showUniBalanceModal, setShowUniBalanceModal] = useState(false)
  return (
    <PageWrapper gap="lg" justify="center">
      <Modal isOpen={showUniBalanceModal} onDismiss={() => setShowUniBalanceModal(false)}>
        <UniBalanceContent setShowUniBalanceModal={setShowUniBalanceModal} />
      </Modal>
      <Whitelist />
      <TYPE.black fontWeight={600} fontSize={50}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hi. We're DeFi Yield Protocol.
      </TYPE.black>
      <TYPE.black fontWeight={400} fontSize={25}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We're on a quest to create a unique Decentralized experience
      </TYPE.black>
      <RowBetween />
      <TopSection gap="md">
        <AutoColumn gap="md" style={{ position: 'relative' }}>
          <RowBetween>
            <IMGs>
              <img
                src={Rig1}
                alt={'logo'}
                style={{
                  borderRadius: '12px',
                  marginRight: '5px',
                  width: '100%',
                  maxWidth: '379px',
                  marginBottom: '5px'
                }}
              />
              <img
                src={Rig2}
                alt={'logo'}
                style={{
                  borderRadius: '12px',
                  marginRight: '5px',
                  width: '100%',
                  maxWidth: '379px'
                }}
              />
            </IMGs>
            <IMGs>
              <img
                src={Rig3}
                alt={'logo'}
                style={{
                  borderRadius: '12px',
                  marginRight: '5px',
                  width: '100%',
                  maxWidth: '379px'
                }}
              />
              <img
                src={Rig4}
                alt={'logo'}
                style={{
                  borderRadius: '12px',
                  marginRight: '5px',
                  marginTop: '5px',
                  width: '100%',
                  maxWidth: '379px'
                }}
              />
            </IMGs>
            <div style={{ maxWidth: '36%' }}>
              <img
                src={Rig5}
                alt={'logo'}
                style={{
                  borderRadius: '12px',
                  alignItems: 'unset',
                  width: '100%',
                  maxWidth: '432px'
                }}
              />
            </div>
          </RowBetween>
          <TopSection gap="md">
            <AutoColumn gap="md" style={{ position: 'relative' }}>
              <RowBetween />
            </AutoColumn>
          </TopSection>
          <TopSection gap="md">
            <AutoColumn gap="md" style={{ position: 'relative' }}>
              <NewRow>
                <DataCardLeft>
                  <RowBetween>
                    <TYPE.black fontWeight={600} fontSize={40}>
                      What We Do
                    </TYPE.black>
                  </RowBetween>
                  <RowBetween />
                  <RowBetween>
                    <TYPE.black fontWeight={400}>
                      DeFi Yield protocol (DYP) is changing the way you earn through liquidity on Ethereum smart
                      contract. The argument against DeFi is that whales have the power to control the network. DeFi
                      Yield protocol (DYP) prevents the whale advantage in DeFi. DYP anti-manipulation feature ensures
                      that all pool rewards are automatically converted from DYP to ETH at 00:00 UTC, and the system
                      automatically distributes the rewards to the liquidity providers. This feature is excellent
                      because the network’s liquidity will be fair to all participants; no whale will be able to
                      manipulate the price of DYP to their advantage.
                    </TYPE.black>
                  </RowBetween>
                </DataCardLeft>
                <RowBetween>
                  <img src={Logo} alt={'logo'} />
                </RowBetween>
              </NewRow>
            </AutoColumn>
          </TopSection>
        </AutoColumn>
      </TopSection>
      <TopSection gap="md">
        <AutoColumn gap="md" style={{ position: 'relative' }}>
          <RowBetween />
        </AutoColumn>
      </TopSection>
      <TYPE.black fontWeight={600} fontSize={40}>
        Our Leadership Team
      </TYPE.black>
      <RowBetween />
      <TopSection gap="md">
        <AutoColumn gap="md" style={{ position: 'relative' }}>
          <TeamStyle>
            <div>
              <TeamRow>
                <TYPE.black fontSize={20}>Michael Nikolas</TYPE.black>
                <TYPE.black fontSize={14} marginBottom={16}>
                  Chief Executive Officer
                </TYPE.black>
                <Justify>
                  <ExternalLink style={{ color: 'black' }} href="https://twitter.com/m_BMN_" target="_blank">
                    <img src={TwitterSvg} alt="logo" height={37} />
                  </ExternalLink>
                  <Bio />
                </Justify>
              </TeamRow>
            </div>
            <div>
              <TYPE.black fontSize={20}>Gianni Vizin</TYPE.black>
              <TYPE.black fontSize={14} marginBottom={16}>
                Software Developer & SA
              </TYPE.black>
              <Justify>
                <ExternalLink style={{ color: 'black' }} href="https://github.com/gianviz">
                  <img src={GithubSvg} alt="" height={37} />
                </ExternalLink>
                <Bio3 />
              </Justify>
            </div>
          </TeamStyle>
          <RowBetween />
          <TeamStyle>
            <div>
              <TYPE.black fontSize={20}>Daniel Provak</TYPE.black>
              <TYPE.black fontSize={14} marginBottom={16}>
                Software Developer
              </TYPE.black>
              <Justify>
                <ExternalLink style={{ color: 'black' }} href="https://github.com/doyledyp">
                  <img src={GithubSvg} alt="" height={37} />
                </ExternalLink>
                <Bio2 />
              </Justify>
            </div>
            <div>
              <div>
                <TYPE.black fontSize={20}>Teki Kolaneci</TYPE.black>
                <TYPE.black fontSize={14} marginBottom={16}>
                  Digital Strategy Manager
                </TYPE.black>
                <Justify>
                  <ExternalLink style={{ color: 'black' }} href="https://www.linkedin.com/in/teki-kolaneci">
                    <img src={LinkedinSvg} alt="" />
                  </ExternalLink>
                  <Bio4 />
                </Justify>
              </div>
            </div>
          </TeamStyle>
        </AutoColumn>
      </TopSection>
      <TYPE.black fontWeight={600} fontSize={40} marginTop={25}>
        Working with
      </TYPE.black>
      <RowBetween />
      <RowBetween style={{ maxWidth: '800px' }}>
        <StyledNav>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://peckshield.com"
            target="_blank"
          >
            <Item>
              <img src={Peckshield} style={{ width: '70px' }} alt={'logo'} />
              <TextNews>Security Audit</TextNews>
            </Item>
          </ExternalLink>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://www.blockchainconsilium.com/"
            target="_blank"
          >
            <Item>
              <img src={Consilium} style={{ width: '70px' }} alt={'logo'} />
              <TextNews>Security Audit</TextNews>
            </Item>
          </ExternalLink>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://gokhshtein.com"
            target="_blank"
          >
            <Item>
              <img
                src={Gokhshtein}
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  backgroundColor: 'black',
                  borderWidth: '8px',
                  marginBottom: '10px'
                }}
                alt={'logo'}
              />
              <TextNews>Marketing Campaign</TextNews>
            </Item>
          </ExternalLink>
        </StyledNav>
      </RowBetween>
      <TYPE.black fontWeight={600} fontSize={40} marginTop={25}>
        Press Highlights
      </TYPE.black>
      <RowBetween />
      <RowBetween style={{ maxWidth: '1100px' }}>
        <StyledNav>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://cointelegraph.com/press-releases/defi-yield-protocol-your-new-defi-gem-with-anti-manipulation-feature"
            target="_blank"
          >
            <Item>
              <img src={CoinTelegraph} style={{ width: '70px' }} alt={'logo'} />
              <TextNews>COINTELEGRAPH</TextNews>
            </Item>
          </ExternalLink>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/"
            target="_blank"
          >
            <Item>
              <img src={NewsBTC} style={{ width: '70px' }} alt={'logo'} />
              <TextNews>NEWSBTC</TextNews>
            </Item>
          </ExternalLink>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://www.uptrennd.com/post-detail/defi-yield-protocol-your-new-on-the-go-defi~NzcxNzk0"
            target="_blank"
          >
            <Item>
              <img src={UpTrennd} style={{ width: '70px' }} alt={'logo'} />
              <TextNews>uptrennd</TextNews>
            </Item>
          </ExternalLink>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://www.youtube.com/watch?v=cJMMBR41Rxs"
            target="_blank"
          >
            <Item>
              <img src={YouTube} style={{ width: '70px' }} alt={'logo'} />
              <TextNews>YouTube</TextNews>
            </Item>
          </ExternalLink>
        </StyledNav>
      </RowBetween>
    </PageWrapper>
  )
}
