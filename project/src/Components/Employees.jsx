import style from './Employees.module.css'
import React, { useState, useEffect } from 'react';

const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const Employees = React.memo(props => {

    let [checkboxs, setCheckboxs] = useState([]);

    useEffect(() => {
        props.addItems();
    }, [props.items.length]);


    let isEmpty; //boolean

    let checkboxChoose = (id, e) => {
        if (e.currentTarget.checked) {
            setCheckboxs([...checkboxs, id]);
        }
        else {
            setCheckboxs(checkboxs.filter((idCheck) => idCheck !== id));
        }
    }

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setCheckboxs(items);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(checkboxs));

    }, [checkboxs]);
    

    useEffect(() => {
        if (props.items.length != 0) {
            props.setUsers([]);
            props.setUsers(checkboxs);
        }

    }, [checkboxs, props.items.length]);

    return (<>
        {(checkboxs.length === 0)
            ? <div className={style.hint}>Choose employees for displaying their birthdays</div>
            : <div className={style.hintHide}>Employees choosed</div>
        }
        <div className={style.employees}>
            <div className={style.titleName}>Employees</div>
            <div>
                {arr_EN
                    .map((letter, index, array) => {

                        return (
                            <div className={style.letter} id='alphabet' key={index.toString()}>
                                <span className={style.letterName}>
                                    {letter + ' '}
                                </span>
                                {props.items
                                    .filter(member => {
                                        isEmpty = false;
                                        return member.lastName.charAt(0) === letter
                                    })
                                    .sort(function (a, b) {
                                        var nameA = a.lastName.toUpperCase();
                                        var nameB = b.lastName.toUpperCase();
                                        if (nameA < nameB) { return -1; }
                                        if (nameA > nameB) { return 1; }
                                        return 0;
                                    })
                                    .map((member, index) => {
                                        isEmpty = true;
                                        return <div className={style.forDiv} key={index}>
                                            <span className={style.name}>{member.lastName + member.firstName}</span>
                                            <input
                                                className={style.input}
                                                id={member.id}
                                                checked={checkboxs.indexOf(member.id) != -1}
                                                type="checkbox"
                                                onChange={(e) => checkboxChoose(member.id, e)} />
                                        </div>
                                    })
                                }
                                <div>
                                    {!isEmpty
                                        && <div>---------</div>}
                                </div>
                            </div>)
                    })
                }


            </div>
        </div>
        <div className={style.empBirthday}>
            <div className={style.titleName}>Employees Birthdays</div>
            {/* Виведення обраних employees місяців народження*/}
            {(checkboxs.length === 0)
                ?
                <div className={style.noEmployees}>
                    <h3>
                        No selected employees
                </h3>
                </div>
                :
                props.months.map(
                    month => {
                        return month.id.length != 0
                            &&
                            <div>
                                <h3>
                                    {month.name}
                                </h3>
                                {
                                    month.id.map(user => {
                                        return <div>
                                            {user.lastName + ' ' + ' ' + user.firstName}
                                        </div>
                                    })
                                }
                            </div>
                    }
                )
            }

        </div>
    </>);
});

export default Employees;

