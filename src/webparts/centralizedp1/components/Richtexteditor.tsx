import { DefaultButton, IconButton, Modal, Popup } from 'office-ui-fabric-react';
import * as React from 'react';

export default function Centralizedp(){
    const [show, setShow] = React.useState(false);
     return(
        <div>
        <p>Test Text</p>
                <DefaultButton  onClick={()=>setShow(true)}/>
                
                <Modal   isBlocking={false}   >
                    <div >
                        <span >Lorem Ipsum</span>
                        <IconButton  ariaLabel="Close popup modal" onClick={()=>setShow(false)} />
                    </div>
                    <div >
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </Modal>
    </div>
     )
}