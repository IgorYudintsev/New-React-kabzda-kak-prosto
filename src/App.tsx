import React, {useState} from 'react';
import Accordion from './components/Accordion/Accordion'
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnConrolledRating from "./components/UnConrolledRating/UnConrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    let [ratingValue,setRatingValue]=useState<RatingValueType>(4);
    let[accordionCollapsed,setAccordionCollapsed]=useState(false);
    let[on,setOn]=useState<boolean>(false)
    return (
        <div>
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            <Accordion titleValue={'MENU'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>

            <PageTitle title={' This is App component'}/>

            {/*<OnOff ValueOn={on} changeOn={()=>setOn(!on)} />*/}

            <UncontrolledOnOff onChange={setOn} />{on.toString()}

            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<UnConrolledRating />*/}
            {/*<UnConrolledRating />*/}
            {/*<UnConrolledRating />*/}
            {/*<UnConrolledRating />*/}
            {/*<UnConrolledRating />*/}


            {/*<Accordion titleValue={'MENU'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'USERS'} collapsed={false}/>*/}
            {/*<UnControlledAccordion titleValue={'MENU'} />*/}
            {/*<UnControlledAccordion titleValue={'USERS'} />*/}

        </div>
    );
}

type PageTitle = {
    title: string;
}

function PageTitle(props: PageTitle) {
    return (
        <div>
            <h3>This is App component</h3>
        </div>
    )
}


export default App;
