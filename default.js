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
import CardItem from './Components/Card/CardItem.jsx';
import CommentBox from './Components/CommentBox/CommentBox.jsx';
import TabSet from './Components/TabSet/TabSet.jsx';
import TabSection from './Components/TabSet/TabSection.jsx';
import SubscribeForm from './Components/SubscribeForm/SubscribeForm.jsx';
import Playlist from './Components/Playlist/Playlist.jsx';
import PlaylistItem from './Components/Playlist/PlaylistItem.jsx';

//Define constants for each Component
//const variableName = document.getElementById('dom-node');
const mainNav = document.getElementById('nav');
const accordion = document.getElementById('accordion');
const icon = document.getElementById('icon');
const cardlist = document.getElementById('cardlist');
const carousel = document.getElementById('carousel');
const card_1 = document.getElementById('card1');
const card_2 = document.getElementById('card2');
const card_3 = document.getElementById('card3');
const commentBox = document.getElementById('commentbox');
const tabset = document.getElementById('tabset');
const subscribeform = document.getElementById('subscribeform');
const playlist = document.getElementById('playlist');


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

ReactDOM.render(<Cardlist>
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
  <Card title="Card Title">
    <CardItem/>
</Card>, card_1);

ReactDOM.render(
  <Card title="Card Title">
  <Media title="Media Title">
      <Icon name="media1" title="media icon" desc="a media icon"/>
  </Media>
  </Card>, card_2);

ReactDOM.render(
<Card title="Card Title" />, card_3);

ReactDOM.render(
<CommentBox/>, commentBox);

ReactDOM.render(
<TabSet>
    <TabSection title="a">
        <Media title="Media Title 1">
            <Icon name="media1" title="media icon" desc="a media icon"/>
        </Media>
    </TabSection>
    <TabSection title="b">
        <Media title="Media Title 2">
            <Icon name="media1" title="media icon" desc="a media icon"/>
        </Media>
    </TabSection>
    <TabSection title="c">
        <Media title="Media Title 3">
            <Icon name="media1" title="media icon" desc="a media icon"/>
        </Media>
    </TabSection>
    <TabSection title="d">
        <Media title="Media Title 4">
            <Icon name="media1" title="media icon" desc="a media icon"/>
        </Media>
    </TabSection>
</TabSet>, tabset);

ReactDOM.render(
<SubscribeForm/>, subscribeform);

ReactDOM.render(
<Playlist>
    <PlaylistItem title="Song Title 1" artist="Artist 1" duration="3:50"/>
    <PlaylistItem title="Song Title 2" artist="Artist 2" duration="5:00"/>
    <PlaylistItem title="Song Title 3" artist="Artist 3" duration="2:55"/>
    <PlaylistItem title="Song Title 4" artist="Artist 4" duration="7:50"/>
    <PlaylistItem title="Song Title 5" artist="Artist 5" duration="4:50"/>
    <PlaylistItem title="Song Title 6" artist="Artist 6" duration="3:50"/>
</Playlist>, playlist);


// ReactDOM.render(
//   <Icon name='dribbble'
//     title='dribble Icon'
//     desc='A dribble Icon'/>, icon);
