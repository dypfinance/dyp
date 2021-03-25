import React, { useRef } from 'react'
import styled from 'styled-components'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
//import { NavLink } from 'react-router-dom'

import { ExternalLink } from '../../theme'
import { useTranslation } from 'react-i18next'

// const StyledMenuIcon = styled(MenuIcon)`
//   fill: currentColor;
//   width: 1em;
//   height: 1em;
//   display: inline-block;
//   font-size: 1.5rem;
//   transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//   flex-shrink: 0;
//   -moz-user-select: none;
// `

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
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      display: block;
`}
`

// const MenuItem = styled(NavLink).attrs({})`
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

const MenuItemExternal = styled(ExternalLink).attrs({})`
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

export default function Menu() {
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENUDYP)
  const toggle = useToggleModal(ApplicationModal.MENUDYP)
  useOnClickOutside(node, open ? toggle : undefined)
  const { t } = useTranslation()

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>{t('Get DYP')}</StyledMenuButton>

      {open && (
        <MenuFlyout>
          <MenuItemExternal
            id={`getdyp-uniswap-nav-link`}
            href={'https://app.uniswap.org/#/swap?inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'}
          >
            Uniswap
          </MenuItemExternal>
          <MenuItemExternal id={`getdyp-kucoin-nav-link`} href={'https://trade.kucoin.com/DYP-USDT'}>
            KuCoin
          </MenuItemExternal>
          <MenuItemExternal id={`getdyp-gateio-nav-link`} href={'https://www.gate.io/trade/DYP_USDT'}>
            Gate.io
          </MenuItemExternal>
          <MenuItemExternal id={`getdyp-fiat-nav-link`} href={'https://www.mycointainer.com/dashboard/invest/dyp/'}>
            Fiat
          </MenuItemExternal>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
