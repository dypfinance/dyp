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

const StyledFooter = styled.footer`
  background-color: #1e272f;
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
  justify-content: center;
  flex-wrap: wrap;
`

const StyledLink = styled.a`
  color: grey;
  margin: 30px 15px;
  -webkit-align-items: center;
  text-decoration: none;
  &:hover {
    color: grey;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        margin: 5px 12px;
  `}
`
// const StyledLinkS = styled.div`
//   color: grey;
//   margin: 30px 15px;
//   -webkit-align-items: center;
//   text-decoration: none;
//   &:hover {
//     color: grey;
//   }
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//         margin: 5px 12px;
//   `}
// `

// const StyledSpace = styled.div`
//   width: 100px;
//   margin: 5px auto;
//   max-width: 100%;
//   background-color: rgba(0, 0, 0, 0);
// `

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterInner>
      <StyledNav>
        <StyledLink target="_blank" href="https://etherscan.io/address/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17#code">
          Token Contract
        </StyledLink>
        <StyledLink target="_blank" href="https://coinmarketcap.com/currencies/defi-yield-protocol/">
          CoinMarketCap
        </StyledLink>
        <StyledLink target="_blank" href="https://www.coingecko.com/en/coins/defi-yield-protocol/">
          CoinGecko
        </StyledLink>
        <StyledLink
          target="_blank"
          href="https://app.uniswap.org/#/swap?inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
        >
          Uniswap DYP-ETH
        </StyledLink>
        <StyledLink target="_blank" href="https://github.com/dypfinance/staking-governance-security-audits">
          Audit
        </StyledLink>
      </StyledNav>
    </StyledFooterInner>
    <StyledFooterInner>
      <StyledNav>
        <StyledLink target="_blank" href="https://github.com/dypfinance">
          <img width={'24px'} src={Github} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://medium.com/@dypfinance">
          <img width={'24px'} src={Medium} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/dypfinance">
          <img width={'24px'} src={Twitter} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://t.co/N5rPQ12obJ?amp=1">
          <img width={'24px'} src={Discord} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://t.me/dypfinance">
          <img width={'24px'} src={Telegram} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://t.me/dypannouncements">
          <img width={'24px'} src={Ann} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="https://gov.dyp.finance/">
          <img width={'24px'} src={Forum} alt="logo" />
        </StyledLink>
        <StyledLink target="_blank" href="mailto:contact@dyp.finance">
          <img width={'24px'} src={Email} alt="logo" />
        </StyledLink>
      </StyledNav>
    </StyledFooterInner>
  </StyledFooter>
)

export default Footer
