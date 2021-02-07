import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../../../theme'
import TechBullion from '../../../../assets/images/techbullion.jpeg'
import HackerNoon from '../../../../assets/images/hackernoon.jpeg'
import Utoday from '../../../../assets/images/utoday.jpeg'
import ApNews from '../../../../assets/images/apnews.png'
import BtcManager from '../../../../assets/images/btcmanager.png'

// const SContainer = styled.div`
//   align-items: center;
//   display: flex;
// `

// const STextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 5px 10px;
// `

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

const SlideThree = () => (
  <StyledNav>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://techbullion.com/dyp-hits-63-million-tvl-within-its-staking-protocol/"
      target="_blank"
    >
      <Item>
        <img src={TechBullion} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
        <TextNews>TechBullion</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs"
      target="_blank"
    >
      <Item>
        <img src={HackerNoon} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
        <TextNews>HackerNoon</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://u.today/defi-yield-protocol-launches-staking-and-governance-dapp"
      target="_blank"
    >
      <Item>
        <img src={Utoday} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>U.Today</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://apnews.com/press-release/accesswire/business-prices-deflation-economy-54076ee83d21025c63d8347c8accc1e2"
      target="_blank"
    >
      <Item>
        <img src={ApNews} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>AP News</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://btcmanager.com/defi-yield-protocol-dyp/"
      target="_blank"
    >
      <Item>
        <img src={BtcManager} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>BTCMANAGER</TextNews>
      </Item>
    </ExternalLink>
  </StyledNav>
)

export default SlideThree
