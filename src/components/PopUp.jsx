import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PopUp = (props) => {


const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

//Hnadling date filter
    function handleFilter(){
        props.setTrigger(false);
        props.setItems(
        props.items.filter(item => new Date(item.join_date).getFullYear() >= startDate.getFullYear() && new Date(item.join_date).getFullYear() <= endDate.getFullYear()));
        console.log(startDate.getFullYear())
    }

  function closePopUp() {
    props.setTrigger(false);
  }
// Reseting date in filter
  function resetDate(){
    setStartDate(null);
    setEndDate(null);
    props.setItems(props.user);
    props.setTrigger(false);

  }
// Reseting data in Items
  function reset(){
    props.items.sort(((a,b)=> a.uid > b.uid ? 1 : -1)).map(task => task);
    props.setTrigger(false);
  }

// Sorting data based on Twubric score
  function sortByTwubric() {
    props.items.sort(((a,b)=> a.twubric.total > b.twubric.total ? 1 : -1)).map(task => task)
  }

// Sorting data based on Chirpiness score
  function sortByChirpiness() {
    props.items.sort(((a,b)=> a.twubric.chirpiness > b.twubric.chirpiness ? 1 : -1)).map(task => task)
  }

// Sorting data based on friends score
  function sortByFriends() {
    props.items.sort(((a,b)=> a.twubric.friends > b.twubric.friends ? 1 : -1)).map(task => task)
  }

// Sorting data based on Influence score
  function sortByInfluence() {
    props.items.sort(((a,b)=> a.twubric.influence > b.twubric.influence ? 1 : -1)).map(task => task)
  }
  

  return props.trigger ? (
    <div className="popup">
      <div className="bg-white p-3 flex flex-col justify-center items-center lg:w-2/12 rounded-lg">
        <h2 className="my-4 font-semibold text-lg">Date Filter</h2>
      <div className="flex">
        <div className="">
            <label className="my-4">Start Date:</label>{' '}
            <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
            className="bg-gray-500 p-1 rounded-md w-9/12 text-white"
            />
        </div>
        <div>
            <label>End Date:</label>{' '}
            <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select end date"
            className="bg-gray-500 p-1 rounded-md w-9/12 text-white"
            />
        </div>
        </div>
            <div className="flex justify-between items-center mt-4 w-11/12">
            <button className="close font-semibold text-blue-700" onClick={resetDate}>
                Reset Date
            </button>
            <button className="close border border-slate-600 rounded-md p-1 hover:bg-blue-400" onClick={handleFilter}>
                Apply Filter
            </button>
        </div>
        {/* Options to choose and filter data */}
      <p className="my-4 font-semibold text-lg">Criteria</p>
      <select className="bg-gray-500 p-1 rounded-md w-11/12 mb-4"
       onChange={(e) => {
          const selectedOption = e.target.value;
          switch(selectedOption) {
            case "Twubric Score":
              sortByTwubric();
              break;
            case "chirpiness":
              sortByChirpiness();
              break;
            case "friends":
              sortByFriends();
              break;
            case "influence":
                sortByInfluence();
              break;
            default:
              break;
          }
        }}>
        <option value="">Select...</option>
        <option value="Twubric Score">Twubric Score</option>
        <option value="chirpiness">chirpiness</option>
        <option value="friends">friends</option>
        <option value="influence">influence</option>
      </select>
      <div className="flex justify-between items-center w-11/12">
            {/* Button to reset data Items  */}
            <button className="close font-semibold text-blue-700" onClick={reset}>
                Reset
            </button>

            {/* Button to apply changes to data Items  */}
            <button className="close border border-slate-600 rounded-md p-1 hover:bg-blue-400" onClick={closePopUp}>
                Apply
            </button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;