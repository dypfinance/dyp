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
import Linkedin from '../../assets/images/linkedin.png'
import { useToggleModal } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/actions'
import { NavLink } from 'react-router-dom'

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
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%
  `};
`

const StyledFooterInnerCommunity = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: 20px;
  max-width: 1200px;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
  `};
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  -webkit-align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%
    max-width: 100%
    padding-left: 24px;
    margin: 0;
  `};
`

const StyledNavCommunity = styled.nav`
  align-items: center;
  display: flex;
  -webkit-align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: flex;
    float: left;
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding-left: 37px;
    padding-top: 15px;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
  `};
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

const StyledLinkCommunity = styled.a`
  color: grey;
  margin: 30px 15px;
  -webkit-align-items: center;
  text-decoration: none;
  &:hover {
    color: grey;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin: 0 32px 24px 0;
  `}
`

const StyledNavLink = styled(NavLink)`
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

const ButtonGetDyp = styled.button`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
    color: grey;
    margin: 20px 5px 5px 12px;
    -webkit-align-items: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: none;
    background: #1e272f;
    font-size: 16px;
    padding: 0;
  `};
`

const StyledLinkS = styled.div`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
    color: grey;
    margin: 30px 15px;
    -webkit-align-items: center;
    text-decoration: none;
    &:hover {
      color: grey;
    }
    margin: 5px 12px;
  `}
`

const HideAuditMobile = styled.div`
  display: block;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `}
`

const ShowAuditMobile = styled.div`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
  `}
`

const CommunityIcon = styled.div`
  width: 24px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: 13.5px;
    height: auto;
  `}
`

// const StyledSpace = styled.div`
//   width: 100px;
//   margin: 5px auto;
//   max-width: 100%;
//   background-color: rgba(0, 0, 0, 0);
// `

export default function Footer() {
  const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  return (
    <StyledFooter>
      <StyledFooterInner>
        <StyledNav>
          <ButtonGetDyp onClick={openClaimModal}>Get DYP</ButtonGetDyp>
          <ShowAuditMobile>
            <StyledNavLink id={`about-nav-link`} to={'/audit'}>
              Audit
            </StyledNavLink>
          </ShowAuditMobile>
          <StyledLink
            target="_blank"
            href="https://etherscan.io/address/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17#code"
          >
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
          {/*<StyledLink href="/audit"></StyledLink>*/}
          <HideAuditMobile>
            <StyledNavLink id={`about-nav-link`} to={'/audit'}>
              Audit
            </StyledNavLink>
          </HideAuditMobile>
          <StyledLinkS>Community</StyledLinkS>
        </StyledNav>
      </StyledFooterInner>
      <StyledFooterInnerCommunity>
        <StyledNavCommunity>
          <StyledLinkCommunity target="_blank" href="https://github.com/dypfinance">
            <CommunityIcon>
              <img src={Github} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="https://medium.com/@dypfinance">
            <CommunityIcon>
              <img src={Medium} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="https://www.linkedin.com/company/defi-yield-protocol">
            <CommunityIcon>
              <img width={'100%'} src={Linkedin} alt="logo" style={{ backgroundColor: 'white', borderRadius: '2px' }} />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="https://twitter.com/dypfinance">
            <CommunityIcon>
              <img src={Twitter} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="https://t.co/N5rPQ12obJ?amp=1">
            <CommunityIcon>
              <img src={Discord} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="https://t.me/dypfinance">
            <CommunityIcon>
              <img src={Telegram} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="https://t.me/dypannouncements">
            <CommunityIcon>
              <img width={'100%'} src={Ann} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="https://gov.dyp.finance/">
            <CommunityIcon>
              <img src={Forum} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
          <StyledLinkCommunity target="_blank" href="mailto:contact@dyp.finance">
            <CommunityIcon>
              <img src={Email} alt="logo" />
            </CommunityIcon>
          </StyledLinkCommunity>
        </StyledNavCommunity>
      </StyledFooterInnerCommunity>
    </StyledFooter>
  )
}
