import React from 'react'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// // import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



// function Reviews() {
//   return (
//    <>
//    <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
          
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//        <SwiperSlide>
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="./images/1.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>   
//         </SwiperSlide>


//         <SwiperSlide> <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="./images/1.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card></SwiperSlide>


//         <SwiperSlide> <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="./images/1.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card></SwiperSlide>


//         <SwiperSlide> <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="./images/1.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card></SwiperSlide>
        
        
        
//       </Swiper></>
//   )
// }

// export default Reviews



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
<div className='mainswiper'>
<div className='swiperinner'>
<section id='section2'>
<h1>Get inspired by someone like you</h1>
        </section>
  <h2>Who is now living their dream at top-tech companies</h2>
</div>


<div className='swipercenter'>

<Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="./images/review3.jpg" />
       <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
        </SwiperSlide>



        <SwiperSlide>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="./images/review3.jpg" />
       <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
        </SwiperSlide>



        <SwiperSlide>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="./images/review3.jpg" />
       <Card.Body>
         <Card.Title>Henry</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
        </SwiperSlide>





        <SwiperSlide>

         <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="./images/review3.jpg" />
       <Card.Body>
         <Card.Title>Elon</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
        </SwiperSlide>



        <SwiperSlide>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="./images/review3.jpg" />
       <Card.Body>
         <Card.Title>Jiss</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
        </SwiperSlide>




      </Swiper>

</div>

     
      <div className='swiperbutton'><button>read more</button>  </div>

      <div className='circulebutton'>< a  href="#top"><button type='button'>TOP</button></a> </div>
      </div>
    </>
  );
}

