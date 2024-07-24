
// ref : ["name",cost, "address", distance, "other things to do", "specialItems"]
// homework : add 5 choices each in 3 var and add all info mentioned above'




var asian = [["spoon and fork center",30,"1225 dundas street east", 25,"Mall", "Asian Fusion"],["basil box", 15,"2508 Winston Park Drive",10,"Costco", "Customised bowls" ]]
var american = [["Popeyes", 10,"497 Dundas Street West", 5, "na", "Fried Chicken" ],["Mcdonalds", 15,"2510 Hampshire Gate", 10,"Costco","Fries"   ],["Montanas", 40, "2530 Hyde park Gate", 10, "na", "Pork Ribs"]]
var indian = [["Punjabi By Nature",30, "261 Oak Walk Drive", 13, "Walmart", "Punjabi food"],["Kailash Parbat", 30, "1200 Derry road East", 22, "na", "chaat, and sindhi food"]]
var italian = [["The olive press", 40, "2322 Dundas street West", 10, "Town", "pasta"], ["Goodfellas", 50, "50 Burmanthope Road West",30, "Mall", "Wood-Fired fresh pizza"], ["The Express Restaurant", 100, "1477 Lakeshore road", 40, "Town", "Pizza and Pasta"   ] ]
var shawarma = [["Malek El Shawarma" , 35 , "2251 Westoak Trails Blvd unit 7", 15 , "na" , "Chicken Shawarma" ], ["Chef's Door Shawarma", 20 , "1140 Winston Churchill Blvd" , 15 , "na" , "Lamb Shawarma"]]
var mexican = [["Quesada", 10 , "3055 Dundas Street West" , 9 ,  ]]
var greek = []
var european= []
var south_east_asian= []
var african= []
var middle_eastern= []
var continental= []
var pastry= []
var bakery= []

var asianS=JSON.stringify(asian)
var americanS=JSON.stringify(american)
var indianS=JSON.stringify(indian)
var italianS=JSON.stringify(italian)
var shawarmaS=JSON.stringify(shawarma)
var mexicanS=JSON.stringify(mexican)
var greekS=JSON.stringify(greek)
var europeanS=JSON.stringify(european)
var south_east_asianS=JSON.stringify(south_east_asian)
var africanS=JSON.stringify(african)
var middle_easternS=JSON.stringify(middle_eastern)
var continentalS=JSON.stringify(continental)
var bakeryS=JSON.stringify(bakery)

localStorage.setItem("asian",asianS)

localStorage.setItem("american",americanS)

localStorage.setItem("indian",indianS)

localStorage.setItem("italian",italianS)

localStorage.setItem("shawarma",shawarmaS)

localStorage.setItem("mexican",mexicanS)

localStorage.setItem("greek",greekS)

localStorage.setItem("european",europeanS)

localStorage.setItem("south_east_asian",south_east_asianS)

localStorage.setItem("african",african)

localStorage.setItem("middle_eastern",middle_easternS)

localStorage.setItem("continental",continentalS)

localStorage.setItem("bakery",bakeryS)

console.clear()
console.log("Data storred in LocalStorage")







// console.log(JsonString)
// localStorage.setItem("indian",JsonString)
// console.clear()
// console.log("Data stored into local storrage...")
// var dfdjf = localStorage.getItem("indian")
// var fldfh = JSON.parse(dfdjf)
// console.log("Retrieved:",fldfh)

    

// console.log(asian)
// console.log(american)
// console.log(indian)
// console.log(italian)
// console.log(shawarma)
// console.log(mexican)
// console.log(greek)
// console.log(european)
// console.log(south_east_asian)
// console.log(african)
// console.log(middle_eastern)
// console.log(bakery)

var choice = ""
var time = ""
var work = ""

function Costco(){
    work = "costco"
}
function Walmart(){
    work = "Walmart"
}
function Mall(){
    work = "Mall"
}
function Toronto(){
    work = "Toronto"
}
function Town(){
    work = "Town"
}
function Trails (){
     work= "Trails"
}
function na (){
    work = "na"
}



function searchy (){
    choice = (document.getElementById("cuisine").value).toLowerCase();
   
    time = (document.getElementById("time").value).toLowerCase()

  
    
    if(choice == "american"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("american")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                
                if(gotItAgain[i][4] == work){
                  
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])

                    
                    
                }
            }
        }
        
    }
 else if(choice == "asian"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("asian")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                   
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                    
                }
            }
        }
        
    }
    else  if(choice == "indian"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("indian")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                    
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                    
                }
            }
        }
        
    }
    else  if(choice == "italian"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("italian")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                   
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    else  if(choice == "shawarma"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("shawarma")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                    
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    else  if(choice == "mexican"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("mexican")
                    var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                 
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    else  if(choice == "greek"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
      
        var gotIt = localStorage.getItem("greek")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                  
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    else  if(choice == "european"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("american")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                  
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    else  if(choice == "south_east_asian"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("south_east_asian")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                  
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    else   if(choice == "african"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("african")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                 
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    if(choice == "bakery"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("bakery")
                    var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
                   
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    else  if(choice == "middle_eastern"){
        // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
        var gotIt = localStorage.getItem("middle_eastern")
        var gotItAgain = JSON.parse(gotIt)
        for(var i = 0; i<gotItAgain.length; i++){
            if(gotItAgain[i][3]<=time){
                if(gotItAgain[i][4] == work){
              
                    document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
                    document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
                    document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
                    document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
                    document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
                    document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
                    console.log(gotItAgain[i])
                
                    
                }
            }
        }
        
    }
    // if(choice == "italian"){
    //     // if the time is less than or equal to the time of which the restaurats, then you will move on top the work descrriptor
    //     for(var i = 0; i<italian.length; i++){
    //         if(italian[i][3]<=time){
    //             if(italian[i][4] == work){
    //                 var gotIt = localStorage.getItem("american")
    //                 var gotItAgain = JSON.parse(gotIt)
    //                 document.getElementById("name_ans").innerHTML = "Restaurant: "+gotItAgain[i][0]
    //                 document.getElementById("price_ans").innerHTML = " Average Price per person: " +gotItAgain[i][1]+"CAD"
    //                 document.getElementById("address_ans").innerHTML = "Address: "+gotItAgain[i][2]
    //                 document.getElementById("time_ans").innerHTML = "Travel Time: "+gotItAgain[i][3]+"minutes"
    //                 document.getElementById("work_ans").innerHTML = "Things to do around: "+gotItAgain[i][4]
    //                 document.getElementById("speciality_ans").innerHTML = "speciality: "+gotItAgain[i][5]
    //                 console.log(gotItAgain[i])
                
                    
    //             }
    //         }
    //     }
        
    // }
    




}
function adding (){
    window.open("Adding.html")

    
}

function back (){
    window.open("index.html")
}

var i1 = "";
var i2="";
var i3= 0;
var i4 = "";
var i5 = 0;
var i6 = "";
var i7 ="";



function addInMyList(){
    i1 =  document.getElementById("i1").value.toLowerCase();
    i2 =  document.getElementById("i2").value.toLowerCase()
    i3 =  document.getElementById("i3").value
    i4 =  document.getElementById("i4").value.toLowerCase()
    i5 =  document.getElementById("i5").value;
    i6 =  document.getElementById("i6").value.toLowerCase();
    i7 =  document.getElementById("i7").value.toLowerCase();

    newInfo = [i2,i3,i4,i5,i6,i7]

   
    if(i1 == "indian"){
        
        
        indian.push([i2,i3,i4,i5,i6,i7]);
        console.log(indian)
        localStorage.removeItem("indian")
        indianS=JSON.stringify(indian)
        localStorage.setItem("indian",indianS)

        
        console.log(indian)
        
    }
    if(i1 == "american"){
        american.add([i2,i3,i4,i5,i6,i7])

        console.log(american)
       
        console.log(american)
    }
    if(i1 == "asian"){
        asian.push([i2,i3,i4,i5,i6,i7])
        console.log(asian)
        
        console.log(asian)
    }
    if(i1 == "shawarma"){
        shawarma.push([i2,i3,i4,i5,i6,i7])
        console.log(shawarma)
       
        console.log(shawarma)
    }
    if(i1 == "greek"){
        greek.push([i2,i3,i4,i5,i6,i7])
        console.log(greek)


        console.log(greek)
    }
    if(i1 == "south_east_asian"){
        south_east_asian.push([i2,i3,i4,i5,i6,i7])
        console.log(south_east_asian)

       
        console.log(south_east_asian)
    }
    if(i1 == "middle_eastern"){
        middle_eastern.push([i2,i3,i4,i5,i6,i7])
        console.log(middle_eastern)

        location.reload()
        console.log(middle_eastern)
    }
    if(i1 == "european"){
        european.push([i2,i3,i4,i5,i6,i7])
        console.log(european)

        
        console.log(european)
    }
    if(i1 == "african"){
        african.push([i2,i3,i4,i5,i6,i7])
        console.log(african)
   
        console.log(african)
    }
    if(i1 == "bakery"){
        bakery.push([i2,i3,i4,i5,i6,i7])
        console.log(bakery)
        
        console.log(bakery)
    }



}


