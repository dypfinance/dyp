import React from 'react'
import styled from 'styled-components'

import { X } from 'react-feather'
//import { useURLWarningToggle, useURLWarningVisible } from '../../state/user/hooks'
import { isMobile } from 'react-device-detect'

import Kucoin from '../../assets/images/kucoin.png'
import { ExternalLink } from '../../theme'

const PhishAlert = styled.div<{ isActive: any }>`
  display: flex;
  width: 100%;
  max-width: 100%;
  padding: 6px 6px;
  background-color: ${({ theme }) => theme.blue1};
  color: white;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`

export const StyledClose = styled(X)`
  :hover {
    cursor: pointer;
  }
`

const PointerLink = styled.div`
  :hover {
    cursor: pointer;
  }
`

export default function ExchangeList() {
  // const toggleURLWarning = useURLWarningToggle()
  // const showURLWarning = useURLWarningVisible()

  return isMobile ? (
    <PhishAlert isActive={true}>
      <div style={{ display: 'flex' }}>
        <img src={Kucoin} width={30} height={30} style={{ margin: '10px', marginLeft: '0px' }} alt={'logo'} />
        <code style={{ marginTop: '19px', display: 'inline', fontWeight: 'bold' }}>
          <PointerLink>
            <ExternalLink target="_blank" style={{ color: 'white' }} href="https://trade.kucoin.com/DYP-USDT">
              DYP trading is now live on #KuCoin!
            </ExternalLink>
          </PointerLink>
        </code>
      </div>
    </PhishAlert>
  ) : window.location.hostname === 'dyp.finance' ? (
    <PhishAlert isActive={true}>
      <div style={{ display: 'flex' }}>
        <img src={Kucoin} width={30} height={30} style={{ margin: '10px', marginLeft: '25px' }} alt={'logo'} />
        <code style={{ marginTop: '18px', display: 'inline', fontWeight: 'bold', fontSize: '13px' }}>
          <PointerLink>
            <ExternalLink target="_blank" style={{ color: 'white' }} href="https://trade.kucoin.com/DYP-USDT">
              DYP trading is now live on #KuCoin!
            </ExternalLink>
          </PointerLink>
        </code>
      </div>
    </PhishAlert>
  ) : null
}
