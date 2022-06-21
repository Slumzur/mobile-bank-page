import React from "react";
import styled from "styled-components";
import appleIcon from "../img/apple_icon.svg";
import googlePlayIcon from "../img/google_play_icon.svg";
import huaweiIcon from "../img/huawei_icon.svg";
import qrCode1024 from "../img/qr_code_1024.png";
import qrCode1366 from "../img/qr_code_1366.png";
import myLifeCardS from "../img/my-life-card-s.png";
import myLifeCardM from "../img/my-life-card-m.png";
import myLifeCardL from "../img/my-life-card-l.png";

export const HowToStartUsing = () => {

  return (
      <Wrapper id='mb'>
          <Header>Как начать пользоваться?</Header>
          <ContentBlock>
              <Block>
                  <BlockHeaderWrapper>
                      <BlockNum>1</BlockNum>
                      <BlockHeader>Установите приложение на&nbsp;телефон</BlockHeader>
                  </BlockHeaderWrapper>
                  <BlockDescription className='blockDescriptionM'>Приложение доступно в маркетах:</BlockDescription>
                  <BlockDescription className='blockDescriptionD'>Отсканируйте QR-код камерой на телефоне для быстрой&nbsp;установки&nbsp;приложения</BlockDescription>
                  <IconWrapper>
                      <IconBox href='https://itunes.apple.com/us/app/ubrr-mobile-bank/id787144251' target="_blank">
                          <Icon style={{ backgroundImage: `url(${appleIcon})` }} />
                          <IconBoxText>Скачать в <span>App&nbsp;Store</span></IconBoxText>
                      </IconBox>
                      <IconBox href='https://play.google.com/store/apps/details?id=cb.ibank' target="_blank">
                          <Icon style={{ backgroundImage: `url(${googlePlayIcon})` }} />
                          <IconBoxText>Скачать в <span>Google&nbsp;Play</span></IconBoxText>
                      </IconBox>
                      <IconBox href='https://appgallery.huawei.com/?yclid=7366647764986407186#/app/C103215869' target="_blank">
                          <Icon style={{ backgroundImage: `url(${huaweiIcon})` }} />
                          <IconBoxText>Скачать в <span>AppGallery</span></IconBoxText>
                      </IconBox>
                  </IconWrapper>
                  <QrCode />
              </Block>
              <BlockWrapper>
                  <Block>
                      <BlockHeaderWrapper>
                          <BlockNum>2</BlockNum>
                          <BlockHeader>Авторизуйтесь</BlockHeader>
                      </BlockHeaderWrapper>
                      <BlockDescription>Вам понадобится номер карты банка или уникальный идентификатор, выданный в офисе банка.</BlockDescription>
                      <NoCardBlock>
                          <NoCardHeader>Станьте клиентом банка</NoCardHeader>
                          <NoCardDescription>Закажите дебетовую карту «My Life» с бесплатной доставкой и получите кешбэк до 5 000 в месяц.</NoCardDescription>
                          <NoCardList>
                              <NoCardItem><NoCardItemTitle>5% кешбэк</NoCardItemTitle><NoCardItemDescription>за ЖКУ</NoCardItemDescription></NoCardItem>
                              <NoCardItem><NoCardItemTitle>1% кешбэк</NoCardItemTitle><NoCardItemDescription>за все покупки</NoCardItemDescription></NoCardItem>
                              <NoCardItem><NoCardItemTitle>0 ₽</NoCardItemTitle><NoCardItemDescription>обслуживание карты</NoCardItemDescription></NoCardItem>
                          </NoCardList>
                          <IssueCardBtn href='https://sales.ubrr.ru/begin?form=comfort&design=debit&ldg=s1&from_medium=banner-guide-mb' target="_blank" rel="noopener">Заказать карту</IssueCardBtn>
                      </NoCardBlock>
                      <BlockDescription2>Нет карты? <a href='https://sales.ubrr.ru/begin?form=booking&design=debit&ldg=s1&from_source=newsite&from_campaign=want_card&from_medium=ibmb' target="_blank">Закажите</a> ее онлайн.</BlockDescription2>
                  </Block>
                  <Block>
                      <BlockHeaderWrapper>
                          <BlockNum>3</BlockNum>
                          <BlockHeader>Установите легкий вход</BlockHeader>
                      </BlockHeaderWrapper>
                      <BlockDescription>С 4-значным паролем для быстрых и безопасных последующих входов</BlockDescription>
                  </Block>
              </BlockWrapper>
          </ContentBlock>
          <InstructionBox>
              <InstructionBoxHeader>Забыли логин или пароль?</InstructionBoxHeader>
              <InstructionBoxText>Восстановление доступа займет не более 5 минут, следуйте <a href="https://i.ubrr.ru/restorecredentials" target="_blank" rel="noopener">инструкции</a></InstructionBoxText>
          </InstructionBox>
          <NoCardBlockDesk>
              <NoCardHeader>Станьте клиентом банка</NoCardHeader>
              <NoCardDescription>Закажите дебетовую карту «My Life» с бесплатной доставкой и получите кешбэк до 5 000 в месяц.</NoCardDescription>
              <NoCardList>
                  <NoCardItem><NoCardItemTitle>5% кешбэк</NoCardItemTitle><NoCardItemDescription>за ЖКУ</NoCardItemDescription></NoCardItem>
                  <NoCardItem><NoCardItemTitle>1% кешбэк</NoCardItemTitle><NoCardItemDescription>за все покупки</NoCardItemDescription></NoCardItem>
                  <NoCardItem><NoCardItemTitle>0 ₽</NoCardItemTitle><NoCardItemDescription>обслуживание карты</NoCardItemDescription></NoCardItem>
              </NoCardList>
              <IssueCardBtn href='https://sales.ubrr.ru/begin?form=comfort&design=debit&ldg=s1&from_medium=banner-guide-mb' target="_blank" rel="noopener">Заказать карту</IssueCardBtn>
          </NoCardBlockDesk>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  
  @media (min-width: 768px) {
    margin: 0 16px;
  }
  
  @media (min-width: 1024px) {
    margin: 0;
  }
  
  @media (min-width: 1366px) {
    margin: 0 6px;
  }
`;
const Header = styled.div`
    color: #3C3C44;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    margin: 56px 0 24px;
    
    @media (min-width: 768px) {
        margin: 80px 0 40px;
    }
    
    @media (min-width: 1366px) {
        margin: 100px 0 56px;
    }
`;
const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const Block = styled.div`
  background: #F1F4F8;
  border-radius: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
  
  @media (min-width: 1024px) {
    margin: 0px 8px 0px 0px;
    width: 50%;
    position: relative;
  }
  
  @media (min-width: 1366px) {
    margin-right: 16px;
  }
`;
const BlockHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  
  @media (min-width: 768px) {
    align-items: baseline;
  }
`;
const BlockNum = styled.div`
  width: 40px;
  height: 40px;
  font-weight: 900;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #B30064;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 12px rgba(82, 89, 99, 0.16);
  border-radius: 20px;
  margin: 16px;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    margin: 24px 16px 16px 24px;
  }
  
  @media (min-width: 1024px) {
    margin: 24px 16px 4px 24px;
  }
  
  @media (min-width: 1366px) {
    margin: 32px 24px 4px 32px;
  }
`;
const BlockHeader = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #3C3C44;
    margin-right: 16px;
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
    
    @media (min-width: 1024px) {
        color: #443C3C;
    }
`;
const BlockDescription = styled.div`
    font-size: 12px;
    line-height: 20px;
    color: #848D94;
    padding: 0 16px 16px 16px;
    
    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 24px;
        padding: 0 24px 24px 24px;
    }
    
    @media (min-width: 1024px) {
        padding: 0 24px 24px 80px;
    }
    
    @media (min-width: 1366px) {
        padding: 0 24px 36px 96px;
    }
`;
const BlockWrapper = styled.div`
    ${Block} {
      &:first-child {
        filter: drop-shadow(0px 2px 6px rgba(132, 141, 148, 0.25));
      }
    }
    @media (min-width: 1024px) {
      width: 50%;
      margin-left: 8px;
      ${Block} {
        width: 100%;
        &:last-child {
          height: 140px;
          margin-top: 16px;
        }
      }
      ${Block} {
        &:first-child {
          filter: none;
        }
        ${BlockDescription} {
          padding-bottom: 12px;
        }
      }
    }
    
    @media (min-width: 1366px) {
      margin-left: 16px;
      ${Block} {
        &:last-child {
          height: 156px;
          margin-top: 24px;
        }
      }
      ${Block} {
        ${BlockDescription} {
          padding-bottom: 12px;
        }
      }
    }
`;
const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 16px 16px;
    max-width: 528px;
    
    @media (min-width: 768px) {
      margin: 0 24px 24px;
    }
    
    @media (min-width: 1024px) {
      flex-direction: column;
      width: 168px;
      margin: 0 0 36px 80px;
    }
    
    @media (min-width: 1366px) {
      margin: 0 0 24px 96px;
    }
`;
const IconBox = styled.a`
    display: flex;
    align-items: center;
    flex-grow: 1;
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(82, 89, 99, 0.14);
    border-radius: 8px;
    height: 52px;
    margin-right: 8px;
    text-decoration: none;
    
    &:hover {
      text-decoration: none;
    }
    
    &:last-child {
      margin-right: 0;
    }
    
    @media (min-width: 768px) {
        margin-right: 12px;
    }
    
    @media (min-width: 1024px) {
        margin: 0 0 12px ;
        
        &:last-child {
          margin-bottom: 0;
        }
    }
    
    @media (min-width: 1366px) {
        margin: 0 0 16px ;
        
        &:last-child {
          margin-bottom: 0;
        }
    }
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  
  @media (min-width: 768px) {
    margin: 0 10px 0 24px;
  }
`;
const IconBoxText = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    font-family: GothamPro, sans-serif;
    font-size: 10px;
    line-height: 10px;
    color: #242D3B;
    
    & span {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
    }
  }
`;
const QrCode = styled.div`
  display: none;
 
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 278px;
    width: 164px;
    height: 217px;
    background-image: url("${qrCode1024}");
    background-repeat: no-repeat;
    background-position: center;
  }
  
  @media (min-width: 1366px) {
    left: 314px;
    width: 188px;
    height: 212px;
    background-image: url("${qrCode1366}");
  }
`;
const NoCardBlock = styled.div`
  padding: 157px 16px 40px;
  background:  #FFF6E5;
  background: url(${myLifeCardS}) no-repeat top right, linear-gradient(-141deg, #FFBB33 113px, #FFF6E5 113px);
  background-repeat: no-repeat;
  border-radius: 0px 0px 16px 16px;
  letter-spacing: 0.3px;
  color: #262626;
  
  @media (min-width: 768px) {
    padding: 40px;
    background: url(${myLifeCardM}) no-repeat top 19px right, linear-gradient(-146deg, #FFBB33 193px, #FFF6E5 193px);
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;
const NoCardHeader = styled.div`
    margin-bottom: 16px;
    font-weight: 800;
    font-size: 22px;
    line-height: 1.4;
    
    @media (min-width: 768px) {
        max-width: 350px;
        font-size: 34px;
    }
    
    @media (min-width: 1024px) {
        max-width: 495px;
    }
`;
const NoCardDescription = styled.div`
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.7;
    
    @media (min-width: 768px) {
      max-width: 350px;
      margin-bottom: 32px;
      font-size: 16px;
    }
    
    @media (min-width: 1024px) {
        max-width: 495px;
    }
`;
const NoCardList = styled.ul`
    margin: 0 0 16px;
    padding: 0;
    list-style: none;
    
    @media (min-width: 768px) {
      display: flex;
      margin-bottom: 42px;
    }
`;
const NoCardItem = styled.li`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 16px 0;
    list-style: none;
    
    @media (min-width: 768px) {
      position: relative;
      display: block;
      padding: 0;
    }
    
    &:not(:last-child)::before {
        @media (min-width: 768px) {
          content: "";
          position: absolute;
          top: 12px;
          bottom: 12px;
          right: 0;
          border-right: 1px dashed #8C8C8C;
        }
    }
    
    &:not(:first-child) {
        @media (min-width: 768px) {
          padding-left: 24px;
        }
        
         @media (min-width: 1366px) {
          padding-left: 32px;
        }
    }
    
    &:not(:last-child) {
        border-bottom: 1px dashed #8C8C8C;
        
        @media (min-width: 768px) {
          padding-right: 24px;
          border-bottom: none;
        }
        
        @media (min-width: 1366px) {
          padding-right: 32px;
        }
    }
`;
const NoCardItemTitle = styled.strong`
    order: 2;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.4;
    white-space: nowrap;
    
    @media (min-width: 768px) {
      display: block;
      margin-bottom: 4px;
      font-size: 20px;
      line-height: 1.6;
      font-weight: 700;
    }
    
    @media (min-width: 1366px) {
      font-size: 24px;
      line-height: 1.4;
    }
`;
const NoCardItemDescription = styled.span`
    order: 1;
    flex-grow: 1;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.7;
    color: #595959;
    
     @media (max-width: 767px) {
        padding-right: 24px;
    }
    
    @media (min-width: 768px) {
        display: block;
        font-size: 16px;
    }
`;
const IssueCardBtn = styled.a`
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    text-decoration: none;
    max-width: 100%;
    padding: 16px 65px;
    font-size: 16px;
    line-height: 1.4;
    border-radius: 6px;
    color: #fff;
    user-select: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: normal;
    border-color: #CC163F;
    background: #CC163F;
    transition: all .15s ease;
    
    @media (min-width: 1366px) {
      padding-left: 48px;
      padding-right: 48px;
    }
    
    &:hover,
    &:focus {
      text-decoration: none;
      color: #fff;
      border-color: #A81235;
      background: #A81235;
    }
`;
const BlockDescription2 = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
    font-size: 14px;
    line-height: 24px;
    color: #848D94;
    padding: 0 0 24px 80px;
    
    & a {
      text-decoration: none;
      color: #B30064;
    }
  }
  
  @media (min-width: 1366px) {
    padding: 0 0 32px 96px;
  }
`;
const InstructionBox = styled.div`
  text-align: left;
  
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  
  @media (min-width: 1024px) {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 0;
  }
  
  @media (min-width: 1366px) {
    margin-top: 56px;
  }
`;
const InstructionBoxHeader = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #3C3C44;
    margin-bottom: 8px;
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
`;
const InstructionBoxText = styled.div`
    font-size: 12px;
    line-height: 24px;
    color: #848D94;
    
    & a {
      text-decoration: none;
      color: #B30064;
    }
    
    @media (min-width: 768px) {
      font-size: 14px;
    }
`;
const NoCardBlockDesk = styled(NoCardBlock)`
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
    margin: 80px 0 40px;
    border-radius: 16px;
  }
  
  @media (min-width: 1366px) {
    padding: 48px 48px 46px;
    background: url(${myLifeCardL}) no-repeat top 19px right, linear-gradient(-47deg, #FFBB33 375px, #FFF6E5 375px);
  }
`;
const NoWrap = styled.span`
    white-space: nowrap;
`;
