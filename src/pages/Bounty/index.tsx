import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import { Link } from 'rebass'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

export default function Bounty() {
  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <TYPE.black fontWeight={600} fontSize={30}>
          Bounty Information
        </TYPE.black>
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontSize={14}>
                  Bounty Campaign starts from October 12, 2020 and will go until November 12th, 2020
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>Total Pool: 200 Ethereum, 0.01 ETH = 1 Stake</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>The bonus allocation is as follows:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  - Twitter 25% Stakes<div></div>- Telegram 25% Stakes<div></div>- Discord 25% Stakes<div></div>-
                  Youtube 25% Stakes
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  The Bonus will be distributed in maximum 2 weeks after the Bounty campaign ends. For any questions
                  please join the Bounty group -{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://t.me/dypbounty"
                    target="_blank"
                  >
                    https://t.me/dypbounty
                  </Link>
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
        <RowBetween></RowBetween>
        <TYPE.black fontWeight={600} fontSize={30}>
          General Rules
        </TYPE.black>
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  1. All the participants must join the DYP's Official Telegram Group and make at least 1 constructive
                  comment -{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://t.me/dypfinance"
                    target="_blank"
                  >
                    https://t.me/dypfinance
                  </Link>
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  2. All the participants must join the Bounty group -{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://t.me/dypbounty"
                    target="_blank"
                  >
                    https://t.me/dypbounty
                  </Link>
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  3. Talking about the bounty campaign in the project chat group will lead to immediate disqualification
                  from the campaign and an instant ban from the Official chat group. Please ask your bounty related
                  questions in the Bounty group.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  4. Using multiple accounts, cheating and spamming are not allowed. You will be disqualified from the
                  bounty campaign immediately and all of your accounts will be banned permanently.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  5. KYC is not required for the bounty campaign. However, the project team has the rights to require
                  KYC for suspicious cases.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  6. The bounty manager and the project team reserve the right to make changes to the conditions at any
                  time.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  7. All the participants must complete the authentication form at{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://bounty.dyp.finance"
                    target="_blank"
                  >
                    https://bounty.dyp.finance
                  </Link>{' '}
                  to join this bounty.
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
        <RowBetween></RowBetween>
        <TYPE.black fontWeight={600} fontSize={30}>
          Twitter Campaign
        </TYPE.black>
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontSize={14}>Rewards:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>- 1250 stakes per week for all the participants</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  2000+ followers: 1 stake/week<div></div>4000+ followers: 2 stakes/week<div></div>10000+ followers: 4
                  stakes/week<div></div>20000+ followers: 10 stakes/week
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>How to apply:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  1. Every participant must follow the DYP's Official Twitter Account -{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://twitter.com/dypfinance"
                    target="_blank"
                  >
                    https://twitter.com/dypfinance
                  </Link>
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  2. Twitter account must have minimum 2000+ followers and must be original (90% in Twitter audit).
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  3. User must Retweet 5 tweets from the DYP's Official Twitter Account -{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://twitter.com/dypfinance"
                    target="_blank"
                  >
                    https://twitter.com/dypfinance
                  </Link>
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  4. Create at least 5 unique tweets about the DeFi Yield Protocol project per week, using these
                  hashtags #defi #DeFiYieldProtocol $DYP
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  5. Submit weekly report in Bounty group in .docx format, until Friday 23:59 UTC time. You can't edit
                  report after current weekend.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  6. If you ask any bounty related questions on the main chat you will be banned from the campaign, join
                  the Bounty group to ask any bounty related questions.
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
        <RowBetween></RowBetween>
        <TYPE.black fontWeight={600} fontSize={30}>
          Telegram Campaign
        </TYPE.black>
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontSize={14}>Rewards:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>- 1250 stakes per week for all the participants</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>How to apply:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  1. Update your Telegram name to "Your Name | DYP Ambassador". Only one project is allowed in your
                  Telegram name.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  2. Replace your profile picture with DeFi Yield Protocol Logo -{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://dyp.finance/images/logo.png"
                    target="_blank"
                  >
                    Download DYP LOGO
                  </Link>{' '}
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  3. Write at least 10 constructive messages in minimum 5 other crypto-related telegram groups.
                  Posts/messages must be constructive, useful and in a way which will not be considered as spamming.
                  Deleted messages will not be counted.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  4. Invite at least 10 new members to DYP's Official telegram group. The new members must join our
                  group by the invite link{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://t.me/dypfinance"
                    target="_blank"
                  >
                    https://t.me/dypfinance
                  </Link>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}, you are not allowed to add members with
                  "Add members" function because this is considered Spam by telegram. You need to have at least 5
                  members from the invited ones to post constructive messages in our group. If your members leave the{' '}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  DYP's Official telegram group before the campaign ends, your stakes will be deleted
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  5. Submit weekly report in Bounty group, until Friday 23:59 UTC time. You can't edit report after
                  current weekend.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  6. If you remove your name and profile pic before the campaign ends your stakes will be deleted.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  7. If you ask any bounty related questions on the main chat you will be banned from the campaign, join
                  the Bounty group to ask any bounty related questions.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14} fontWeight={600}>
                  *** You will get extra 5% bonus in ETH from the investment of your invited members in DYP. Let’s look
                  at the following example: You have 2 invited members that purchased DYP worth 10 ETH, that means you
                  will get a bonus of 0.5 ETH.
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
        <RowBetween></RowBetween>
        <TYPE.black fontWeight={600} fontSize={30}>
          Discord Campaign
        </TYPE.black>
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontSize={14}>Rewards:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>- 1250 stakes per week for all the participants</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>How to apply:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  1. Replace your profile picture with DeFi Yield Protocol Logo -{' '}
                  <Link
                    style={{ color: 'white', textDecoration: 'underline' }}
                    href="https://dyp.finance/images/logo.png"
                    target="_blank"
                  >
                    Download DYP LOGO
                  </Link>{' '}
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  2. Write at least 10 constructive messages in minimum 5 other crypto-related discord channels.
                  Posts/messages must be constructive, useful and in a way which will not be considered as spamming.
                  Deleted messages will not be counted.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  3. Invite at least 10 new members to DYP's Official discord channel. The new members must join our
                  channel by the invite link that you generate with your username, under DeFi Yield Protocol server name{' '}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  you click "Invite" and you get a "Copy Share Link", please note that the link expires in 1 day, so
                  every 24 hours you need to generate a new one. You need to have at least 5 members from the invited{' '}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  ones to post constructive messages in our channel. If your members leave the DYP's Official discord
                  channel before the campaign ends, your stakes will be deleted.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  4. Submit weekly report in Bounty group, until Friday 23:59 UTC time. You can't edit report after
                  current weekend.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  5. If you remove your profile picture with DYP Logo before the campaign ends your stakes will be
                  deleted.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  6. If you ask any bounty related questions on the main chat you will be banned from the campaign, join
                  the Bounty group to ask any bounty related questions.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14} fontWeight={600}>
                  *** You will get extra 5% bonus in ETH from the investment of your invited members in DYP. Let’s look
                  at the following example: You have 2 invited members that purchased DYP worth 10 ETH, that means you
                  will get a bonus of 0.5 ETH.
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
        <RowBetween></RowBetween>
        <TYPE.black fontWeight={600} fontSize={30}>
          Youtube Campaign
        </TYPE.black>
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontSize={14}>Rewards:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>- 1250 stakes per week for all the participants</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  2000+ subscribers: 25 stake/week<div></div>5000+ subscribers: 50 stakes/week<div></div>10000+
                  subscribers: 75 stakes/week<div></div>20000+ subscribers: 100 stakes/week
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>How to apply:</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>1. Video must be original and made by you.</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>2. Your video must be 3 min long and must be uploaded to Youtube.</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  3. You channel must have minimum 2000 subscribers and must be a cryptocurrency channel.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  4. Your video must have 500 minimum views or it will be disqualified.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>5. Only one video per person is allowed.</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  6. Video description must have the website link, telegram group link and twitter link.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  7. Submit weekly report in Bounty group, until Friday 23:59 UTC time. You can't edit report after
                  current weekend.
                </TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  8. If you ask any bounty related questions on the main chat you will be banned from the campaign, join
                  the Bounty group to ask any bounty related questions.
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
