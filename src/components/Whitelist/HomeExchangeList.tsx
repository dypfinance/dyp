import React from 'react'
import styled from 'styled-components'

import { ExternalLink, TYPE } from '../../theme'
import { AutoColumn } from '../Column'
import Kucoin from '../../assets/images/kucoin.png'

const PageWrapper = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-self: center;
  margin: auto;
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        display: none;
  `}
`

const WhitelistForm = styled.div`
  // Header Color
  background-color: red;
  //display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  margin-bottom: 50px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
        display: none;
  `}
`

const MenuItemExternal = styled(ExternalLink).attrs({})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: white;
  text-align: center;
  margin-left: 5px;
  border-radius: 12px;
  margin: auto 5px;
  padding: 2px;
  max-width: 100px;
  :hover {
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 10px;
        display: none;
  `}
`

const TextFont = styled.div`
  margin-top: 4px;
  margin-left: 5px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 15px;
        text-align: center;
  `}
`

// const TextFont2 = styled.div`
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//         font-size: 13px;
//   `}
// `
//const window1 = window

export default function HomeExchangeList() {
  return (
    <WhitelistForm>
      <AutoColumn gap="md">
        <PageWrapper>
          <TYPE.white fontWeight={500} fontSize={18} style={{ display: 'flex' }}>
            <img src={Kucoin} width={30} alt={'logo'} />
            <TextFont>DeFi Yield Protocol (DYP) GETS LISTED ON KuCoin</TextFont>
          </TYPE.white>
          <MenuItemExternal id={`stake-nav-link`} href={'https://app.dyp.finance/'}>
            Trade now!
          </MenuItemExternal>
        </PageWrapper>
        {/*<TYPE.white fontWeight={400} fontSize={17} style={{ margin: 'auto', textDecoration: 'underline' }}>*/}
        {/*  <TextFont>Total Value Locked: ${getFormattedNumber(tvlPoolsTotal, 2)}</TextFont>*/}
        {/*</TYPE.white>*/}
      </AutoColumn>
    </WhitelistForm>
  )
}
