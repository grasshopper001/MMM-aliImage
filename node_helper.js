var NodeHelper=require("node_helper");
var request=require("request");

module.exports=NodeHelper.create({
    getSchedule:function(serverIP,callback){
        request({
            url:`http://${serverIP}/getSchedule`,
            json:true
        },(err,res,body)=>{
            if(err) callback("fail to get schedule");
            else  {
                callback(undefined,body);
                console.log(body);
            }
        })
    },
    socketNotificationReceived(notification,payload){
        switch(notification){
            case "bring schedule":
            this.getSchedule(payload,(err,res)=>{
                if(err) console.log(err);
                else this.sendSocketNotification("schedule got",res);
            })
            break;
            default:
            break;
        }
    }
})