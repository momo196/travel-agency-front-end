import  React, { useState,useEffect } from 'react'
import DestinationService from '../../Services/DestinationService';
import DestinationList from './DestinationList';

 const Destination  = (props) => {

    const [destination , setDestination] = useState([]);
    const [DeletedMessage,setDeletedMessage] = useState('');

    const refreshDestination = () => {
        DestinationService.retrieveAllDestination()
        .then(
            response => {
                console.log(response);
                setDestination( 
                    response.data
                )
            }
        )
    } 
    const DeleteDestination = (id) => {
        DestinationService.deleteCourse(id)
        .then(
            response => {
                setDeletedMessage( `Delete of destination ${id} Successful` )
                refreshDestination()
            }
        )
    }

    useEffect ( ()=> {
        refreshDestination();
    }

    ,[]);
        
      return (
            
               <div className="container">
                    <h3>All destinations</h3>
                    <div className="container">

                        <h3>{DeletedMessage}</h3>
                        <DestinationList 
                        DeleteDestination ={DeleteDestination} 
                        destination = {destination} />   
                
                    </div>
                    <div className="row">
                        <button className="btn btn-success" >Add a destination</button>
                    </div>
                </div>
        )
   
}
export default Destination ;
