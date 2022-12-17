import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import CardsData from './CardsData';
import './style.css';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(CardsData);
  //console.log(data);

  const dispatch =useDispatch();

  const send =(e)=>{
   //console.log(e);

    dispatch(ADD(e));

  }

  return (

    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>
      <div className='row d-flex justify-content-center align-item-center'>
        {
          data.map((ele, id) => {
            return (
            <>
              <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={ele.imgdata} style={{ height: "16rem" }} className=" mt-3" />
                <Card.Body>
                  <Card.Title>{ele.rname}</Card.Title>
                  <Card.Text>
                    Price: ₹ {ele.price }
                  </Card.Text>
                  <div className='button_div d-flex justify-content-center'>
                    <Button variant="primary" 
                    onClick={()=> send(ele)}
                    className='col-lg-12'>Add to Cart</Button>
                  </div>

                </Card.Body>
              </Card>

            </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards
