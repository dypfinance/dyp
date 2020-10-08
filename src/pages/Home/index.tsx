import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
// import { STAKING_REWARDS_INFO, useStakingInfo } from '../../state/stake/hooks'
import { TYPE } from '../../theme'
// import { TYPE, ExternalLink } from '../../theme'
// import PoolCard from '../../components/earn/PoolCard'
import { RowBetween } from '../../components/Row'
import { NavLink } from 'react-router-dom'
// import { darken } from 'polished'
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

const TypeFontTitle = styled.div`
  font-weight: 600;
  font-size: 40px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-weight: 400;
    font-size: 35px;
`};
`

const TypeFontSub = styled.div`
  font-weight: 400;
  font-size: 25px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-weight: 400;
    font-size: 15px;
`};
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  color: black;

  :hover,
  :focus {
    color: red;
  }
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
            <TYPE.black>
              <TypeFontTitle>
                DeFi Yield Farming with Automated Vaults, combined with Ethereum Mining Pool
              </TypeFontTitle>
            </TYPE.black>
          </RowBetween>
          <RowBetween></RowBetween>
          <RowBetween></RowBetween>
          <RowBetween>
            <TYPE.black>
              <TypeFontSub>
                The DeFi Yield Protocol (DYP) is developing a platform that allows anyone to provide liquidity and to be
                rewarded with DYP tokens, at the same time maintaining both token price stability and secure and
                simplified DeFi for end users
              </TypeFontSub>
            </TYPE.black>
          </RowBetween>
          <RowBetween></RowBetween>
          <RowBetween>
            <StyledNavLink id={`earn-nav-link`} to={'/earn'}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's start earning DYP!
            </StyledNavLink>
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
