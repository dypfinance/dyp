import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { ExternalLink, TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import Whitelist from '../../components/Whitelist'

import Michael from '../../assets/images/team/michael.png'
import Ion from '../../assets/images/team/ion.png'
import Tek from '../../assets/images/team/tek.png'
import Const from '../../assets/images/team/const.png'
import Gino from '../../assets/images/team/gianni.png'
import Daniel from '../../assets/images/team/daniel.png'

import Rig1 from '../../assets/images/rig1.jpg'
import Rig2 from '../../assets/images/rig2.jpg'
import Rig3 from '../../assets/images/rig3.jpg'
import Rig4 from '../../assets/images/rig4.jpg'
import Rig5 from '../../assets/images/rig5.jpg'

// import Logo from '../../assets/images/sample1.png'
import LinkedinSvg from '../../assets/svg/linkedin_2.svg'
import TwitterSvg from '../../assets/svg/twitter_2.svg'
import GithubSvg from '../../assets/svg/github_black.svg'

import Bio, { Bio2, Bio3, Bio4, Bio5, Bio6 } from '../../components/Bio'
// import CoinTelegraph from '../../assets/images/cointelegraph.png'
// import NewsBTC from '../../assets/images/newsbtc.jpg'
// import Yahoo from '../../assets/images/yahoo.png'
// import Bitcoinist from '../../assets/images/bitcoinist.jpeg'
import Certik from '../../assets/images/certik.png'
import Peckshield from '../../assets/images/peckshield.png'
import Consilium from '../../assets/images/consilium.png'
// import BitcoinCom from '../../assets/images/bitcoincom.png'
import Carousel from '../../components/Slideshow'
import SlideOne from '../../components/Slideshow/carouselSlides/SlideOne'
import SlideTwo from '../../components/Slideshow/carouselSlides/SlideTwo'
import SlideThree from '../../components/Slideshow/carouselSlides/SlideThree'
import SlideFour from '../../components/Slideshow/carouselSlides/SlideFour'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  padding-top: 25px;
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
    max-width: 100px;
    justify-items: center;
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

const StyledNavWorking = styled.nav`
  align-items: center;
  display: flex;
  -webkit-align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        justify-content: space-evenly;
  `}
`

const Item = styled.div`
  display: grid;
  justify-items: center;
  width: 70px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      width 50px;
  `}
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

const TextTitleMobile = styled.div`
  font-size: 50px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    text-align: center;
    font-size: 35px;
  `}
`

const TextSubMobile = styled.div`
  font-size: 25px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    text-align: center;
    font-size: 20px;
  `}
`

const TextName = styled.text`
  font-size: 20px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 10px
  `}
`

const SubTitleText = styled.text`
  font-size: 14px;
  margin-bottom: 16px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 8px;
    margin-bottom: 0px;
  `}
`

const ImgItem = styled.div`
  width: 150px;
  border-radius: 200px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: 70px;
    border-radius: 200px;
  `}
`

const ImgIcon = styled.div`
  height: 37px;
  width: 37px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: 15px;
    margin-top: 8px;
  `}
`

export default function About() {
  return (
    <PageWrapper gap="lg" justify="center">
      <Whitelist />
      <TextTitleMobile>
        <TYPE.black fontWeight={600}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hi. We're DeFi Yield Protocol.
        </TYPE.black>
      </TextTitleMobile>
      <TextSubMobile>
        <TYPE.black fontWeight={400}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're on a quest to create a unique Decentralized experience
        </TYPE.black>
      </TextSubMobile>
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
              <TYPE.black fontWeight={600} fontSize={35} textAlign={'center'}>
                What We Do
              </TYPE.black>
              <RowBetween />
              <TYPE.black
                fontWeight={400}
                marginTop={10}
                textAlign={'center'}
                maxWidth={800}
                style={{ justifySelf: 'center' }}
              >
                DeFi Yield protocol (DYP) is changing the way you earn through liquidity on Ethereum smart contract. The
                argument against DeFi is that whales have the power to control the network. DeFi Yield protocol (DYP)
                prevents the whale advantage in DeFi. DYP anti-manipulation feature ensures that all pool rewards are
                automatically converted from DYP to ETH at 00:00 UTC, and the system automatically distributes the
                rewards to the liquidity providers. This feature is excellent because the network’s liquidity will be
                fair to all participants; no whale will be able to manipulate the price of DYP to their advantage.
              </TYPE.black>
            </AutoColumn>
          </TopSection>
        </AutoColumn>
      </TopSection>
      <TopSection gap="md">
        <AutoColumn gap="md" style={{ position: 'relative' }}>
          <RowBetween />
        </AutoColumn>
      </TopSection>
      <TYPE.black fontWeight={600} fontSize={35} textAlign={'center'}>
        Our Leadership Team
      </TYPE.black>
      <RowBetween />
      <TopSection gap="md">
        <AutoColumn gap="md" style={{ position: 'relative' }}>
          <TeamStyle>
            <div>
              <TeamRow>
                <ImgItem>
                  <img src={Michael} style={{ borderRadius: '200px', maxWidth: '100%' }} alt={'logo'} />
                </ImgItem>
                <TextName>Michael Nikolas</TextName>
                <SubTitleText>CEO & Product Manager</SubTitleText>
                <Justify>
                  <ExternalLink style={{ color: 'black' }} href="https://twitter.com/m_BMN_" target="_blank">
                    <ImgIcon>
                      <img src={TwitterSvg} alt="logo" width={'100%'} />
                    </ImgIcon>
                  </ExternalLink>
                  <Bio />
                </Justify>
              </TeamRow>
            </div>
            <div>
              <TeamRow>
                <ImgItem>
                  <img src={Ion} style={{ borderRadius: '200px', maxWidth: '100%' }} alt={'logo'} />
                </ImgItem>
                <TextName>Razvan Ion</TextName>
                <SubTitleText>Chief Technical Officer</SubTitleText>
                <Justify>
                  <ExternalLink style={{ color: 'black' }} href="https://www.linkedin.com/in/razvan-ion-b455ba95/">
                    <ImgIcon>
                      <img src={LinkedinSvg} alt="" width={'100%'} />
                    </ImgIcon>
                  </ExternalLink>
                  <Bio5 />
                </Justify>
              </TeamRow>
            </div>
            <div>
              <TeamRow>
                <ImgItem>
                  <img src={Tek} style={{ borderRadius: '200px', maxWidth: '100%' }} alt={'logo'} />
                </ImgItem>
                <TextName>Teki Kolaneci</TextName>
                <SubTitleText>Digital Strategy Manager</SubTitleText>
                <Justify>
                  <ExternalLink style={{ color: 'black' }} href="https://www.linkedin.com/in/teki-kolaneci">
                    <ImgIcon>
                      <img src={LinkedinSvg} alt="" width={'100%'} />
                    </ImgIcon>
                  </ExternalLink>
                  <Bio4 />
                </Justify>
              </TeamRow>
            </div>
          </TeamStyle>
          <RowBetween />
          <TeamStyle>
            <div>
              <TeamRow>
                <ImgItem>
                  <img src={Const} style={{ borderRadius: '200px', maxWidth: '100%' }} alt={'logo'} />
                </ImgItem>
                <TextName>Constantin Bogdan</TextName>
                <SubTitleText>Marketing Manager</SubTitleText>
                <Justify>
                  <ExternalLink
                    style={{ color: 'black' }}
                    href="https://www.linkedin.com/in/bogdan-constantin-1105b7201/"
                  >
                    <ImgIcon>
                      <img src={LinkedinSvg} alt="" width={'100%'} />
                    </ImgIcon>
                  </ExternalLink>
                  <Bio6 />
                </Justify>
              </TeamRow>
            </div>
            <div>
              <TeamRow>
                <ImgItem>
                  <img src={Gino} style={{ borderRadius: '200px', maxWidth: '100%' }} alt={'logo'} />
                </ImgItem>
                <TextName>Gino Vizint</TextName>
                <SubTitleText>Chief Ecosystem Officer</SubTitleText>
                <Justify>
                  <ExternalLink style={{ color: 'black' }} href="https://github.com/gianviz">
                    <ImgIcon>
                      <img src={GithubSvg} alt="" width={'100%'} />
                    </ImgIcon>
                  </ExternalLink>
                  <Bio3 />
                </Justify>
              </TeamRow>
            </div>
            <div>
              <TeamRow>
                <ImgItem>
                  <img src={Daniel} style={{ borderRadius: '200px', maxWidth: '100%' }} alt={'logo'} />
                </ImgItem>
                <TextName>Daniel Provak</TextName>
                <SubTitleText>Software Developer</SubTitleText>
                <Justify>
                  <ExternalLink style={{ color: 'black' }} href="https://github.com/doyledyp">
                    <ImgIcon>
                      <img src={GithubSvg} alt="" width={'100%'} />
                    </ImgIcon>
                  </ExternalLink>
                  <Bio2 />
                </Justify>
              </TeamRow>
            </div>
          </TeamStyle>
        </AutoColumn>
      </TopSection>
      <TYPE.black fontWeight={600} fontSize={35} marginTop={25}>
        Working with
      </TYPE.black>
      <RowBetween />
      <RowBetween style={{ maxWidth: '800px' }}>
        <StyledNavWorking>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://peckshield.com"
            target="_blank"
          >
            <Item>
              <img src={Peckshield} style={{ width: '100%' }} alt={'logo'} />
              <TextNews>Peckshield</TextNews>
            </Item>
          </ExternalLink>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://www.blockchainconsilium.com/"
            target="_blank"
          >
            <Item>
              <img src={Consilium} style={{ width: '100%' }} alt={'logo'} />
              <TextNews>Blockchain Consilium</TextNews>
            </Item>
          </ExternalLink>
          <ExternalLink
            style={{ color: 'white', textDecoration: 'underline' }}
            href="https://certik.foundation/"
            target="_blank"
          >
            <Item>
              <img src={Certik} style={{ width: '100%' }} alt={'logo'} />
              <TextNews>Certik Foundation</TextNews>
            </Item>
          </ExternalLink>
        </StyledNavWorking>
      </RowBetween>
      <TYPE.black fontWeight={600} fontSize={35} marginTop={25}>
        Press Highlights
      </TYPE.black>
      <RowBetween />
      <RowBetween>
        <StyledNav>
          <Carousel>
            <SlideOne />
            <SlideTwo />
            <SlideThree />
            <SlideFour />
          </Carousel>
        </StyledNav>
      </RowBetween>
    </PageWrapper>
  )
}
