import React, { useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
//import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { NavLink } from 'react-router-dom'

//import { ExternalLink } from '../../theme'
//import { ButtonPrimary } from '../Button'

const StyledMenuIcon = styled(MenuIcon)`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  -moz-user-select: none;
`

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 10rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgb(0, 0, 0), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    // top: -17.25rem;
  `};
`

const MenuItem = styled(NavLink).attrs({})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  text-decoration: none;
  :hover {
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

const ButtonGetDyp = styled.button`
  flex: 1;
  color: ${({ theme }) => theme.text2};
  text-decoration: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin: 0.5rem;
  padding: 0;
  background-color: #edeef2;
  font-size: 1rem;
  font-weight: 400;
  justify-content: flex-start;
  display: flex;
  :hover {
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

// const MenuItemExternal = styled(ExternalLink).attrs({})`
//   flex: 1;
//   padding: 0.5rem 0.5rem;
//   color: ${({ theme }) => theme.text2};
//   text-decoration: none;
//   :hover {
//     color: red;
//     cursor: pointer;
//     text-decoration: none;
//   }
//   > svg {
//     margin-right: 8px;
//   }
// `
// const HeaderElementWrap = styled.div`
//   display: none;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     display: flex;
//     align-items: center;
// `}
// `

export default function Menu() {
  //const { account } = useActiveWeb3React()

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)
  const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <StyledMenuIcon />
      </StyledMenuButton>

      {open && (
        <MenuFlyout>
          <MenuItem id={`home-nav-link`} to={'/home'}>
            Home
          </MenuItem>
          <ButtonGetDyp onClick={openClaimModal}>Get DYP</ButtonGetDyp>
          <MenuItem id={`earn-nav-link`} to={'/earn'}>
            Stake
          </MenuItem>
          <MenuItem id={`earn-bridge-link`} to={'/bridge'}>
            Bridge
          </MenuItem>
          <MenuItem id={`earn-nav-link`} to={'/farm'}>
            Farm
          </MenuItem>
          <MenuItem id={`mining-nav-link`} to={'/mining'}>
            Pool
          </MenuItem>
          <MenuItem id={`vault-nav-link`} to={'/vault'}>
            Earn
          </MenuItem>
          <MenuItem id={`vote-nav-link`} to={'/gov'}>
            Vote
          </MenuItem>
          <MenuItem id={`roadmap-nav-link`} to={'/roadmap'}>
            Roadmap
          </MenuItem>
          <MenuItem id={`tokenomics-nav-link`} to={'/tokenomics'}>
            Tokenomics
          </MenuItem>
          {/*<MenuItemExternal*/}
          {/*  id={`getdyp-nav-link`}*/}
          {/*  href={'https://app.uniswap.org/#/swap?inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'}*/}
          {/*>*/}
          {/*  Get DYP*/}
          {/*</MenuItemExternal>*/}
          <MenuItem id={`refferal-nav-link`} to={'/refferal'}>
            Referral
          </MenuItem>
          <MenuItem id={`about-nav-link`} to={'/about'}>
            About
          </MenuItem>
          <MenuItem id={`audit-nav-link`} to={'/audit'}>
            Audit
          </MenuItem>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
