

var items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]; 

var ruleKey = "color", ruleValue = "silver";


var countMatches = function(items, ruleKey, ruleValue) {
    let count= 0;
  
    for (let i=0; i< items.length; i++){
        let type = items[i][0];
        let color = items[i][1];
        let name = items[i][2];
      
        switch(ruleKey){
            case "color":
                if( ruleValue == color ){
                    count = count +1;
                }
                break;
            case "type":
                if( ruleValue == type ){
                    count = count +1;
                }
                break;
            case "name":
                if( ruleValue == name ){
                    count = count +1;
                }
                break;
            default:
                break;        
        }

        
    }
    console.log(count);
};

countMatches(items,ruleKey, ruleValue);