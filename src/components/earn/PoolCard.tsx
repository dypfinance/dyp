import React from 'react'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import styled from 'styled-components'
import { TYPE, ExternalLink } from '../../theme'
import DoubleCurrencyLogo from '../DoubleLogo'
import { ETHER, JSBI, TokenAmount } from '@uniswap/sdk'
import { ButtonPrimary } from '../Button'
import { StakingInfo } from '../../state/stake/hooks'
import { useColor } from '../../hooks/useColor'
//import { currencyId } from '../../utils/currencyId'
import { Break, CardNoise, CardBGImage } from './styled'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import { useTotalSupply } from '../../data/TotalSupply'
import { usePair } from '../../data/Reserves'
import useUSDCPrice from '../../utils/useUSDCPrice'
import getFormattedNumber from '../Function/get-formatted-number'

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  display: none;
`};
`

const Wrapper = styled(AutoColumn)<{ showBackground: boolean; bgColor: any }>`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  position: relative;
  opacity: ${({ showBackground }) => (showBackground ? '0.6' : '1')};
  background: ${({ theme, bgColor, showBackground }) =>
    `radial-gradient(91.85% 100% at 1.84% 0%, ${bgColor} 0%, ${showBackground ? theme.black : theme.bg5} 100%) `};
  color: ${({ theme, showBackground }) => (showBackground ? theme.white : theme.text1)} !important;

  ${({ showBackground }) =>
    showBackground &&
    `  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);`}
`

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 120px;
  grid-gap: 0px;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 48px 1fr 96px;
  `};
`

// const APR = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `

const BottomSection = styled.div<{ showBackground: boolean }>`
  padding: 12px 16px;
  opacity: ${({ showBackground }) => (showBackground ? '1' : '0.4')};
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  z-index: 1;
`
const window1 = window
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/camelcase
const { LP_IDs } = window1

export default function PoolCard({ stakingInfo }: { stakingInfo: StakingInfo }) {
  const token0 = stakingInfo.tokens[0]
  const token1 = stakingInfo.tokens[1]

  const currency0 = unwrappedToken(token0)
  const currency1 = unwrappedToken(token1)

  const isStaking = Boolean(stakingInfo.stakedAmount.greaterThan('0'))
  // const hidePools = Boolean(
  //   stakingInfo.tokens[1].symbol === 'USDC' ||
  //     stakingInfo.tokens[1].symbol === 'USDT' ||
  //     stakingInfo.tokens[1].symbol === 'WBTC'
  // )
  let link = 'staking-eth'
  let tvlPools = 0
  // eslint-disable-next-line
  //@ts-ignore
  if (window1.the_graph_result.lp_data) {
    // eslint-disable-next-line
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/camelcase
    tvlPools =
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      window1.the_graph_result.lp_data[LP_IDs.eth[0]].tvl_usd +
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      window1.the_graph_result.lp_data[LP_IDs.eth[1]].tvl_usd +
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      window1.the_graph_result.lp_data[LP_IDs.eth[2]].tvl_usd +
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      window1.the_graph_result.lp_data[LP_IDs.eth[3]].tvl_usd
  }
  if (stakingInfo.tokens[1].symbol === 'USDC') {
    link = 'staking-usdc'
    // eslint-disable-next-line
    //@ts-ignore
    if (window1.the_graph_result.lp_data) {
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      tvlPools =
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdc[0]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdc[1]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdc[2]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdc[3]].tvl_usd
    }
  }
  if (stakingInfo.tokens[1].symbol === 'USDT') {
    link = 'staking-usdt'
    // eslint-disable-next-line
    //@ts-ignore
    if (window1.the_graph_result.lp_data) {
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      tvlPools =
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdt[0]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdt[1]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdt[2]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.usdt[3]].tvl_usd
    }
  }
  if (stakingInfo.tokens[1].symbol === 'WBTC') {
    link = 'staking-wbtc'
    // eslint-disable-next-line
    //@ts-ignore
    if (window1.the_graph_result.lp_data) {
      // eslint-disable-next-line
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/camelcase
      tvlPools =
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.wbtc[0]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.wbtc[1]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.wbtc[2]].tvl_usd +
        // eslint-disable-next-line
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/camelcase
        window1.the_graph_result.lp_data[LP_IDs.wbtc[3]].tvl_usd
    }
  }
  console.log('aaa+ ', tvlPools)

  // get the color of the token
  const token = currency0 === ETHER ? token1 : token0
  const WETH = currency0 === ETHER ? token0 : token1
  const backgroundColor = useColor(token)

  const totalSupplyOfStakingToken = useTotalSupply(stakingInfo.stakedAmount.token)
  const [, stakingTokenPair] = usePair(...stakingInfo.tokens)

  // let returnOverMonth: Percent = new Percent('0')
  let valueOfTotalStakedAmountInWETH: TokenAmount | undefined
  if (totalSupplyOfStakingToken && stakingTokenPair) {
    // take the total amount of LP tokens staked, multiply by ETH value of all LP tokens, divide by all LP tokens
    valueOfTotalStakedAmountInWETH = new TokenAmount(
      WETH,
      JSBI.divide(
        JSBI.multiply(
          JSBI.multiply(stakingInfo.totalStakedAmount.raw, stakingTokenPair.reserveOf(WETH).raw),
          JSBI.BigInt(2) // this is b/c the value of LP shares are ~double the value of the WETH they entitle owner to
        ),
        totalSupplyOfStakingToken.raw
      )
    )
  }

  // get the USD value of staked WETH
  const USDPrice = useUSDCPrice(WETH)
  const valueOfTotalStakedAmountInUSDC =
    valueOfTotalStakedAmountInWETH && USDPrice?.quote(valueOfTotalStakedAmountInWETH)

  return (
    <Wrapper showBackground={false} bgColor={backgroundColor}>
      <CardBGImage desaturate />
      <CardNoise />

      <TopSection>
        <DoubleCurrencyLogo currency0={currency0} currency1={currency1} size={24} />
        <TYPE.white fontWeight={600} fontSize={24} style={{ marginLeft: '35px' }}>
          {currency0.symbol}-{currency1.symbol}
        </TYPE.white>

        <ExternalLink
          style={{
            width: '100%'
          }}
          href={`https://app.dyp.finance/${link}`}
          target="_blank"
        >
          <ButtonPrimary padding="8px" borderRadius="8px">
            {isStaking ? 'Manage' : 'Deposit'}
          </ButtonPrimary>
        </ExternalLink>
      </TopSection>

      <StatContainer>
        <RowBetween>
          <TYPE.white display={'none'}> Total deposited</TYPE.white>
          <TYPE.white display={'none'}>
            {valueOfTotalStakedAmountInUSDC
              ? `$${valueOfTotalStakedAmountInUSDC.toFixed(0, { groupSeparator: ',' })}`
              : `${valueOfTotalStakedAmountInWETH?.toSignificant(4, { groupSeparator: ',' }) ?? '-'} ETH`}
          </TYPE.white>
        </RowBetween>
        <RowBetween>
          <TYPE.white> Total Value Locked </TYPE.white>
          {/*<TYPE.white>{`${stakingInfo.totalRewardRate*/}
          {/*  ?.multiply(`${60 * 60 * 24 * 7}`)*/}
          {/*  ?.toFixed(0, { groupSeparator: ',' })} DYP / week`}</TYPE.white>*/}
          <TYPE.white>${getFormattedNumber(tvlPools, 2)}</TYPE.white>
          {/*<TYPE.white>{`${stakingInfo.totalRewardRate*/}
          {/*  ?.multiply(`${60 * 60 * 24 * 7 * 0 + 69120 * 7}`)*/}
          {/*  ?.toFixed(0, { groupSeparator: ',' })} DYP / week`}</TYPE.white>*/}
        </RowBetween>
        <RowBetween>
          <TYPE.white> Pool rate </TYPE.white>
          {/*<TYPE.white>{`${stakingInfo.totalRewardRate*/}
          {/*  ?.multiply(`${60 * 60 * 24 * 7}`)*/}
          {/*  ?.toFixed(0, { groupSeparator: ',' })} DYP / week`}</TYPE.white>*/}
          <TYPE.white>{` 250,000 DYP / month`}</TYPE.white>
          {/*<TYPE.white>{`${stakingInfo.totalRewardRate*/}
          {/*  ?.multiply(`${60 * 60 * 24 * 7 * 0 + 69120 * 7}`)*/}
          {/*  ?.toFixed(0, { groupSeparator: ',' })} DYP / week`}</TYPE.white>*/}
        </RowBetween>
      </StatContainer>

      {isStaking && (
        <>
          <Break />
          <BottomSection showBackground={true}>
            <TYPE.black color={'white'} fontWeight={500}>
              <span>Your rate</span>
            </TYPE.black>

            <TYPE.black style={{ textAlign: 'right' }} color={'white'} fontWeight={500}>
              <span role="img" aria-label="wizard-icon" style={{ marginRight: '0.5rem' }}>
                ⚡
              </span>
              {`${stakingInfo.rewardRate?.multiply(`${69120}`)?.toSignificant(4, { groupSeparator: ',' })} UNI / week`}
            </TYPE.black>
          </BottomSection>
        </>
      )}
    </Wrapper>
  )
}
