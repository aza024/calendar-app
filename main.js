window.onload = function(){
    let date = new Date();
    let month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let month = date.getMonth();   
    let year = date.getFullYear(); 
    let first_date = month_name[month] + " " + 1 + " " + year;
    let tmp = new Date(first_date).toDateString();
    let first_day = tmp.substring(0, 3);   
    let day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let day_no = day_name.indexOf(first_day);   
    let days = new Date(year, month+1, 0).getDate();    
    let calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

get_calendar = (day_no, days) => {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    
    //row for the day letters
    for(let c=0; c<=6; c++){
        let td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');
    let c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        let td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    let count = 1;
    for(; c<=6; c++){
        let td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(let r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(let c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            let td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}