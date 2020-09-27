import React from 'react'
import styled from 'styled-components'

import Github from '../../assets/svg/github.svg'
import Medium from '../../assets/svg/medium.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Discord from '../../assets/svg/discord.svg'
import Telegram from '../../assets/svg/telegram.svg'
import Ann from '../../assets/svg/ann.png'
import Email from '../../assets/svg/email.svg'
import Forum from '../../assets/svg/forum.svg'

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterInner>
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
    </StyledFooterInner>
    <StyledFooterInner>
      <StyledNav>
        <StyledSpace></StyledSpace>
      </StyledNav>
    </StyledFooterInner>
    <StyledFooterInner>
      <StyledNav>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Github} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Medium} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Twitter} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Discord} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Telegram} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Ann} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Forum} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/sushiswap">
          <img width={'24px'} src={Email} alt="logo" />
        </StyledLink>
      </StyledNav>
    </StyledFooterInner>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: 20px;
  max-width: 1200px;
  width: 100%;
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  -webkit-align-items: center;
`

const StyledLink = styled.a`
  color: grey;
  margin: 5px 15px;
  -webkit-align-items: center;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`

const StyledSpace = styled.div`
  width: 100px;
  margin: 8px auto;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0);
`

export default Footer
