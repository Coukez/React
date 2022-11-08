import './Overview.css';
import WhatEverTheySay from "./Items/WhatEverTheySay";
import { useState } from 'react';
import ComingSoon from './Items/ComingSoon'
import Library from "./Items/Library";

/*
{activetab == 0   ------>    muss "Library" sein
{activetab == 1...------>    muss 1:"overview-items" ersetzen  
                                  2: gewünschten Inhalt anzeigen
                                  3: Möglichkeit zum Zurückkehren zu Tab 0 bieten 
*/
function Overview() {
  const [activetab, setactivetab] = useState(0)
  return (
    <div>

      <div className="main-part">
        {activetab == 0 && <Library onClick={() => {
          setactivetab(1);
          console.log('changedtoactivetab1');
          }} />}
        {activetab == 1 && <WhatEverTheySay onClick={() => setactivetab(2)}title='WhateverTheySay' />}
        {activetab == 2 && <ComingSoon />}
      </div>
    </div>
  );
}

export default Overview;