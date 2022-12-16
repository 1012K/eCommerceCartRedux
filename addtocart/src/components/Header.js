import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className='text-decoration-none text-light mx-3'>Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className='text-decoration-none text-light'>Home</NavLink>

          </Nav>
          <Badge badgeContent={getdata.length} color="primary"

            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i className="fa-thin fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }} />

          </Badge>


        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          {
            getdata.length ?
              <div className='card_details' style={{ width: "24rem" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurent Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`}>
                                <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price: ₹{e.price}</p>
                                <p>Quantity: ₹{e.qnty}</p>
                                <p style={{ color: "red", fontSize: "20", cursor: "pointer" }}>
                                  <i className='fas fa-trash smalltrash'></i>
                                </p>
                              </td>
                              <td className='mt-5' style={{ color: "red", fontSize: "20", cursor: "pointer" }}>
                                <i className='fas fa-trash' largrtrash></i>
                              </td>
                            </tr>
                            <p className='text-center'>Total: 300</p>
                          </>
                        )
                      })

                    }

                  </tbody>
                </table>
              </div> :
              <div className='card_details d-flex justify-content-center align-items-center'>
                <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 30, fontSize: 23, cursor: "pointer" }}
                  onClick={handleClose} />
                <p style={{ fontSize: 18 }}>your cart is empty</p>
                <img src=" data:image/png;base64,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" className='emptycart_img' style={{ height: "40px" }} />
              </div>

          }


        </Menu>
      </Navbar>
    </>
  )
}

export default Header
