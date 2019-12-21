import React from 'react' ;
import DestinationDetail from './DestinationDetail';

const DestinationList = ({destination,DeleteDestination}) => (
    
         <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            { console.log(" destination = ",destination)}
                                { destination.map( dest =>
                                <DestinationDetail DeleteDestination = {DeleteDestination}  key = {dest.id} dest = {dest} /> 
                                )
                            }
                            </tbody>
        </table>

);
export default DestinationList;