import { db } from './initialization-firebase';

const getData = {
  getOrder: (callback) => {
    db.collection('orders').where("status", "==", "Pending").orderBy('time', 'desc').onSnapshot((doc) => {
      const arrayMenu =[];
      doc.forEach((el)=>{
        arrayMenu.push({
          id:el.id,
          ...el.data()
        });
      })
      callback(arrayMenu);
    });
  },

  getMenu: (typeFood) => {
    return db.collection('items').where('menu','==', typeFood).get()
      .then((queryResults)=>{
        const menu =[]
        queryResults.forEach((doc)=>{
          menu.push({
            id:doc.id,
            ...doc.data()
          });
        })
        return menu;
      })
  },

  getOrdersDone: () => {
    return db.collection('orders').where("status", "==", "Done").get()
      .then((queryResults)=>{
        const ordersDone = [];
        queryResults.forEach((doc)=>{
          ordersDone.push(doc.data());
        })
        return ordersDone;
      });
  },

};

export { getData };