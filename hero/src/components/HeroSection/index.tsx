import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { AdvantageItem } from "../AdvantageItem";
import { Advantages, Description, HeroSectionContainer, Title } from "./styles";

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <div>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Description>
            Com o Coffee Delivery você recebe seu café onde estiver, a
            qualquer hora
          </Description>
        </div>

        <Advantages>
          <AdvantageItem icon={ShoppingCart} bgColor="#C47F17">
            <p>Compra simples e segura</p>
          </AdvantageItem>

          <AdvantageItem icon={Package} bgColor="#574F4D">
            <p>Embalagem mantém o café intacto</p>
          </AdvantageItem>

          <AdvantageItem icon={Timer} bgColor="#DBAC2C">
            <p>Entrega rápida e rastreada</p>
          </AdvantageItem>

          <AdvantageItem icon={Coffee} bgColor="#8047F8">
            <p>O café chega fresquinho até você</p>
          </AdvantageItem>
        </Advantages>
      </div>
      <img src="bg-hero.png" alt="" />
    </HeroSectionContainer>
  )
}