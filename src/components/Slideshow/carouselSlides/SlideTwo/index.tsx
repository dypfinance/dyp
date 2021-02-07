import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../../../theme'
import Utoday from '../../../../assets/images/utoday.jpeg'
import TechBullion from '../../../../assets/images/techbullion.jpeg'
import CoinCodex from '../../../../assets/images/coincodex.jpeg'
import CryptoCompare from '../../../../assets/images/cryptocompare.png'
import BitcoinInsider from '../../../../assets/images/bitcoininsider.png'

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
      href="https://u.today/dypfinance-users-earn-more-than-38-million-worth-of-ethereum-eht-rewards"
      target="_blank"
    >
      <Item>
        <img src={Utoday} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>U.Today</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://techbullion.com/dyp-finance-stake-defi-tokens-and-get-paid-in-eth"
      target="_blank"
    >
      <Item>
        <img src={TechBullion} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
        <TextNews>TechBullion</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://coincodex.com/article/10261/defi-yield-protocol-anti-manipulation-farm-yielding-platform/"
      target="_blank"
    >
      <Item>
        <img src={CoinCodex} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>CoinCodex</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://www.cryptocompare.com/coins/guides/defi-yield-protocol-liquidity-providers-earn-25-000-in-eth-per-day-staking-dyp/"
      target="_blank"
    >
      <Item>
        <img src={CryptoCompare} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>CryptoCompare</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://www.bitcoininsider.org/article/100387/defi-yield-protocol-dyp-provides-new-level-transparency-market"
      target="_blank"
    >
      <Item>
        <img src={BitcoinInsider} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>BitcoinInsider</TextNews>
      </Item>
    </ExternalLink>
  </StyledNav>
)

export default SlideTwo
