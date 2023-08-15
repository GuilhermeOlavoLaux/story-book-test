import { StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";
import "../components/Button.css";

export default {
  // grupo que o componente se encontra
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

// Uma variação da hitória -> Botão com estilo primário
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Coca Cola Primario",
};

// Uma variação da hitória -> Botão com estilo secundário
export const Secundary = Template.bind({});
Secundary.args = {
  primary: true,
  label: "Coca Cola Secundario",
};
