import React from 'react'
//import styled from 'styled-components'
//import { ExternalLink } from '../../../../theme'
import { TYPE } from '../../../../theme'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const TextFont = styled.div`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 13px;
        text-align: center;
  `}
`

const SContainer = styled.div`
  max-width: 100%;
  justify-content: center;
  display: flex;
`

const MenuItemExternal = styled(NavLink).attrs({})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: white;
  text-align: center;
  margin-left: 5px;
  border-radius: 8px;
  margin: auto 5px;
  padding: 2px;
  font-size: 14px;
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
  `}
`

// const STextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 5px 10px;
// `

// const StyledNav = styled.nav`
//   align-items: center;
//   display: flex;
//   -webkit-align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   width: 100%;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//         justify-content: space-between;
//   `}
// `

// const Item = styled.div`
//   display: grid;
//   justify-items: center;
// `
//
// const TextNews = styled.div`
//   font-size: 15px;
//   font-weight: 500;
//   color: black;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//         font-size: 10px;
//         font-weight: 500;
//   `}
// `

export default function TextFour() {
  return (
    <SContainer>
      <TYPE.white fontWeight={500} fontSize={17} style={{ margin: 'auto' }}>
        <TextFont>
          DeFi Yield Protocol Buying Competition: $25,000 in USDT to be won!
          <MenuItemExternal id={`stake-nav-link`} to={'/competition'}>
            JOIN NOW
          </MenuItemExternal>
        </TextFont>
      </TYPE.white>
    </SContainer>
  )
}
