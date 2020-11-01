import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { ExternalLink, TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import Whitelist from '../../components/Whitelist'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

export default function Feature() {
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
                <TYPE.white fontWeight={600}>DYP Anti-Manipulation Feature</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Why is DeFi Yield Protocol Unique? DeFi Yield Protocol: Your New On-The-Go DeFi
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  DeFi Yield Protocol (DYP) will provide a solution to the risk Yield Farming brought in. How? – The DYP
                  is developing a platform that allows anyone to provide liquidity and be rewarded with DYP tokens, and
                  at the same time maintaining both token price stability and secure and simplified DeFi for end users.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>How will this work?</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  DeFi Yield protocol (DYP) is changing the way you earn through liquidity on Ethereum smart contract.
                  The argument against DeFi is that whales have the power to control the network. The Sushi dump is the
                  most remarkable example, there was a flash crash in the tokens when anonymous founder Chef Nomi
                  swapped his Sushi tokens for Ethereum. DeFi Yield protocol (DYP) prevents the whale advantage in DeFi.
                  DYP anti-manipulation feature ensures that all pool (DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC POOL)
                  rewards are automatically converted from DYP to ETH at 00:00 UTC, and the system automatically
                  distributes the rewards to the liquidity providers. This feature is excellent because the network’s
                  liquidity will be fair to all participants; no whale will be able to manipulate the price of DYP to
                  their advantage.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>Let’s dig a bit more about this.</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Every day at 00:00 UTC, the smart contract will automatically try to convert 276,480 DYP (69,120 DYP
                  reward per day, per DYP pool mentioned above) to ETH. If the DYP price is affected by more than 2.5%,
                  then the maximum DYP amount that does not affect the price will be swapped to ETH, with the remaining
                  amount distributed in the next day’s rewards. After seven days, if there are still undistributed DYP
                  rewards, the DeFi Yield protocol (DYP) governance will vote on whether the remaining DYP will be
                  distributed to the token holders or burned removes them from circulation.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Smart contracts are the engine room of any DeFi project. The advantage of smart contracts is that the
                  community writes the rules; they can work without human interaction. Unlike the centralized world in
                  which a set of rules are interpreted by a few experts who make decisions. Cool feature, Right. Not
                  really. There is a significant disadvantage of smart contract risk, which happens when there is a bug
                  in a smart contract. YAM finance is the greatest example of a smart contract risk. The team discovered
                  a bug that prevented a vote from being executed. Yam tokens were dumped by users causing the tokens to
                  plunge overnight. DYP prevents smart contract risk by ensuring that all their smart contracts are{' '}
                  <ExternalLink
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://github.com/dypfinance/contract-security-audit"
                    target="_blank"
                  >
                    audited
                  </ExternalLink>
                  , and the codes are secured from participants who try to take advantage of the system.
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
