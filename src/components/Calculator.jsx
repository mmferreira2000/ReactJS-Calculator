import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
  return (
    <div>
      <Box m={5}/>
      <Container maxWidth="xs">
        <div className="wrapper">
        <Box m={10}/>
          <h1 className='result'>01</h1>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className='orange'>÷</button>
          <button className='gray'>7</button>
          <button className='gray'>8</button>
          <button className='gray'>9</button>
          <button className='orange'>×</button>
          <button className='gray'>4</button>
          <button className='gray'>5</button>
          <button className='gray'>6</button>
          <button className='orange'>-</button>
          <button className='gray'>1</button>
          <button className='gray'>2</button>
          <button className='gray'>3</button>
          <button className='orange'>+</button>
          <button className='gray'>0</button>
          <button className='gray'>.</button>
          <button className='orange'>=</button>
        </div>
      </Container>
    </div>
  )
}
