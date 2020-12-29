import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import { Link } from 'rebass'
import Whitelist from '../../components/Whitelist'

const PageWrapper = styled(AutoColumn)`
  max-width: 100%;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

// const popUpAlert = function() {
//   alert('Coming soon!')
// }

export default function Mining() {
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
                <TYPE.white fontWeight={600}>
                  Visit{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://mining.dyp.finance"
                    target="_blank"
                  >
                    https://mining.dyp.finance
                  </Link>{' '}
                  to join the Ethereum Mining Pool Whitelist
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  <TYPE.white fontSize={14}>
                    Ethereum mining pool & yield farming for miners is the next core feature of DYP for the token to
                    achieve long-term profitability.
                  </TYPE.white>
                  <p>{'\n'}</p>
                  DYP Ethereum Miner Address{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://ethermine.org/miners/0x910090Ea889B64B4e722ea4b8fF6D5e734dFb38F/dashboard"
                    target="_blank"
                  >
                    https://ethminer.dyp.finance
                  </Link>
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  What is this? This is our Ethereum Miner address. The DYP team has been mining Ethereum since 2017,
                  and now we are ready to help the Ethereum Mining Community with our Ethereum mining pool combined with
                  yield farming. We invested more than $1 million dollars in our Mining Farm, so you can be sure that we
                  understand the community’s needs.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Every Ethereum Miner address that interacts with our smart contract will get a 10% monthly bonus of{' '}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  the ETH monthly income earned. Let's say ETH price is $1000, DYP price is $5, and your monthly
                  estimated earnings is 1 ETH — that means you will get a monthly bonus of 20 DYP tokens worth $100.
                  This does not stop here; in order to claim your monthly DYP tokens, you will first need to join our
                  Ethereum mining pool with 0% fees, meaning you will also earn more ETH monthly!
                </TYPE.white>
              </RowBetween>{' '}
              <TYPE.white fontSize={14}>
                Ethereum mining pool & yield farming for miners will provide a 10% monthly DYP bonus + 0% mining fees to
                all Ethereum miners. The Ethereum mining pool will be launched as soon as we get the Hashrate required
                to mine a pool; currently we have 35 GH/s Hashrate from our miners, the required Hashrate is 250 GH/s.
                <TYPE.white fontSize={10}>
                  Mining pool bonuses will disburse a maximum amount of DYP with a -2.5% Price Impact.
                </TYPE.white>
              </TYPE.white>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>
    </PageWrapper>
  )
}
