//import react core
import React from 'react';
import ReactDOM from 'react-dom';

//import individual Components
//import ComponentName/ from './PATH/TO/Component.jsx';
import MainNav from './Components/MainNav/MainNav.jsx';
import MainNavForm from './Components/MainNav/MainNavForm.jsx';
import Accordion from './Components/Accordion/Accordion.jsx';
import AccordionSection from './Components/Accordion/AccordionSection.jsx';
import Media from './Components/Media/Media.jsx';
import Icon from './Components/Icon/Icon.jsx';
import Cardlist from './Components/Cardlist/Cardlist.jsx';
import CardlistItem from './Components/Cardlist/CardlistItem.jsx';
import Carousel from './Components/Carousel/Carousel.jsx';
import CarouselItem from './Components/Carousel/CarouselItem.jsx';
import Card from './Components/Card/Card.jsx';
import CommentBox from './Components/CommentBox/CommentBox.jsx';


//Define constants for each Component
//const variableName = document.getElementById('dom-node');
const mainNav = document.getElementById('nav');
const accordion = document.getElementById('accordion');
const icon = document.getElementById('icon');
const cardlist = document.getElementById('cardlist');
const carousel = document.getElementById('carousel');
const card = document.getElementById('card');
const commentBox = document.getElementById('commentbox');



//Render each Component to the DOM
//ReactDOM.render(<Component/>, dom-node);

ReactDOM.render(<MainNav>
  <MainNavForm />
</MainNav>, nav);

ReactDOM.render(<Accordion>
  <AccordionSection title="Accordion Title 1">
    <Media title="Media Title 1">
       <Icon name="media1" title="media icon" desc="a media icon"/>
    </Media>
  </AccordionSection>
  <AccordionSection title="Accordion Title 2">
      <Media title="Media Title 2">
         <Icon name="media1" title="media icon" desc="a media icon"/>
      </Media>
  </AccordionSection>
  <AccordionSection title="Accordion Title 3">
      <Media title="Media Title 3">
         <Icon name="media1" title="media icon" desc="a media icon"/>
      </Media>
  </AccordionSection>
  <AccordionSection title="Accordion Title 4">
      <Media title="Media Title 4">
         <Icon name="media1" title="media icon" desc="a media icon"/>
      </Media>
  </AccordionSection>
  <AccordionSection title="Accordion Title 5">
      <Media title="Media Title 5">
         <Icon name="media1" title="media icon" desc="a media icon"/>
      </Media>
  </AccordionSection>
</Accordion>, accordion);

ReactDOM.render(<Cardlist activeItem={2}>
   <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="black.jpg">
       <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" size="sm" color="white"/>
        <Icon name="share" title="share icon" desc="a share icon" color="white" size="sm"/>
        <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
   </CardlistItem>
   <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="blue.jpg">
       <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" className="Icon_sm Icon_white"/>
        <Icon name="share" title="share icon" desc="a share icon" className="Icon_sm Icon_white"/>
        <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
   </CardlistItem>
   <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="orange.jpg">
       <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" color="white" size="sm" />
        <Icon name="share" title="share icon" desc="a share icon" color="white" size="sm" />
        <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
   </CardlistItem>
   <CardlistItem title="Card Title" subtitle="Card Subtitle/Author" details="extra details..." image="yellow.jpg">
       <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" color="white" size="sm" />
        <Icon name="share" title="share icon" desc="a share icon" color="white" size="sm" />
        <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="sm" />
   </CardlistItem>
  </Cardlist>, cardlist);


ReactDOM.render(<Carousel>
 <CarouselItem>
     <Media title="Media Title 1">
         <Icon name="media1" title="media icon" desc="a media icon"/>
     </Media>
 </CarouselItem>
 <CarouselItem>
     <Media title="Media Title 2">
         <Icon name="media1" title="media icon" desc="a media icon"/>
     </Media>
 </CarouselItem>
 <CarouselItem>
     <Media title="Media Title 3">
         <Icon name="media1" title="media icon" desc="a media icon"/>
     </Media>
 </CarouselItem>
 <CarouselItem>
     <Media title="Media Title 4">
         <Icon name="media1" title="media icon" desc="a media icon"/>
     </Media>
 </CarouselItem>
</Carousel>, carousel);


ReactDOM.render(
  <Card title="Card Title"/>, card);

ReactDOM.render(
<CommentBox/>, commentBox);


// ReactDOM.render(
//   <Icon name='dribbble'
//     title='dribble Icon'
//     desc='A dribble Icon'/>, icon);
