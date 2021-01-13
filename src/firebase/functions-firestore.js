import { db } from './initialization-firebase';

export const getOrder=(callback)=>{
    db.collection('orders').orderBy('time').onSnapshot((doc) => {
      const arrayMenu =[]
      doc.forEach((el)=>{
        arrayMenu.push({
          id:el.id,
          ...el.data()
        });
      })
      callback(arrayMenu);
    });
};


