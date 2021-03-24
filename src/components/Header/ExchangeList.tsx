import React from 'react'
import styled from 'styled-components'

import { AlertTriangle, X } from 'react-feather'
import { useURLWarningToggle, useURLWarningVisible } from '../../state/user/hooks'
import { isMobile } from 'react-device-detect'

import Kucoin from '../../assets/images/kucoin.png'

const PhishAlert = styled.div<{ isActive: any }>`
  width: 100%;
  padding: 6px 6px;
  background-color: ${({ theme }) => theme.blue1};
  color: white;
  font-size: 11px;
  justify-content: space-between;
  align-items: center;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`

export const StyledClose = styled(X)`
  :hover {
    cursor: pointer;
  }
`

export default function URLWarning() {
  const toggleURLWarning = useURLWarningToggle()
  const showURLWarning = useURLWarningVisible()

  return isMobile ? (
    <PhishAlert isActive={true}>
      <div style={{ display: 'flex' }}>
        <img src={Kucoin} width={30} style={{ margin: '10px', marginLeft: '25px' }} alt={'logo'} />
        <code style={{ marginTop: '19px', display: 'inline', fontWeight: 'bold' }}>
          DeFi Yield Protocol (DYP) GETS LISTED ON KuCoin
        </code>
      </div>
    </PhishAlert>
  ) : window.location.hostname === 'app.uniswap.org' ? (
    <PhishAlert isActive={showURLWarning}>
      <div style={{ display: 'flex' }}>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> Always make sure the URL is
        <code style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }}>dyp.finance</code> - bookmark it to be
        safe.
      </div>
      <StyledClose size={12} onClick={toggleURLWarning} />
    </PhishAlert>
  ) : null
}
