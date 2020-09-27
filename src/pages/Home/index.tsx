import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
// import { STAKING_REWARDS_INFO, useStakingInfo } from '../../state/stake/hooks'
import { TYPE } from '../../theme'
// import { TYPE, ExternalLink } from '../../theme'
// import PoolCard from '../../components/earn/PoolCard'
import { RowBetween } from '../../components/Row'
// import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
// import Loader from '../../components/Loader'
// import { useActiveWeb3React } from '../../hooks'

const PageWrapper = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  justify-self: center;
`

// const PoolSection = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   column-gap: 10px;
//   row-gap: 15px;
//   width: 100%;
//   justify-self: center;
// `

export default function Home() {
  // const { chainId } = useActiveWeb3React()
  // const stakingInfos = useStakingInfo()
  //
  // const DataRow = styled(RowBetween)`
  //   ${({ theme }) => theme.mediaWidth.upToSmall`
  //   flex-direction: column;
  // `};
  // `
  //
  // const stakingRewardsExist = Boolean(typeof chainId === 'number' && (STAKING_REWARDS_INFO[chainId]?.length ?? 0) > 0)

  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <AutoColumn gap="md">
          <RowBetween>
            <TYPE.black fontWeight={600} fontSize={40}>
              DeFi Yield Farming with Automated Vaults, combined
            </TYPE.black>
          </RowBetween>
          <RowBetween>
            <TYPE.black fontWeight={600} fontSize={40}>
              with the best Ethereum (ETH) Mining Pool
            </TYPE.black>
          </RowBetween>
          <RowBetween></RowBetween>
          <RowBetween>
            <TYPE.black fontSize={25} fontWeight={300}>
              The DeFi Yield Protocol (DYP) is developing a platform that allows anyone to provide liquidity
            </TYPE.black>
          </RowBetween>
          <RowBetween>
            <TYPE.black fontSize={25} fontWeight={300}>
              and to be rewarded with DYP tokens, at the same time maintaining both token price stability and
            </TYPE.black>
          </RowBetween>
          <RowBetween>
            <TYPE.black fontSize={25} fontWeight={300}>
              secure and simplified DeFi for end users
            </TYPE.black>
          </RowBetween>
          {/*<ExternalLink*/}
          {/*  style={{ color: 'black', textDecoration: 'underline' }}*/}
          {/*  href="https://uniswap.org/blog/uni/"*/}
          {/*  target="_blank"*/}
          {/*>*/}
          {/*  <TYPE.black fontSize={14}>Read more about UNI</TYPE.black>*/}
          {/*</ExternalLink>*/}
        </AutoColumn>
      </TopSection>

      {/*<AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>*/}
      {/*  <DataRow style={{ alignItems: 'baseline' }}>*/}
      {/*    <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Participating pools</TYPE.mediumHeader>*/}
      {/*  </DataRow>*/}

      {/*  <PoolSection>*/}
      {/*    {stakingRewardsExist && stakingInfos?.length === 0 ? (*/}
      {/*      <Loader style={{ margin: 'auto' }} />*/}
      {/*    ) : !stakingRewardsExist ? (*/}
      {/*      'No active rewards'*/}
      {/*    ) : (*/}
      {/*      stakingInfos?.map(stakingInfo => {*/}
      {/*        // need to sort by added liquidity here*/}
      {/*        return <PoolCard key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} />*/}
      {/*      })*/}
      {/*    )}*/}
      {/*  </PoolSection>*/}
      {/*</AutoColumn>*/}
    </PageWrapper>
  )
}
