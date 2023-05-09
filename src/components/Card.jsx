import React from 'react'
import Conttent from './Conttent'

import Button from './Button'
import nerdImage from '../assets/img/delivery.png'
import { CardContainer,ContentContainer,ButtonContainer } from './style/Container.style';
import {Tag,H1,P,Image} from './style/Element'
import { Title } from './style/Custom.styles';
import {StyleTitle} from './style/Custom.styles';


const Card = () => {

    return (
  <CardContainer>
            <ContentContainer>
           <Tag color="#4361ee">EXCLUSIVE</Tag>
    <StyleTitle>
    <H1>React Styled Component</H1>
    </StyleTitle>
        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, quaerat impedit aut sequi officia perferendis reprehenderit officiis et modi quam repellendus, aliquid harum dolorum ullam magni libero voluptatibus. Quibusdam, aspernatur?</P>
        <ButtonContainer>
                <Button link="https://github.com/AKSUF/ModernReact2.git" text="watch now"/>
                <Button link="https://github.com/AKSUF/ModernReact2.git" text="watch now"/>
        </ButtonContainer>
            </ContentContainer>
<Image src={nerdImage} alt="Nerd" width="380px"/>
</CardContainer>
    )
}

export default Card
