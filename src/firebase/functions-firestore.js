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

  updateOrder: (idDoc) => {
    // let newStatus;
    db.collection('orders').doc(idDoc).update({
      endTime: new Date().toLocaleTimeString(),
      status: 'Done',
    });
  },
};

export default getData;

// .get()
//       .then((order) => {
//         // console.log(order);
//         if (order.data().status === 'Pending') {
//           newStatus = 'Done';
//         } else {
//           newStatus = 'Delivered';
//         }

//         order.data().
