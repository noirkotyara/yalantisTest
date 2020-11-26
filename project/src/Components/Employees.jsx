import style from './Employees.module.css'
import React, { useState, useEffect } from 'react';

const Employees = (props) => {
    useEffect(() => {
        props.addItems();
        console.log(props);
    })
    return(<>
        <div className={style.employees}>
           Employees
           <div>
               
           </div>
        </div>
        <div className={style.empBirthday}>
            Employees Birthdays
        </div>
    </>);
}
export default Employees;