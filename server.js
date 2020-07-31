const nodemailer=require('nodemailer');
const nodeCron=require('node-cron');

const mailOptions={
    from:'romiljain258@gmail.com',
    to:'jainromil81@gmail.com',
    subject:"hey i have finally sned mail",
    text:"thanks node"
};

//email transport consfiguration
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'romiljain258@gmail.com',
            pass:'passwordSomething'
        }
    });

//send email
nodeCron.schedule('0 1 * * *',()=>{
transporter.sendMail(mailOptions,(error,info)=>{
       if(error){
           console.log(error);
       }
       console.log("email sent"+info.response);
});
},{
    scheduled:true,
    timeZone:"GMT+5:30",
}
);