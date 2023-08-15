import { StoryFn } from "@storybook/react";
import Card, { CardProps } from "../components/Card";
import "../components/Card.css";

export default {
  // grupo que o componente se encontra
  title: "Components/Card",
  component: Card,
};

const Template: StoryFn<typeof Card> = (args: CardProps) => <Card {...args} />;

// Uma variação da hitória -> Cria um card completo
export const Primary = Template.bind({});
Primary.args = {
  title: "Coca Cola",
  description: "Sou a descrição do card",
  wasCompleted: true,
};

// Uma variação da hitória -> Cria um card incompleto
export const Secundary = Template.bind({});
Secundary.args = {
  title: "Coca Cola",
  description: "Sou a descrição do card",
  wasCompleted: false,
};
