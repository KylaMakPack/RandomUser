import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

//export default function App() {
const App = () => {
  const [Users, fetchUsers] = useState([])

  const url = 'https://randomuser.me/api/?results=5000'

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)
        //console.log(res.results)
        //console.log(res.results[0])
        fetchUsers(res.results)
      })
  }

  useEffect(() => {
    getData()
    
  }, [])

    return(
      Users
    ) 
};

const Main = () => {
  const holdUsers = App();
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Main page</h1>
        <div>
          <table className="table table-striped">
            <tbody id="myTable">
              <tr className="bg-info">
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>City/Country</th>
              </tr>
              
              {holdUsers.map((item) => {
                return (
                  <tr key={item.id.value}>
                    <td><Link to='/details'>{item.name.first}</Link></td>
                    <td><Link to='/details'>{item.name.last}</Link></td>
                    <td>{item.email}</td>
                    <td>
                      <p>{item.location.city}/ <span>{item.location.country}</span></p>
                    </td>
                  </tr> 
                )
              })}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
};

const Details = () => {
  const indivUser = App();
	return (
		<div>
				<h1>Details Page</h1>
				<Link to='/'>Go to Main Page</Link>
        <p>I am at the about page now</p>
        return (
        <div className="App">
        <header className="App-header">
        
        {indivUser.map((item) => {
          return (
            <div key={item.uniqueId}>
              <img src={item.picture.large} alt="pic" />
              <div>{item.name.first}</div>
              <div>{item.name.last}</div>
              <div>{item.email}</div>
              <div>{item.location.street.number} 
                <span> {item.location.street.name},</span>
                <br></br>
                <span> {item.location.city},</span>
                <span> {item.location.state},</span>
                <span> {item.location.country},</span>
                <span> {item.location.postcode}</span>
              </div>
              <div>{item.phone}</div>
              <div>{item.cell}</div>
              <div>{item.dob.date}</div>
            </div>
          )
         })}
       </header>
     </div>
		</div>
	)
};

export {App, Main, Details } ;
