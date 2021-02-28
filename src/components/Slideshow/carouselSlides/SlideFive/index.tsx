import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../../../theme'
import HackerNoon from '../../../../assets/images/hackernoon.jpeg'
import BtcManager from '../../../../assets/images/btcmanager.png'
import BitcoinCom from '../../../../assets/images/bitcoincom.png'
import CryptoCompare from '../../../../assets/images/cryptocompare.png'
import Blockonomi from '../../../../assets/images/blokonomi.jpeg'

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

const SlideFive = () => (
  <StyledNav>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://news.bitcoin.com/earn-yield-farming-rewards-with-defi-yield-protocol-dyp/"
      target="_blank"
    >
      <Item>
        <img src={BitcoinCom} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>Bitcoin.com</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://hackernoon.com/hedging-against-market-manipulation-with-defi-mg2q33q1"
      target="_blank"
    >
      <Item>
        <img src={HackerNoon} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
        <TextNews>HackerNoon</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://btcmanager.com/defi-yield-protocol-dyp-180k-eth-distributed-liquidity-providers"
      target="_blank"
    >
      <Item>
        <img src={BtcManager} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>BTCMANAGER</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://www.cryptocompare.com/coins/guides/how-to-maximize-security-while-yield-farming-on-defi-protocols/"
      target="_blank"
    >
      <Item>
        <img src={CryptoCompare} style={{ width: '50px' }} alt={'logo'} />
        <TextNews>CryptoCompare</TextNews>
      </Item>
    </ExternalLink>
    <ExternalLink
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://blockonomi.com/defi-yield-protocol-ecosystem/"
      target="_blank"
    >
      <Item>
        <img src={Blockonomi} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
        <TextNews>Blockonomi</TextNews>
      </Item>
    </ExternalLink>
  </StyledNav>
)

export default SlideFive
