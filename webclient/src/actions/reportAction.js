import firebase from '../Firebase';
import { DAILY_REPORT } from '../types';

export const dailyReport = data => ({
    type: DAILY_REPORT,
    payload: data,
});

export const getDailyReport = (queryDate) => dispatch => {
    let data = [];
    const ref = firebase.database().ref();
    const itemref = ref.child('item');
    try{   
        const wait = itemref.once("value", snap => {
            let Data = snap.val();
            Object.keys(Data).map(key => {
                let res = Data[key];
                if(res['date'] === queryDate){
                    data.push({ 
                        date: res['date'], 
                        inspector: res['inspector_name'], 
                        drawing: res['drawing_no'], 
                        quantity: res['quantity'], 
                        status: res['status']
                    });
                }
            })
        });

        wait.then(() => dispatch(dailyReport(data)));
    }
    catch(err){
        console.log("Unable to get daily report");
    }
};