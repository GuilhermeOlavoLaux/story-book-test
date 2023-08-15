import Button from "./Button";

export interface CardProps {
  title: string;
  description: string;
  wasCompleted: boolean;
}

function Card({ title, description, wasCompleted }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      {wasCompleted && <p>Tarefa completa</p>}
      <Button
        primary
        size="small"
        label={"Coca Cola Primario"}
        onClick={() => console.log("a")}
      ></Button>
    </div>
  );
}

export default Card;
