import React from 'react'
import Footer from '../../containers/footer';
import Header from '../../containers/header';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


const HomePage = () => {
  return (
    <div className="page-wrapper">

      <Header />
      <div className="home-slider">
        <img src="https://picsum.photos/1921" alt="" />
      </div>


      <div className="about-us-1 row align-items-center ">
        <div className="col">
          <img src="https://picsum.photos/800/730" alt="" />
        </div>
        <div className="col py-5">
          <h6 className="mt-5">ABOUT US</h6>
          <h1 className="">India celebrate Exploration</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi maiores enim illo nostrum nisi explicabo ea tenetur adipisci voluptatum quibusdaminima pariatur distinctio!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi maiores enim illo nostrum nisi explicabo ea tenetur adipisci voluptatum e atque minima pariatur distinctio!</p>
          <button className="btn btn-dark rounded-pill px-4">VIEW MORE</button>
        </div>
      </div>


      <div className="our-mission" >
        <h5 className="">OUR MISSION</h5>
        <h1 className="heading">To lead the Infotainment Media Revolution</h1>
        <hr className="divider"/>
        <p className="text-center w-50">Lorem ipsum dolor sit amet enderit atque eius incidunt earum quam a praesentium laborum maiores.</p>

        <div className="row justify-content-evenly">
          <div className="col-md-4 d-flex flex-column align-items-center" style={{ width: "18rem" }}>
            <h1 className="number">265</h1>
            <hr className='lines' />
            <p className="text-center" style={{ fontWeight: "900" }}>Conserved Species</p>
            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet t. Aperiam, corrupti.</p>
            <button className="btn btn-outline-dark mt-4 rounded-0">DISCOVER</button>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center" style={{ width: "18rem" }}>
            <h1 className="number">265</h1>
            <hr className='lines' />
            <p className="text-center" style={{ fontWeight: "900" }}>Conserved Species</p>
            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet t. Aperiam, corrupti.</p>
            <button className="btn btn-outline-dark mt-4 rounded-0">DISCOVER</button>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center" style={{ width: "18rem" }}>
            <h1 className="number">265</h1>
            <hr className='lines' />
            <p className="text-center" style={{ fontWeight: "900" }}>Conserved Species</p>
            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet t. Aperiam, corrupti.</p>
            <button className="btn btn-outline-dark mt-4 rounded-0">DISCOVER</button>
          </div>
        </div>
      </div>



      <div className="about-us-2 row vh-100  align-items-center bg-white">

        <div className="col p-5">
          <h6 className="m-5">ABOUT US</h6>
          <h1 className="mx-5">India celebrate Exploration</h1>
          <p className="mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi maiores enim illo nostrum nisi explicabo ea tenetur adipisci ve atque minima pariatur distinctio!</p>
          <p className="mx-5">Lorem ipsum dolor siporibus inventore atque minima pariatur distinctio!</p>
          <button className="btn btn-dark rounded-pill px-4 mx-5">VIEW MORE</button>
        </div>
        <div className="col">
          <img src="https://picsum.photos/800/730" alt="" />
        </div>
      </div>


      <div className="comments d-flex flex-column align-items-center  bg-dark" >
        <img src="https://picsum.photos/150" className="rounded-circle" alt="" />
        <h3 style={{ textAlign: "center" }} className="my-3">"Lorem ipsum dopisicing elit. Impedit pariatur reprehenderit accusamus illum assumenda commodi!"</h3>
        <h4>SATYA NADELLA</h4>
        <h6>CEO microsoft</h6>
        <div className="slider">
          <div className="dot"></div>
          <div className="dot" style={{backgroundColor:"orange"}}></div>
          <div className="dot"></div>
        </div>
      </div>


      <div className="explorers row vh-100  align-items-center">
        <div className="col">
          <img src="https://picsum.photos/800/730" alt="" />
        </div>
        <div className="col py-5">
          <h6 className="mt-5">EXPLORERS</h6>
          <h1 className="">Impactful programs for a global community of Changemakers</h1>
          <hr className="w-25" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi maiores enim illo nostrum nisi explicabo ea tenetur adipisci voluptatum quibusdam quaerat eos sunt magni, sit distinctio accusantium saepe. Ad aut omnis magni dolores temporibus inventore atque minima pariatur distinctio!</p>
          <button className="btn btn-dark rounded-pill px-4">VIEW MORE</button>
        </div>

      </div>


      <div className="home-pricing d-flex flex-column align-items-center py-5">
        <p className="">OUR SYMBOL</p>
        <h1>Never Seen Before Pricing</h1>
        <hr className="" />
        <div className=" cards">
          <List component="nav" className="card card_left" aria-label="contacts">
            <ListItem button className="card-header">
              <ListItemText id="switch-list-label-wifi"  className='py-2 ps-3' primary="Premium" />
              <ListItemSecondaryAction>
                <ListItemText id="switch-list-label-wifi" className="text-white py-2 pe-3" primary="$1" />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button className="border-bottom">
              <ListItemText primary="DAILY" className="text-center fw-bold py-2" />
            </ListItem>
            <ListItem button className="border-bottom">
              <ListItemText primary="Full access to IMS network" className="text-center py-2" />
            </ListItem>
            <ListItem button className=" border-bottom">
              <ListItemText primary="HD streaming" className="text-center py-2" />
            </ListItem>
            <ListItem button className=" border-bottom">
              <ListItemText primary="10 free" className="text-center py-2" />
            </ListItem>
            <ListItem button >
              <ListItemText primary="Best Choice" className="text-center py-2" />
            </ListItem>
          </List>


          <List component="nav" className="card card_mid" aria-label="contacts">
            <ListItem button className="card-header-mid">
              <ListItemText id="switch-list-label-wifi"  className='py-2 ps-3' primary="Premium" />
              <ListItemSecondaryAction>
                <ListItemText id="switch-list-label-wifi"  className="py-2 pe-3 text-white" primary="$20" />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button className="border-bottom">
              <ListItemText primary="DAILY"  className="py-2 text-center fw-bold" />
            </ListItem>
            <ListItem button className="border-bottom">
              <ListItemText primary="Full access to IMS network"  className="py-2 text-center" />
            </ListItem>
            <ListItem button className=" border-bottom">
              <ListItemText primary="HD streaming"  className="py-2 text-center" />
            </ListItem>
            <ListItem button className=" border-bottom">
              <ListItemText primary="10 free"  className="py-2 text-center" />
            </ListItem>
            <ListItem button >
              <ListItemText primary="Best Choice"  className="py-2 text-center" />
            </ListItem>
            <div className="sticker">MOST POPULAR</div>
          </List>


          <List component="nav" className="card card_right" aria-label="contacts">
            <ListItem button className="card-header">
              <ListItemText id="switch-list-label-wifi" className='py-2 ps-3' primary="Premium" />
              <ListItemSecondaryAction>
                <ListItemText id="switch-list-label-wifi" className="text-white py-2 p-3" primary="$200" />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button className="border-bottom">
              <ListItemText primary="DAILY" className="text-center fw-bold py-2" />
            </ListItem>
            <ListItem button className="border-bottom">
              <ListItemText primary="Full access to IMS network" className="text-center py-2" />
            </ListItem>
            <ListItem button className=" border-bottom">
              <ListItemText primary="HD streaming" className="text-center py-2" />
            </ListItem>
            <ListItem button className=" border-bottom">
              <ListItemText primary="10 free" className="text-center py-2" />
            </ListItem>
            <ListItem button >
              <ListItemText primary="Best Choice" className="text-center py-2" />
            </ListItem>
          </List>
        </div>
        <button className="btn btn-dark rounded-pill px-4">VIEW MORE</button>
      </div>
      <div className="our-network">
        <h3>Our Networks</h3>
        <div className="brands">
        <img src="https://picsum.photos/150" className="rounded-circle" alt="" />
        <img src="https://picsum.photos/151" className="rounded-circle" alt="" />
        <img src="https://picsum.photos/152" className="rounded-circle" alt="" />
        <img src="https://picsum.photos/153" className="rounded-circle" alt="" />
        <img src="https://picsum.photos/154" className="rounded-circle" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;