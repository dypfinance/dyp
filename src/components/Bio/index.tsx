import { darken } from 'polished'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import {
  useBioModalToggle,
  useBioModalToggle2,
  useBioModalToggle3,
  useBioModalToggle4
} from '../../state/application/hooks'
import { ButtonSecondary } from '../Button'
import BioModal, { BioModal2, BioModal3, BioModal4 } from '../BioModal'

const Web3StatusGeneric = styled(ButtonSecondary)`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 70px;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }
`

const Web3StatusConnect = styled(Web3StatusGeneric)<{ faded?: boolean }>`
  background-color: ${({ theme }) => theme.primary4};
  border: none;
  color: ${({ theme }) => theme.primaryText1};
  font-weight: 500;

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
    color: ${({ theme }) => theme.primaryText1};
  }

  ${({ faded }) =>
    faded &&
    css`
      background-color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme.red};
      color: ${({ theme }) => theme.black};

      :hover,
      :focus {
        background-color: ${({ theme }) => theme.red};
        border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
        color: ${({ theme }) => darken(0.05, theme.black)};
      }
    `}
`

const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 500;
`

function Web3StatusInner() {
  const { t } = useTranslation()
  const toggleBioModal = useBioModalToggle()

  return (
    <Web3StatusConnect id="connect-wallet" onClick={toggleBioModal} faded={true}>
      <Text>{t('Bio')}</Text>
    </Web3StatusConnect>
  )
}

function Web3StatusInner2() {
  const { t } = useTranslation()
  const toggleBioModal = useBioModalToggle2()

  return (
    <Web3StatusConnect id="connect-wallet" onClick={toggleBioModal} faded={true}>
      <Text>{t('Bio')}</Text>
    </Web3StatusConnect>
  )
}

function Web3StatusInner3() {
  const { t } = useTranslation()
  const toggleBioModal = useBioModalToggle3()

  return (
    <Web3StatusConnect id="connect-wallet" onClick={toggleBioModal} faded={true}>
      <Text>{t('Bio')}</Text>
    </Web3StatusConnect>
  )
}

function Web3StatusInner4() {
  const { t } = useTranslation()
  const toggleBioModal = useBioModalToggle4()

  return (
    <Web3StatusConnect id="connect-wallet" onClick={toggleBioModal} faded={true}>
      <Text>{t('Bio')}</Text>
    </Web3StatusConnect>
  )
}

export default function Bio() {
  return (
    <>
      <Web3StatusInner />
      <BioModal />
    </>
  )
}

export function Bio2() {
  return (
    <>
      <Web3StatusInner2 />
      <BioModal2 />
    </>
  )
}

export function Bio3() {
  return (
    <>
      <Web3StatusInner3 />
      <BioModal3 />
    </>
  )
}

export function Bio4() {
  return (
    <>
      <Web3StatusInner4 />
      <BioModal4 />
    </>
  )
}
