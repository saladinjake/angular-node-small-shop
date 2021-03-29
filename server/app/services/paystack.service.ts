class PaystackApi{

  static paystackPayMeMoney(req,res){
     const {
      fullname,
      email,
      amount,
     } = req.body;

     const form = {
      fullname,
      email,
      amount,
      phone_number
     }
    form.metadata = {
          full_name : form.fullname
    }
    form.amount *= 100;
    form.amout *=100;

    initializePayment(form, (error, body)=>{
      if(error){
        //handle errors
        return res.redirect('/error')

      }
      var response = JSON.parse(body);
      let url =response.data.authorization_url;


      return res.status(201).json({
        status: 201,
        message: `<h6>Please click the link to make payments.<a style="color:red;text-decoration:none"  href="${url}">Proceed to payment</a></h6>
        `,
      });

    });

  }

  static paystackCallBack(req,res){
    const {reference,trxref} = req.query;
    //console.log(req.query)
    const ref = reference;
      verifyPayment(ref, (error,body)=>{
          if(error){
              //handle errors appropriately
              console.log(error)
              return res.redirect('/error');
          }

          var response = JSON.parse(body);
          console.log(JSON.stringify(response.data) +"given here")

          const {
            id,reference, amount,
            customer, metadata,
            phone_number
          } = response.data;
          console.log(id,reference,amount,customer,phone_number,customer.phone)


          const newDonor = {
            id: new String(id), reference,
            amount:(amount/100),
            email: customer.email,
            full_name: metadata.full_name,
            phone_number
          };

          const payee = new Payment(newDonor)

          payee.save().then((payee_detail,error)=>{
              if(!payee_detail){
                console.log(error)
                  return res.redirect('/api/v1/error');
              }


              User.findOne({email: customer.email},function (err, user) {

                  if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
                  let convertedBal = Number(amount)/100;
                  //send user email for the payment made...

              });
          }).catch((e)=>{
             console.log(e)
              res.redirect('/error');
          });


      })

  }

  static createPaymentDetail(request,response){

    let {
        status,
                reference,
                plan_id,
                quotation_id,
                amount,
                username,
                email,
                phone_number ,
    } = request.body;


    const NewPayment = new Payment({

        status:'Successful',
                reference,
                plan_id,
                quotation_id,
                amount,
                username,
                email,
                phone_number,


     });

     NewItinerary.save()
      .then(data => {
        const user = data;
        const result = {
          reference,
                plan_id,
                quotation_id,
                amount,
                username,
                email,
                phone_number,
      email:user.email
           // cars_id: user.cars_id
        };

        return response.status(201).json({
          status: 201,
          data: [
            {

              result
            },
          ],
          message: 'User Payment created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

  }

  static paystackReceipt(req,res){
    const id = new String(req.params._id);
    Payment.findById(id).then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect('/api/v1/error')
          }

          // res.render('success.pug',{donor});
          return  res.sendFile(path.join(__dirname + '/views/templates/topup-successful.html'));
      }).catch((e)=>{
          console.log(e)
          res.redirect('/error')
      })
  }

  static paystackHistory(req,res){
    const id = new String(req.params.id);
    Payment.find({email:req.params.id}).then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect('/error')
          }
         const tranx = donor;
         console.log(tranx +"for the user")
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });

      }).catch((e)=>{
          console.log(e)
          res.redirect('/api/v1/error')
      })
  }




}

export default PaystackApi;
