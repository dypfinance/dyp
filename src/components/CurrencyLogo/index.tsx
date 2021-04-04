import { Currency, ETHER, Token } from '@uniswap/sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import DYPLogo from '../../assets/svg/dyp_thicker.svg'
import WBNBLogo from '../../assets/images/wbnb_logo.png'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import { DYP, WBNB } from '../../constants'

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: 30px;
  height: 30px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 30px;
`

const StyledDYPLogo = styled.img<{ size: string }>`
  width: 46px;
  height: 37px;
  border-radius: 30px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

export default function CurrencyLogo({
  currency,
  size = '30px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }

      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />
  }

  if (currency === DYP) {
    return <StyledDYPLogo src={DYPLogo} size={size} style={style} />
  }

  if (currency === WBNB) {
    return <StyledEthereumLogo src={WBNBLogo} size={size} style={style} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
