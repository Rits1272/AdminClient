import firebase from '../Firebase';
import { GET_EMPLOYEES } from '../types';

export const getEmployees = (employees) => ({
    type: GET_EMPLOYEES,
    payload: employees
})

/*
    Fetches all the users from firebase data
*/
export function fetchEmployees(){
    const ref = firebase.database().ref();
    return dispatch => {
        let employees = [];

        // Fetch Admins
        ref.child("admin").once("value", snap => {
            const data = snap.val();
            Object.keys(data).map(key => {
                let res = data[key];
                employees.push({
                    "name": res["name"],
                    "email": res["reg_id"],
                    "contact": res["phn"],
                    "role": "Admin"
                })
            })
        });

        // Fetch Inspectors
        ref.child("inspector").once("value", snap => {
            const data = snap.val();
            Object.keys(data).map(key => {
                let res = data[key];    
                employees.push({
                    "name": res["name"],
                    "email": res["reg_id"],
                    "contact": res["phn"],
                    "role": "Inspector"
                })
            })
        });

        // Fetch Custodians
        ref.child("custodian").once("value", snap => {
            const data = snap.val();
            Object.keys(data).map(key => {
                let res = data[key];
                employees.push({
                    "name": res["name"],
                    "email": res["reg_id"],
                    "contact": res["phn"],
                    "role": "Custodian"
                })
            })
        }).then(() => dispatch(getEmployees(employees)));
    }
}