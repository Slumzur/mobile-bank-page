import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "react-components-library";
import { getEvent } from "./LoginAndRegistrationBlock";
import { BottomBorder } from "./HowToUse";
import { ContainerForContent } from "./HowToUse";
import { StepsSlider } from "./StepsSlider";
import { stepsSlider } from "../mocks";

export const InformationBlock = (props) => {
    return (
        <accordionstories___StyledDiv>
            <div>
                <BottomBorder>
                    <Accordion>
                        <AccordionHeader id="block101" getEvent={getEvent}>
                            <ContainerForContent>
                                Справки для госслужащих
                            </ContainerForContent>
                        </AccordionHeader>
                        <AccordionBody>
                            <ContainerForContent>
                                <StepsSlider id="block101" items={stepsSlider['block101']} tabIndex={props.tabIndex} />
                            </ContainerForContent>
                        </AccordionBody>
                    </Accordion>
                </BottomBorder>
            </div>
        </accordionstories___StyledDiv>
    );
};