import db from './initialization-firebase';

const getData = {

  createOrder: (order, data) => {
    db.collection('orders').doc().set({
      client: data.client,
      table: data.table,
      time: new Date(),
      endTime: null,
      items: order,
      status: 'Pending',
    });
  },

  getOrder: (callback, status) => {
    db.collection('orders').where('status', '==', status).orderBy('time', 'desc').onSnapshot((doc) => {
      const arrayMenu = [];
      doc.forEach((el) => {
        arrayMenu.push({
          id: el.id,
          ...el.data(),
        });
      });
      callback(arrayMenu);
    });
  },

  getMenu: (typeFood) => db.collection('items').where('menu', '==', typeFood).get()
    .then((queryResults) => {
      const menu = [];
      queryResults.forEach((doc) => {
        menu.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return menu;
    }),

  getOrdersDone: () => db.collection('orders').where('status', '==', 'Done').get()
    .then((queryResults) => {
      const ordersDone = [];
      queryResults.forEach((doc) => {
        ordersDone.push(doc.data());
      });
      return ordersDone;
    }),

  getFinalTime: (idDoc) => db.collection('orders').doc(idDoc).get()
    .then((order) => {
      const timeDiff = order.data().endTime.toDate().getTime()
        - order.data().time.toDate().getTime();
      let seconds = Math.floor(timeDiff / 1000);
      // eslint-disable-next-line radix
      const minutes = parseInt(seconds / 60);
      seconds %= 60;

      const finalTime = `${minutes}:${seconds}`;
      return finalTime;
    }),

  updateTime: (id, finalTime) => db.collection('orders').doc(id)
    .update({
      finalTime,
    }),

  updateOrder: (idDoc, newStatus) => {
    db.collection('orders').doc(idDoc)
      .update({
        endTime: new Date(),
        status: newStatus,
      });
  },

};

export default getData;
