const controller = {};

controller.list = (req, res) => {
//res.send('hola mundo1');
req.getConnection((err, conn) =>{
  conn.query('SELECT * FROM busqueda2', (err, customers) => {
    if (err){
      res.json(err);
    }
  //console.log(customers);
    res.render('customers', {
      data: customers
    });

    });
});

};

module.exports = controller;
