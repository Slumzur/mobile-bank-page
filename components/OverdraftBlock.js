import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { getEvent } from "./LoginAndRegistrationBlock";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { StepsSlider } from "./StepsSlider";
import { stepsSlider } from "../mocks";

export const OverdraftBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block91" getEvent={getEvent}>
                            <ContainerForContent>
                                Онлайн оформление овердрафта
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block91" items={stepsSlider['block91']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block92" getEvent={getEvent}>
                            <ContainerForContent>
                                Управление овердрафтом
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block92" items={stepsSlider['block92']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block93" getEvent={getEvent}>
                            <ContainerForContent>
                                Закрытие овердрафта
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block93" items={stepsSlider['block93']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};