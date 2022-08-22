//---------------Part 1----------------//
function EventHandler(items)
{
    this.items = items;

    //First Function
    this.getEventsBetweenDates = function(start, end)
    {
        var mapped = items.filter((evnt) =>{
            return evnt.dateStart >= start  && evnt.dateEnd <= end;
        }).map((evnt)=>{
            return evnt;
        });
        return mapped;
    }

    //Second Function
    this.getByMonth = function(month) 
    {
        var monthed = items.map((evnt) =>{
            return evnt;
        }).filter((evnt)=>{
            return evnt.dateStart.substring(5,7) == month;
        })
        
        return monthed;
    }

    //Third Function
    this.getUniqueDateAndSort = function()
    {
  
        var sorted = items.sort((a,b) =>{
            return a.dateStart.substring(5,7) - b.dateStart.substring(5,7);
        }).filter((evnt, index, self) =>{
            // return evnt.dateStart !== evnt.dateEnd;
           return index === self.findIndex((t) =>(
                t.dateStart === evnt.dateStart && t.dateEnd === evnt.dateEnd
            ))
        })
        .map((evnt) =>{
            return evnt;
        })
        return sorted;
    }
    this.getSummary = function(arr)
    {
        var arr;
        if(arr == undefined)
        {
            arr = items;
        }
        //Not same day events
        var notSamedayEvents =  arr.filter((evnt) =>{
            return evnt.dateStart !== evnt.dateEnd;
        }).map((evnt) =>{
            return "From "+ evnt.dateStart+" to "+ evnt.dateEnd+ ": "+evnt.name+"("+evnt.description+")."
        });
        //same day events
        var sameDayEvents = arr.filter((evnt) =>{
            return evnt.dateStart == evnt.dateEnd;
        }).map((evnt) =>{
            return "On "+ evnt.dateStart+": "+evnt.name+"("+evnt.description+")."
        })
        var summarized = notSamedayEvents.concat(sameDayEvents);
        return summarized;
     
    }
  

}

    var handler = new EventHandler(events);

    handler.getEventsBetweenDates("2022/02/01","2022/02/16");
    handler.getByMonth("05");
    handler.getUniqueDateAndSort();
    handler.getSummary();

    //---------------Part 2----------------//
    Array.prototype.getEventsBetweenDates = function(start, end)
    {
        return new EventHandler(this).getEventsBetweenDates(start,end);
    }
    
    Array.prototype.getByMonth = function(month)
    {
        return new EventHandler(this).getByMonth(month);
    }

    Array.prototype.getUniqueDateAndSort = function()
    {
        return new EventHandler(this).getUniqueDateAndSort();
    }
    Array.prototype.getSummary = function()
    {
        return new EventHandler(this).getSummary();
    }
    console.log(handler.getEventsBetweenDates("2022/02/01","2022/02/16").getSummary());


