import React from 'react'
import styled from 'styled-components'

import { ExternalLink, TYPE } from '../../theme'
import { AutoColumn } from '../Column'

//import getFormattedNumber from '../Function/get-formatted-number'
import HeaderSlideshow from '../Slideshow/HeaderSlideshow'
import TextOne from '../Slideshow/headerSlides/TextOne'
import TextTwo from '../Slideshow/headerSlides/TextTwo'
import TextThree from '../Slideshow/headerSlides/TextThree'

const PageWrapper = styled(AutoColumn)`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-self: center;
  margin: auto;
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        display: grid;
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
  padding: 5px;
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
const MenuItemExternalMobile = styled(ExternalLink).attrs({})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: white;
  text-align: center;
  margin-left: 5px;
  border-radius: 12px;
  margin: auto 5px;
  padding: 5px;
  :hover {
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
  display: none;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 10px;
        display: block;
        margin-top: 5px;
  `}
`

const TextFont = styled.div`
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

export default function Whitelist() {
  // // eslint-disable-next-line
  // //@ts-ignore
  // const [tvlFarming, setTvlFarming] = React.useState(0)
  // // eslint-disable-next-line
  // //@ts-ignore
  // tvlFarming === 0 &&
  //   window1
  //     // eslint-disable-next-line
  //     // @ts-ignore
  //     .FarmingTvl()
  //     // eslint-disable-next-line
  //     //@ts-ignore
  //     .then(tvlFarming => setTvlFarming(tvlFarming))
  //     .catch(console.error)
  // // eslint-disable-next-line
  // //@ts-ignore
  // const [tvl, setTvl] = React.useState(0)
  // // eslint-disable-next-line
  // //@ts-ignore
  // tvl === 0 &&
  //   window1
  //     // eslint-disable-next-line
  //     //@ts-ignore
  //     .getCombinedTvlUsd()
  //     // eslint-disable-next-line
  //     //@ts-ignore
  //     .then(tvl => setTvl(tvl))
  //     .catch(console.error)
  // let tvlPoolsTotal = 0
  // // eslint-disable-next-line
  // //@ts-ignore
  // if (window1.the_graph_result.lp_data) {
  //   // eslint-disable-next-line
  //   //@ts-ignore
  //   // eslint-disable-next-line @typescript-eslint/camelcase
  //   tvlPoolsTotal = tvl + tvlFarming
  //   //tvl = tvlPoolsTotal
  // }
  return (
    <WhitelistForm>
      <AutoColumn gap="md">
        <PageWrapper>
          <TYPE.white fontWeight={500} fontSize={25} style={{ margin: 'auto' }}>
            <TextFont>DeFi Yield Protocol staking dApp is live! </TextFont>
          </TYPE.white>
          <MenuItemExternal id={`stake-nav-link`} href={'https://app.dyp.finance/'}>
            JOIN NOW AND START EARNING ETH REWARDS
          </MenuItemExternal>
          <MenuItemExternalMobile id={`stake-nav-link`} href={'https://app.dyp.finance/'}>
            JOIN NOW AND START EARNING ETH REWARDS
          </MenuItemExternalMobile>
        </PageWrapper>
        {/*<TYPE.white fontWeight={400} fontSize={17} style={{ margin: 'auto', textDecoration: 'underline' }}>*/}
        {/*  <TextFont>Total Value Locked: ${getFormattedNumber(tvlPoolsTotal, 2)}</TextFont>*/}
        {/*</TYPE.white>*/}
        <HeaderSlideshow>
          <TextOne />
          <TextTwo />
          <TextThree />
        </HeaderSlideshow>
      </AutoColumn>
    </WhitelistForm>
  )
}
