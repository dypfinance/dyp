import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import Whitelist from '../../components/Whitelist'

import Banner from '../../assets/images/dyp_giveaway.jpg'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

// const StyledLink = styled.a`
//   color: grey;
//   -webkit-align-items: center;
//   text-decoration: none;
//   &:hover {
//     color: grey;
//   }
// `

// const popUpAlert = function() {
//   alert('Coming soon!')
// }

export default function Competition() {
  return (
    <PageWrapper gap="lg" justify="center">
      <Whitelist />
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600} fontSize={15}>
                  DeFi Yield Protocol Buying Competition: $25,000 in USDT to be won!
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <img src={Banner} style={{ width: '100%', borderRadius: '25px' }} alt={'logo'} />
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  DeFi Yield Protocol team has committed a total of $25,000 in USDT to be given away as prizes to reward
                  our new users.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  The campaign will run from 18:00 on March 01, 2021 to 18:00 on March 30, 2021 (UTC).
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontWeight={600} fontSize={15}>
                  New 100 Token Holders: Win a Share of $25,000 USDT!
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  The top 50 new token holders will win a share of $15,000 USDT rewards in proportion to their holding
                  amount.<div></div>
                  Reward for top 50= the top 50 token holders from March 01, 2021 to March 30, 2021 will share $15,000
                  USDT based on their share of DYP holding.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  50 new token holders will share $10,000 USDT in 200 prizes of $200 in USDT.<div></div>
                  Reward for 50 new token holders= 50 random token holders that bough DYP between March 01, 2021 and
                  March 30, 2021 will get each $200 in USDT.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={15} fontWeight={600}>
                  Note:
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  1. The campaign is only for the token holders that bought DYP between March 01, 2021 and March 30,
                  2021.<div></div>
                  2. The minimum amount of DYP that you need to hold is 5 DYP tokens.<div></div>
                  3. The Sub-Holders (addresses that received DYP tokens from an existent holder) will be treated as the
                  same account when participating in the activity.<div></div>
                  4. The final rankings will be updated within 3 days of the competition ending.<div></div>
                  5. Rewards will be distributed within 7 days of the campaign ending.
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>
    </PageWrapper>
  )
}
