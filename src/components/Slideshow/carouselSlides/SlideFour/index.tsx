import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../../../theme'
import NewsBTC from '../../../../assets/images/newsbtc.jpg'
import CoinGape from '../../../../assets/images/coingape.jpeg'
import CoinCodex from '../../../../assets/images/coincodex.jpeg'
import Bitcoinist from '../../../../assets/images/bitcoinist.jpeg'
import CoinmarketCap from '../../../../assets/images/coinmarketcap.jpeg'

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

const SlideFour = () => (
  <StyledNav>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://bitcoinist.com/defi-yield-protocol-everything-you-need-to-know-for-2021/"
      target="_blank"
    >
      <Item>
        <img src={Bitcoinist} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>Bitcoinist</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline', borderRadius: '50px' }}
      href="https://coinmarketcap.com/headlines/news/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/"
      target="_blank"
    >
      <Item>
        <img src={CoinmarketCap} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
        <TextNews>CoinMarketCap</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://coingape.com/how-to-use-dyp-to-earn-big-defi-rois/"
      target="_blank"
    >
      <Item>
        <img src={CoinGape} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
        <TextNews>CoinGape</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://coincodex.com/article/10519/defi-yield-protocol-dyp-reaches-63-million-in-total-value-locked/"
      target="_blank"
    >
      <Item>
        <img src={CoinCodex} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>CoinCodex</TextNews>
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
  </StyledNav>
)

export default SlideFour
