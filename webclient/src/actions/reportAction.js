import firebase from '../Firebase';
import { DAILY_REPORT } from '../types';

export const dailyReport = data => ({
    type: DAILY_REPORT,
    payload: data,
});

export const getDailyReport = (queryDate) => dispatch => {
    let data = [];
    const ref = firebase.database().ref();
    const today = new Date();
    const month = String(today.getMonth() + 1); //January is 0
    const year = today.getFullYear();
    const itemref = ref.child(`report/${year}/${month}`)
    try{   
        itemref.once("value", snap => {
            let Data = snap.val();
            if(Data !== null){
                Object.keys(Data).map(key => {
                    let res = Data[key]
                    if(res['date'] === queryDate){
                        data.push({ 
                            date: res['date'], 
                            inspector: res['inspector'], 
                            drawing: res['drawing'], 
                            quantity: res['quantity'], 
                            status: res['status']
                        });
                    }
                })
            }
        }).then(() => dispatch(dailyReport(data)));
    }
    catch(err){
        console.log("Unable to get daily report");
    }
};