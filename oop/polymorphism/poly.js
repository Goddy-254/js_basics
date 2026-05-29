class Notification{
     send(){
        console.log("send plain notification");
     }
}
class EmailNotification extends Notification{
    send(){
        console.log("email notification");
    
    }
}
class SmsNotification extends Notification{
    send(){
        console.log("sms notification");
    }
}
class PushNotification extends Notification{
    send(){
        console.log("push notification");
    }
}

let email = new EmailNotification();
email.send();
let sms = new SmsNotification();
sms.send();
let pushN = new PushNotification();
pushN.send();




