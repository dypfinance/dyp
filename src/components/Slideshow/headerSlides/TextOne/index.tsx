import React from 'react'
//import styled from 'styled-components'
//import { ExternalLink } from '../../../../theme'
import { TYPE } from '../../../../theme'
import styled from 'styled-components'
import getFormattedNumber from '../../../Function/get-formatted-number'

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

const window1 = window

export default function TextOne() {
  // eslint-disable-next-line
  //@ts-ignore
  const [tvlFarming, setTvlFarming] = React.useState(0)
  // eslint-disable-next-line
  //@ts-ignore
  tvlFarming === 0 &&
    window1
      // eslint-disable-next-line
      // @ts-ignore
      .FarmingTvl()
      // eslint-disable-next-line
      //@ts-ignore
      .then(tvlFarming => setTvlFarming(tvlFarming))
      .catch(console.error)
  // eslint-disable-next-line
  //@ts-ignore
  const [tvl, setTvl] = React.useState(0)
  // eslint-disable-next-line
  //@ts-ignore
  tvl === 0 &&
    window1
      // eslint-disable-next-line
      //@ts-ignore
      .getCombinedTvlUsd()
      // eslint-disable-next-line
      //@ts-ignore
      .then(tvl => setTvl(tvl))
      .catch(console.error)
  let tvlPoolsTotal = 0
  // eslint-disable-next-line
  //@ts-ignore
  if (window1.the_graph_result.lp_data) {
    // eslint-disable-next-line
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/camelcase
    tvlPoolsTotal = tvl + tvlFarming
    //tvl = tvlPoolsTotal
  }
  return (
    <SContainer>
      <TYPE.white fontWeight={500} fontSize={17} style={{ margin: 'auto' }}>
        <TextFont>Total Value Locked: ${getFormattedNumber(tvlPoolsTotal, 2)}</TextFont>
      </TYPE.white>
    </SContainer>
  )
}
