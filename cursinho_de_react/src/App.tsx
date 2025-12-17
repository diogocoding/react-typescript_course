import { useState } from "react";

//componente de card

interface ICardProps {
  title: string
}
const Card = (props: ICardProps) => {
  return (
    <div style = {{ border: '2px solid black' }}>
    <span> Title: {props.title} </span>
    <div>Context</div>
    <div>Footer</div>
    </div>
  );
}

export function App() {
  return (
    <div>
    <p>Olá</p>

    <p>Card:</p>

    <Card title='meu primeiro card' />
    <Card title='Teste'/>
    <Card title='Teste'/>
    <Card title='Teste'/>
    <Card title='Teste'/>
    <Card title='Teste'/>
    <Card title='Teste'/>
    <Card title='Teste'/>
    <Card title='Teste'/>
    <Card title='Teste'/>
    
    </div>
  );
}