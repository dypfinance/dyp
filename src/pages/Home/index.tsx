import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import Whitelist from '../../components/Whitelist'
import { NavLink } from 'react-router-dom'

// import CoinTelegraph from '../../assets/images/cointelegraph.png'
// import NewsBTC from '../../assets/images/newsbtc.jpg'
// import Yahoo from '../../assets/images/yahoo.png'
// import Bitcoinist from '../../assets/images/bitcoinist.jpeg'
// import BitcoinCom from '../../assets/images/bitcoincom.png'
import Carousel from '../../components/Slideshow'
import SlideOne from '../../components/Slideshow/carouselSlides/SlideOne'
import SlideTwo from '../../components/Slideshow/carouselSlides/SlideTwo'
import SlideThree from '../../components/Slideshow/carouselSlides/SlideThree'
import SlideFour from '../../components/Slideshow/carouselSlides/SlideFour'
import SlideFive from '../../components/Slideshow/carouselSlides/SlideFive'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  justify-self: center;
`

const TypeFontTitle = styled.div`
  font-weight: 600;
  font-size: 40px;
  // font-size: 35px;
  // margin: 0px 0px 1rem;
  // pointer-events: none;
  // overflow-wrap: normal;
  // max-width: 800px;
  // letter-spacing: -0.05em;
  // font-family: 'Inferi Light', 'Times New Roman', serif;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-weight: 400;
    font-size: 35px;
`};
`

const TypeFontSub = styled.div`
  font-weight: 400;
  font-size: 23px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-weight: 400;
    font-size: 15px;
`};
`

// const PoolSection = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   column-gap: 10px;
//   row-gap: 15px;
//   width: 100%;
//   justify-self: center;
// `

const PageWrapperLinks = styled(AutoColumn)`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-self: center;
  margin: auto;
`

const WhitelistForm = styled.div`
  // Header Color
  background-color: red;
  //display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  z-index: 2;
  margin-bottom: 50px;
  border-radius: 12px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    //padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
  `}
`

const MenuItemExternal = styled(NavLink).attrs({})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: white;
  text-align: center;
  margin-left: 5px;
  border-radius: 12px;
  margin: auto 5px;
  padding: 5px;
  :hover {
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 10px;
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

// const TextNews = styled.div`
//   font-size: 15px;
//   font-weight: 500;
//   color: black;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//         font-size: 10px;
//         font-weight: 500;
//   `}
// `

// const Item = styled.div`
//   display: grid;
//   justify-items: center;
// `

export default function Home() {
  // const { chainId } = useActiveWeb3React()
  // const stakingInfos = useStakingInfo()
  //
  // const DataRow = styled(RowBetween)`
  //   ${({ theme }) => theme.mediaWidth.upToSmall`
  //   flex-direction: column;
  // `};
  // `
  //
  // const stakingRewardsExist = Boolean(typeof chainId === 'number' && (STAKING_REWARDS_INFO[chainId]?.length ?? 0) > 0)
  return (
    <PageWrapper gap="lg" justify="center">
      <Whitelist />
      <TopSection gap="md">
        <AutoColumn gap="md">
          <RowBetween>
            <TYPE.black>
              <TypeFontTitle>
                DeFi Yield Farming with Automated Vaults, combined with Ethereum Mining Pool
              </TypeFontTitle>
            </TYPE.black>
          </RowBetween>
          <RowBetween></RowBetween>
          <RowBetween></RowBetween>
          <RowBetween>
            <TYPE.black>
              <TypeFontSub>
                The DeFi Yield Protocol is developing a unique platform that allows anyone to provide liquidity and to
                be rewarded for the first time with Ethereum. At the same time, the platform maintains both token price
                stability as well as secure and simplified DeFi for end users by integrating a DYP anti-manipulation
                feature
              </TypeFontSub>
            </TYPE.black>
          </RowBetween>
          <RowBetween></RowBetween>
          <RowBetween>
            <WhitelistForm>
              <PageWrapperLinks>
                <MenuItemExternal id={`stake-nav-link`} to={'/earn'}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Let's start earning DYP!
                </MenuItemExternal>
                <MenuItemExternal id={`stake-nav-link`} to={'/feature'}>
                  DYP Anti Manipulation
                </MenuItemExternal>
                <MenuItemExternal id={`stake-nav-link`} to={'/mining'}>
                  Ethereum Mining Pool
                </MenuItemExternal>
              </PageWrapperLinks>
            </WhitelistForm>
          </RowBetween>
          {/*<RowBetween>*/}
          {/*  <StyledNav>*/}
          {/*    <ExternalLink*/}
          {/*      style={{ color: 'white', textDecoration: 'underline' }}*/}
          {/*      href="https://cointelegraph.com/press-releases/defi-yield-protocol-your-new-defi-gem-with-anti-manipulation-feature"*/}
          {/*      target="_blank"*/}
          {/*    >*/}
          {/*      <Item>*/}
          {/*        <img src={CoinTelegraph} style={{ width: '50px' }} alt={'logo'} />*/}
          {/*        <TextNews>COINTELEGRAPH</TextNews>*/}
          {/*      </Item>*/}
          {/*    </ExternalLink>*/}
          {/*    <ExternalLink*/}
          {/*      style={{ color: 'white', textDecoration: 'underline' }}*/}
          {/*      href="https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/"*/}
          {/*      target="_blank"*/}
          {/*    >*/}
          {/*      <Item>*/}
          {/*        <img src={NewsBTC} style={{ width: '50px' }} alt={'logo'} />*/}
          {/*        <TextNews>NEWSBTC</TextNews>*/}
          {/*      </Item>*/}
          {/*    </ExternalLink>*/}
          {/*    <ExternalLink*/}
          {/*      style={{ color: 'white', textDecoration: 'underline' }}*/}
          {/*      href="https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/"*/}
          {/*      target="_blank"*/}
          {/*    >*/}
          {/*      <Item>*/}
          {/*        <img src={BitcoinCom} style={{ width: '50px' }} alt={'logo'} />*/}
          {/*        <TextNews>Bitcoin.com</TextNews>*/}
          {/*      </Item>*/}
          {/*    </ExternalLink>*/}
          {/*    <ExternalLink*/}
          {/*      style={{ color: 'white', textDecoration: 'underline' }}*/}
          {/*      href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-staking-163000220.html"*/}
          {/*      target="_blank"*/}
          {/*    >*/}
          {/*      <Item>*/}
          {/*        <img src={Yahoo} style={{ width: '50px' }} alt={'logo'} />*/}
          {/*        <TextNews>Yahoo Finance</TextNews>*/}
          {/*      </Item>*/}
          {/*    </ExternalLink>*/}
          {/*    <ExternalLink*/}
          {/*      style={{ color: 'white', textDecoration: 'underline' }}*/}
          {/*      href="https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/"*/}
          {/*      target="_blank"*/}
          {/*    >*/}
          {/*      <Item>*/}
          {/*        <img src={Bitcoinist} style={{ width: '50px' }} alt={'logo'} />*/}
          {/*        <TextNews>Bitcoinist</TextNews>*/}
          {/*      </Item>*/}
          {/*    </ExternalLink>*/}
          {/*  </StyledNav>*/}
          {/*</RowBetween>*/}
          <RowBetween>
            <StyledNav>
              <Carousel>
                <SlideOne />
                <SlideTwo />
                <SlideThree />
                <SlideFour />
                <SlideFive />
              </Carousel>
            </StyledNav>
          </RowBetween>
          {/*<ExternalLink*/}
          {/*  style={{ color: 'black', textDecoration: 'underline' }}*/}
          {/*  href="https://uniswap.org/blog/uni/"*/}
          {/*  target="_blank"*/}
          {/*>*/}
          {/*  <TYPE.black fontSize={14}>Read more about UNI</TYPE.black>*/}
          {/*</ExternalLink>*/}
        </AutoColumn>
      </TopSection>

      {/*<AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>*/}
      {/*  <DataRow style={{ alignItems: 'baseline' }}>*/}
      {/*    <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Participating pools</TYPE.mediumHeader>*/}
      {/*  </DataRow>*/}

      {/*  <PoolSection>*/}
      {/*    {stakingRewardsExist && stakingInfos?.length === 0 ? (*/}
      {/*      <Loader style={{ margin: 'auto' }} />*/}
      {/*    ) : !stakingRewardsExist ? (*/}
      {/*      'No active rewards'*/}
      {/*    ) : (*/}
      {/*      stakingInfos?.map(stakingInfo => {*/}
      {/*        // need to sort by added liquidity here*/}
      {/*        return <PoolCard key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} />*/}
      {/*      })*/}
      {/*    )}*/}
      {/*  </PoolSection>*/}
      {/*</AutoColumn>*/}
    </PageWrapper>
  )
}
