import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { ExternalLink, TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection } from '../../components/earn/styled'
import Whitelist from '../../components/Whitelist'

import Banner from '../../assets/images/dyp_giveaway.jpg'
import Uniswap from '../../assets/images/uniswap.jpg'
import GateIo from '../../assets/images/gateio.jpg'
import Kucoin from '../../assets/images/kucoin.png'
import MyContainer from '../../assets/images/mycontainer.jpg'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const Title = styled.div`
  font-size: 20.5px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 15px;
  `}
`

const StyledLink = styled.a`
  color: grey;
  -webkit-align-items: center;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  -webkit-align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        justify-content: space-between;
  `}
`

const Item = styled.div`
  display: grid;
  justify-items: center;
`

const TextNews = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: black;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 10px;
        font-weight: 500;
  `}
`

// const popUpAlert = function() {
//   alert('Coming soon!')
// }

export default function Competition() {
  return (
    <PageWrapper gap="lg" justify="center">
      <Whitelist />
      <TopSection gap="md">
        <CardSection>
          <AutoColumn gap="md">
            <RowBetween>
              <Title>
                <TYPE.black fontWeight={600}>
                  DeFi Yield Protocol Buying Competition: $25,000 in USDT to be won!
                </TYPE.black>
              </Title>
            </RowBetween>
            <RowBetween>
              <img src={Banner} style={{ width: '100%', borderRadius: '25px' }} alt={'logo'} />
            </RowBetween>
            <RowBetween>
              <TYPE.black fontSize={14}>
                DeFi Yield Protocol team has committed a total of $25,000 in USDT to be given away as prizes to reward
                our new users.
              </TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.white fontSize={14} color={'red'}>
                The campaign will run from 16:00 on March 01, 2021 to 16:00 on March 30, 2021 (UTC).
              </TYPE.white>
            </RowBetween>
            <RowBetween>
              <TYPE.black fontWeight={600} fontSize={15}>
                New 100 Token Holders: Win a Share of $25,000 USDT!
              </TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black fontSize={14}>
                The top 50 new token holders will win a share of $15,000 USDT rewards in proportion to their holding
                amount.<div></div>
                Reward for top 50= the top 50 token holders from March 01, 2021 to March 30, 2021 will share $15,000
                USDT based on their share of DYP holding.
              </TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black fontSize={14}>
                50 new token holders will share $10,000 USDT in 50 prizes of $200 in USDT.<div></div>
                Reward for 50 new token holders= 50 random token holders that bought DYP between March 01, 2021 and
                March 30, 2021 will get each $200 in USDT.
              </TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black fontSize={15} fontWeight={600}>
                Note:
              </TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black fontSize={14}>
                1. The campaign is available only for the token holders that bought DYP between March 01, 2021 and March
                30, 2021.<div></div>
                2. DYP can be bought from any exchange:{' '}
                <StyledLink
                  target="_blank"
                  style={{ color: 'red', textDecoration: 'underline' }}
                  href="https://info.uniswap.org/token/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                >
                  Uniswap
                </StyledLink>
                ,{' '}
                <StyledLink
                  target="_blank"
                  style={{ color: 'red', textDecoration: 'underline' }}
                  href="https://www.gate.io/trade/DYP_USDT"
                >
                  Gate.io
                </StyledLink>
                ,{' '}
                <StyledLink
                  target="_blank"
                  style={{ color: 'red', textDecoration: 'underline' }}
                  href="https://www.bithumb.pro/en-us/exchange/professional?q=DYP-USDT"
                >
                  Bithumb Global
                </StyledLink>
                , and{' '}
                <StyledLink
                  target="_blank"
                  style={{ color: 'red', textDecoration: 'underline' }}
                  href="https://www.mycointainer.com/dashboard/invest/defiyieldprotocol/"
                >
                  Mycointainer
                </StyledLink>
                <div></div>
                3. The minimum amount of DYP that you need to hold is 5 DYP tokens.<div></div>
                4. The Sub-Holders (addresses that received DYP tokens from an existent holder) will be treated as the
                same account when participating in the activity.<div></div>
                5. The final rankings will be updated within 3 days of the competition ending.<div></div>
                6. Rewards will be distributed within 7 days of the campaign ending.
              </TYPE.black>
            </RowBetween>
            <RowBetween />
            <RowBetween style={{ display: 'flex', justifyContent: 'center' }}>
              <TYPE.black fontSize={15} fontWeight={600}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't forget to get your DYP!
              </TYPE.black>
            </RowBetween>
            <RowBetween />
            <RowBetween style={{ paddingTop: '10px' }}>
              <StyledNav>
                <ExternalLink
                  style={{ color: 'white', textDecoration: 'underline' }}
                  href="https://info.uniswap.org/token/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                  target="_blank"
                >
                  <Item>
                    <img src={Uniswap} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
                    <TextNews>Uniswap</TextNews>
                  </Item>
                </ExternalLink>
                <ExternalLink
                  style={{ color: 'white', textDecoration: 'underline' }}
                  href="https://trade.kucoin.com/DYP-USDT"
                  target="_blank"
                >
                  <Item>
                    <img src={Kucoin} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
                    <TextNews>KuCoin</TextNews>
                  </Item>
                </ExternalLink>
                <ExternalLink
                  style={{ color: 'white', textDecoration: 'underline' }}
                  href="https://www.gate.io/trade/DYP_USDT"
                  target="_blank"
                >
                  <Item>
                    <img src={GateIo} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
                    <TextNews>Gate.io</TextNews>
                  </Item>
                </ExternalLink>
                <ExternalLink
                  style={{ color: 'white', textDecoration: 'underline' }}
                  href="https://www.mycointainer.com/dashboard/invest/defiyieldprotocol/"
                  target="_blank"
                >
                  <Item>
                    <img src={MyContainer} style={{ width: '50px', borderRadius: '50px' }} alt={'logo'} />
                    <TextNews>Mycointainer</TextNews>
                  </Item>
                </ExternalLink>
              </StyledNav>
            </RowBetween>
          </AutoColumn>
        </CardSection>
      </TopSection>
    </PageWrapper>
  )
}
