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

export default function TextTwo() {
  let ethTotalethTotal = 0
  let bnbTotal = 0
  let totalPaidInUsd = 0
  // eslint-disable-next-line
  //@ts-ignore
  const [jsonTotalPaid, setwethPaiOutTotal] = React.useState(0)
  // eslint-disable-next-line
  //@ts-ignore
  jsonTotalPaid === 0 &&
    window1
      // eslint-disable-next-line
      // @ts-ignore
      .getTotalPaid()
      // eslint-disable-next-line
      //@ts-ignore
      .then(jsonTotalPaid => setwethPaiOutTotal(jsonTotalPaid))
      .catch(console.error)
  if (jsonTotalPaid) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    ethTotalethTotal = jsonTotalPaid.ethTotal.wethPaiOutTotals
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    bnbTotal = jsonTotalPaid.bnbTotal.wbnbPaidOutTotals
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    totalPaidInUsd = jsonTotalPaid.totalPaidInUsd
  }
  return (
    <SContainer>
      <TYPE.white fontWeight={500} fontSize={17} style={{ margin: 'auto' }}>
        <TextFont>
          {getFormattedNumber(ethTotalethTotal, 2)} ETH and {getFormattedNumber(bnbTotal, 2)} BNB worth $
          {getFormattedNumber(totalPaidInUsd, 2)} paid to the Liquidity providers since launch
        </TextFont>
      </TYPE.white>
    </SContainer>
  )
}
