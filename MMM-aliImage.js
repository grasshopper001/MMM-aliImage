Module.register("MMM-aliImage",{
    defaults: {
        scheduleURL:"modules/MMM-aliImage/img/default.png",
        //server:"127.0.0.1:3002"
    },
    start:function(){
        this.sendSocketNotification("bring schedule",this.config.server);
    },
    getDom:function(){
        var wrapper=document.createElement("div");
        wrapper.id="schedule-wrapper";
        var html=`
            <img name="schedule" src=${this.config.scheduleURL} alt="not found"></img>
        `;
        wrapper.insertAdjacentHTML("afterbegin",html);
        return wrapper;
    },
    notificationReceived:function(notification,payload,sender){
        switch(notification){
            /*
            case "DOM_OBJECTS_CREATED":
                setInterval(()=>{
                    this.sendSocketNotification("bring schedule",this.config.server);
                    console.log("bring schedule sent");
                },10000);
                break;
                */
            case "showSchedule":
                this.sendSocketNotification("bring schedule",this.config.server);
                console.log("bring schedule sent");
                break;
            default:
                break;
        }
    },
    socketNotificationReceived:function(notification,payload){
        switch(notification){
            case "schedule got":
                this.config.scheduleURL=payload;
                console.log("address of image received: "+this.config.scheduleURL);
                this.updateDom();
                break;
            default:
                break;
        }
    }
})