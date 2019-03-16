
# MMM-aliImage
---
* A repo for MagicMirror modules viewing picture(schedules) posted on aliyun.
* On receiving notification "showSchedule", [MMM-TestNotification](https://github.com/grasshopper001/MMM-TestNotification/blob/master/MMM-TestNotification.js) would 
shift from main page to the schedule page, which shows the schedule obtained from ali_oss.
* Place these folders under `~/MagicMirror/modules/`.
* Please make sure that your MMM-MQTT coinside with MMM-TestNotification, i.e. it sends "showSchedule" notification as soon as the MQTT message "button pushed" arrives.
---
## Configuration
---
* Configuration for MMM-aliImage.

```javascript
        {
    		module:"MMM-aliImage",
            config:{
				server:"127.0.0.1:3002" //server:port
			}
		},
```
