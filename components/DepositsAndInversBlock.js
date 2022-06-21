import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import {getEvent} from "./LoginAndRegistrationBlock";
import { StepsSlider } from "./StepsSlider";
import { stepsSlider } from "../mocks";

export const DepositsAndInversBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block61" getEvent={getEvent}>
                            <ContainerForContent>
                                Онлайн-открытие вклада
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block61" items={stepsSlider['block61']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block63" getEvent={getEvent}>
                            <ContainerForContent>
                                Опция «Больше плюсов»
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block63" items={stepsSlider['block63']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block64" getEvent={getEvent}>
                            <ContainerForContent>
                                Пополнение вкладов
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block64" items={stepsSlider['block64']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block65" getEvent={getEvent}>
                            <ContainerForContent>
                                Снятие средств со вклада
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block65" items={stepsSlider['block65']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block66" getEvent={getEvent}>
                            <ContainerForContent>
                                Перевод со вклада до востребования
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block66" items={stepsSlider['block66']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block67" getEvent={getEvent}>
                            <ContainerForContent>
                                Закрытие накопительного счета
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block67" items={stepsSlider['block67']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block68" getEvent={getEvent}>
                            <ContainerForContent>
                                Онлайн-инвестиции
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block68" items={stepsSlider['block68']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};

