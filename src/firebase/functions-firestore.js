import { db } from './initialization-firebase';

const getData =  {
  getOrder() {
    db.collection('orders').orderBy('time').onSnapshot((doc) => {
      const arrayMenu =[]
      doc.forEach((el)=>{
        arrayMenu.push({
          id:el.id,
          ...el.data()
        });
      })
      // setShowOrder(arrayMenu);
    });
  },
};

export { getData };