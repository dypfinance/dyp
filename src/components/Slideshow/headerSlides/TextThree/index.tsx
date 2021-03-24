import React from 'react'
//import styled from 'styled-components'
//import { ExternalLink } from '../../../../theme'
import { TYPE } from '../../../../theme'
import styled from 'styled-components'

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

export default function TextThree() {
  // eslint-disable-next-line
  //@ts-ignore
  const [getHighApy, setgetHighApy] = React.useState(0)
  // eslint-disable-next-line
  //@ts-ignore
  getHighApy === 0 &&
    window1
      // eslint-disable-next-line
      // @ts-ignore
      .GetHighAPY()
      // eslint-disable-next-line
      //@ts-ignore
      .then(getHighApy => setgetHighApy(getHighApy))
      .catch(console.error)
  return (
    <SContainer>
      <TYPE.white fontWeight={500} fontSize={17} style={{ margin: 'auto' }}>
        <TextFont>Join one of our liquidity pools and earn up to {getHighApy}% APY</TextFont>
      </TYPE.white>
    </SContainer>
  )
}
