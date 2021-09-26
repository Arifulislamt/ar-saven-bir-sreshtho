import React, { useEffect, useState } from 'react';
import AllDetails from '../AllDetails/AllDetails';
import Total from '../Total/Total';
import './Main.css';

// api data loaded and show work 
const Main = () => {
    const [parson, setParson] = useState([]);
    
    useEffect(()=>{
        fetch('./parson.JSON')
        .then(res => res.json())
        .then(data => setParson(data))
    },[])

    // button hendlear 
    const [detail, setDetail] =useState([]);

    const handleAddToCard = addParson => {
        const newDetail = [...detail, addParson]
        setDetail(newDetail);
    }
    
    // total sam 
    let total = 0;
    for(const parson of detail){
        total = total + parson.freedomFighterAllowance;
    }

    return (
       <div className="container">
            <div className="row ">
            <div className="col-md-9">
          <div className="row">
          {
                parson.map(parson => <AllDetails 
                    key={parson.key}
                    parson={parson}
                    handleAddToCard={handleAddToCard}
                    ></AllDetails>)
            }
          </div>
            </div>
            <div className="col-md-3">
                <div className="mt-4 p-3 total-cound shadow-lg">
                    <h3 className="text-center border-bottom border-dark">Add Detail</h3>
                <p><i className="fas fa-user-alt"></i> Parson Added: {detail.length}</p>
                <p><i className="fas fa-search-dollar"></i> Total Allowance: ${total}</p>
                </div>
                {
                    detail.map(detail => <Total 
                        key={detail.key}
                        detail={detail} 
                        ></Total>)
                }
                
            </div>
        </div>
       </div>
    );
};

export default Main;