import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href="https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd#code">
        Token Contract
      </StyledLink>
      <StyledLink target="_blank" href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433">
        CoinMarketCap
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/hJ2p555">
        CoinGecko
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/sushiswap">
        Uniswap DYP-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/sushiswap">
        Audit
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  -webkit-align-items: center;
`

const StyledLink = styled.a`
  color: grey;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-align-items: center;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`

export default Nav
