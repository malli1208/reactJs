import React, { Component } from 'react';
import customData from './../data.json';


//console.log(customData[8].id);

class UserForm extends Component {


  render() {

    // customData.map(funtion(item){
    //    console.log(item);
    // });
// var obj = JSON.parse(customData);
console.log(typeof(customData));
console.log(customData[0].id);

//var dataObj = JSON.parse(customData);

//function lists

    return (
      <div>
        <div>
          <label>Enter your Id:</label> <input type="text" ref="id" />
          <input type="submit" value="Fetch Details" />
        </div>
        <div className="dataGrid">
          {function (){ return('mallikarjuna'); }}
        </div>
      </div>
    );
  }
}

export default UserForm;
