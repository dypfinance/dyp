import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { ApplicationModal } from '../../state/application/actions'
import {
  useBioModalToggle,
  useBioModalToggle2,
  useBioModalToggle3,
  useBioModalToggle4,
  useBioModalToggle5,
  useBioModalToggle6,
  useModalOpen
} from '../../state/application/hooks'

import Modal from '../Modal'
import { TYPE } from '../../theme'

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const CloseColor = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.text4};
  }
`

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: auto;
`

const HeaderRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  padding: 1rem 1rem;
  font-weight: 500;
  color: ${props => (props.color === 'blue' ? ({ theme }) => theme.primary1 : 'inherit')};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem;
  `};
`

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  padding: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 1rem`};
`

const UpperSection = styled.div`
  position: relative;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`

const OptionGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    grid-gap: 10px;
  `};
`

const HoverText = styled.div`
  :hover {
    cursor: pointer;
  }
`

export default function BioModal() {
  const walletModalOpen = useModalOpen(ApplicationModal.BIO)
  const toggleBioModal = useBioModalToggle()

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    return (
      <TYPE.black fontSize={16}>
        I am a self-professed crypto-capitalist. I got involved in crypto in early 2017 when I purchased my first
        Ethereum mining rigs. I started mining Ethereum with 13 rigs, 78 graphics processing units (GPUs), and shortly
        thereafter, I started trading ETH, BTC, and ERC20 tokens.<div></div>
        Three months later, I bought 1200 more GPUs and extended the Ethereum mining farm. I also managed to add a large
        amount of BTC and ETH to the cold wallets during the 2017 Bull Market. For example, I made a pretty good deal by
        buying ICX during the ICO. Then, immediately after the ICO between $0.15 and $2.00, I sold most of the ICX for a
        price between $8.00 and $10.00. I also lost a significant amount of my holdings during the Bear Market, but I
        managed to improve my trading abilities, which is an advantage for me.<div></div>
        In July 2020, I discovered Uniswap and yield farming. Thus, I started to add my liquidity to different
        protocols. This moved resulted in some favorable gains. However, along the way, I lost some ETH with a
        yield-farming platform because of the high rewards that liquidity providers earn.<div></div>
        Shortly afterward, I had the idea to create DYP, a platform that would allow anyone to provide their liquidity,
        receive rewards in ETH for the first time since Defi started, and use an anti-manipulation feature to convert
        the rewards into ETH without overly affecting the price. In other words, any person can provide liquidity and
        earn ETH with minimum risks. Because of my mining farm, the core feature of DYP is going to be the Ethereum
        mining pool. This will help all the miners, and at the same time, the DYP token holders.<div></div>
        So, DYP is the vision of a self-made crypto-capitalist from Ethereum mining and trading for almost four years
        now.
      </TYPE.black>
    )
  }

  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleBioModal}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>Some info about Michael</HoverText>
        </HeaderRow>
        <ContentWrapper>
          <OptionGrid>{getOptions()}</OptionGrid>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleBioModal} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}

export function BioModal2() {
  const bioModalOpen2 = useModalOpen(ApplicationModal.BIO2)
  const toggleBioModal2 = useBioModalToggle2()

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    return (
      <TYPE.black fontSize={16}>
        My passion for technology developed during my youth when I first started coding at age 16. I graduated from the
        Department of Computer Science and Engineering at my college, in 2012. During my studies, I worked for several
        IT companies and developed some ASIC and FPGA designs with Verilog. From 2012–2017, I worked as a full-stack web
        developer. In 2017, Michael contacted me to help him set up the first Ethereum mining rigs that he had
        purchased. Then I discovered Bitcoin and Ethereum and started to learn more about blockchain technology and
        solidity. Since 2017, I have provided software and hardware maintenance for the mining farm. In 2018, I began
        creating dApps on the Ethereum network.
      </TYPE.black>
    )
  }

  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleBioModal2}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>Some info about Daniel</HoverText>
        </HeaderRow>
        <ContentWrapper>
          <OptionGrid>{getOptions()}</OptionGrid>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={bioModalOpen2} onDismiss={toggleBioModal2} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}

export function BioModal3() {
  const bioModalOpen3 = useModalOpen(ApplicationModal.BIO3)
  const toggleBioModal3 = useBioModalToggle3()

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    return (
      <TYPE.black fontSize={16}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I'm 34 years old, and at the age of 10, I started coding and learning programming basics. I have 20 years of
        experience in system design, software architecture, and I am a security researcher. I currently work in PHP, C#,
        Python, Perl, C, Ruby on Rails, Html, Mysql databases, Javascript, and Java.
      </TYPE.black>
    )
  }

  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleBioModal3}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>Some info about Gianni</HoverText>
        </HeaderRow>
        <ContentWrapper>
          <OptionGrid>{getOptions()}</OptionGrid>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={bioModalOpen3} onDismiss={toggleBioModal3} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}

export function BioModal4() {
  const bioModalOpen4 = useModalOpen(ApplicationModal.BIO4)
  const toggleBioModal4 = useBioModalToggle4()

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    return (
      <TYPE.black fontSize={16}>
        An enthusiastic, dedicated and highly self-motivated professional. Naturally questioning, with an aptitude for
        developing innovative, effective ideas to issues. Strong analytical and strategic planning skills are combined
        with the ability to communicate and build relationships effectively at all levels. Well organized and possessing
        the leadership and influencing skills required to motivate multidisciplinary teams.
      </TYPE.black>
    )
  }

  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleBioModal4}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>Some info about Teki</HoverText>
        </HeaderRow>
        <ContentWrapper>
          <OptionGrid>{getOptions()}</OptionGrid>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={bioModalOpen4} onDismiss={toggleBioModal4} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}

export function BioModal5() {
  const bioModalOpen5 = useModalOpen(ApplicationModal.BIO5)
  const toggleBioModal5 = useBioModalToggle5()

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    return (
      <TYPE.black fontSize={16}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Razvan holds a Bachelor's degree from Politehnica University of Bucharest, Faculty of Automatic Control and
        Computer Science. Prior to his role at DeFi Yield Protocol, Razvan worked on implementing and maintaining data
        security plans, Database Design and Programming with SQL, Oracle Academy. He also received a CISCO Networking
        Academy reward. Razvan is committed to driving the innovation and research of Defi, as well the real use case
        for DYP token.
      </TYPE.black>
    )
  }

  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleBioModal5}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>Some info about Razvan</HoverText>
        </HeaderRow>
        <ContentWrapper>
          <OptionGrid>{getOptions()}</OptionGrid>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={bioModalOpen5} onDismiss={toggleBioModal5} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}

export function BioModal6() {
  const bioModalOpen6 = useModalOpen(ApplicationModal.BIO6)
  const toggleBioModal6 = useBioModalToggle6()

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    return (
      <TYPE.black fontSize={16}>
        Constantin Bogdan graduated from the University of Bucharest in 2007 and he holds a Master in Human Resource
        Psychology. Bogdan has ten years of experience in enterprise in a variety of roles at startups, private
        companies, and ANOFM Bucharest including product management, product marketing, and sales management, and is the
        Marketing Manager for DeFi Yield Protocol.
      </TYPE.black>
    )
  }

  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleBioModal6}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>Some info about Bogdan</HoverText>
        </HeaderRow>
        <ContentWrapper>
          <OptionGrid>{getOptions()}</OptionGrid>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={bioModalOpen6} onDismiss={toggleBioModal6} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}
