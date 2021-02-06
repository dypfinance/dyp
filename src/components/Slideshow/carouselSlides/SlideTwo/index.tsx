import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../../../theme'
import CoinTelegraph from '../../../../assets/images/cointelegraph.png'
import NewsBTC from '../../../../assets/images/newsbtc.jpg'
import BitcoinCom from '../../../../assets/images/bitcoincom.png'
import Yahoo from '../../../../assets/images/yahoo.png'
import Bitcoinist from '../../../../assets/images/bitcoinist.jpeg'

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

const SlideTwo = () => (
  <StyledNav>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://cointelegraph.com/press-releases/defi-yield-protocol-your-new-defi-gem-with-anti-manipulation-feature"
      target="_blank"
    >
      <Item>
        <img src={CoinTelegraph} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>COINTELEGRAPH</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/"
      target="_blank"
    >
      <Item>
        <img src={NewsBTC} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>NEWSBTC</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/"
      target="_blank"
    >
      <Item>
        <img src={BitcoinCom} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>Bitcoin.com</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://finance.yahoo.com/news/defi-yield-protocol-dyp-staking-163000220.html"
      target="_blank"
    >
      <Item>
        <img src={Yahoo} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>Yahoo Finance</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/"
      target="_blank"
    >
      <Item>
        <img src={Bitcoinist} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>Bitcoinist</TextNews>
      </Item>
    </ExternalLink>
  </StyledNav>
)

export default SlideTwo
