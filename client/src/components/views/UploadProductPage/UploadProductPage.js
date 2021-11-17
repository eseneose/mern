import React, {useState} from "react";
import { Typography, Button, Form, Message, Input, Icon } from 'antd';


const {Title} = Typography;
const {TextArea} = Input; 
const Continents =[
    {key:1, value:'Africa'},
    {key:1, value:'Europe'},
    {key:1, value:'Asia'},
    {key:1, value:'North America'},
    {key:1, value:'South America'},
    {key:1, value:'Australia'},
    {key:1, value:'Antarctica'}
]


export default function UploadProductPage() {

const [titleValue, setTitleValue] = useState('');
const [descriptionValue, setDescriptionValue] = useState('');
const [priceValue, setPriceValue] = useState(0);
const [continentsValue, setContinentValue] = useState(1);

const onTitleChange =(event) =>{
    setTitleValue(event.currentTarget.value)

}

const onDescriptionChange=(event)=>{
    setDescriptionValue(event.currentTarget.value)

}

const onPriceChange = (event)=>{
    setPriceValue(event.currentTarget.value)
}

const onContinentsSelectChange = (event =>{
    setContinentValue(event.currentTarget.value)
})


  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>UploadProductPage</h2>
      </div>

      <Form onSubmit>
        {/* drop zone */}

        <br />
        <br />
        <label> Title</label>
        <Input onChange={onTitleChange} value={titleValue} />
        <br />
        <br />
        <label> Description</label>
        <TextArea onChange={onDescriptionChange} value={descriptionValue}></TextArea>
        <br />
        <br />
        <label> Price($)</label>
        <Input onChange={onPriceChange} value={priceValue} type="number" />
        <select onChange={onContinentsSelectChange}>
        {Continents.map(item =>(
              <option key={item.key} value={item.key}>
{item.value}
              </option>
        ))}
        </select>
        <br />
        <br />

        <Button onClick>Submit</Button>
      </Form>
    </div>
  );
}
