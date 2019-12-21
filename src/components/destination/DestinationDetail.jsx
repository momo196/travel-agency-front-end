import React from 'react' ;
const DestinationDetail = ({dest,DeleteDestination}) => (
                                            <tr key={dest.id}>
                                            {console.log(dest.id)}
                                                <td>{dest.id}</td>
                                                <td>{dest.nom}</td>
                                                <td>{dest.description}</td>
                                                <td><button className="btn btn-success" >Update</button></td>
                                                <td><button  onClick ={ ()=>DeleteDestination(dest.id) } className="btn btn-warning" >Delete</button></td>
                                            </tr>

);



export default DestinationDetail ;