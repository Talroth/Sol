/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function pack(maxCards,TopHide,elementId) {
this.maxCards=maxCards;
this.CardsInDeck=0;
this._deck = [];
this.TopHide=TopHide;
this.elementId=elementId;

 this.add = function (card) {
    if (this._deck.length<this.maxCards) {
        this._deck.push(card);
//        this._deck[this._deck.length-1].hide=this.TopHide;
//        if (this._deck.length>=2) {
//            this._deck[this._deck.length-2].hide=true;
//        }
        this.CardsInDeck+=1;
        return true;
    }
    else
    {
        return false;
    }
};

 this.remove = function() {
    var card=this._deck[this.CardsInDeck-1]; 
    this._deck.pop();
    this.CardsInDeck=this._deck.length;
    this._deck[this.CardsInDeck-1].hide=this.TopHide;
    return card;
};

this.topCard = function () {
  return this._deck[this.CardsInDeck-1];
};

this.Transfer = function (pFrom) {
    this.add(pFrom.remove());
};

this.TransferShuffle = function (pFrom) {
        var ran=Math.floor(Math.random() * pFrom._deck.length);
        this.add(pFrom._deck[ran]);
        pFrom._deck.splice(ran,1);
};
};


var mp= new pack(52,true,"mp");

var init = function() {    
    for (var j=1; j<5; j++) {
        for (var i=1; i<14; i++) {
            var card=function(t,z){
                    var car = {order:0, sign:1};
                    car.order=t;
                    car.sign=z;
                    car.hide=true;
                    return car;
            }(i,j);
              mp.add(card);
        }
    }
    return mp;
};

var CurCard = function(deck,CardId) {
    return deck[CardId].order;
};



var CreateTbl= function() {    // in order to init the deck
    init();
    
    var table = document.getElementById("MainTbl");
    var header = table.createTHead();
    var t=0;
    for (var y=0; y<4; y++) {
         var row = header.insertRow(0); 
    for (var x=0; x<13; x++) {
         var cell = row.insertCell(0);  
      //   cell.innerHTML="("+deck[t].sign+")"+" "+deck[t].order;
         cell.innerHTML="("+mp._deck[t].sign+")"+" "+mp._deck[t].order;
         t++;
    };
    };
    
    var p = [];
    for (var u=0; u<7; u++)
    {
       p.push(new pack(u+1,false,"p"+(u+1))); 
        for (v=0; v<p[u].maxCards; v++)
        {
            p[u].TransferShuffle(mp);
        };
    };
    console.log(p[1]._deck[0].order);
    


//    
//     table = document.getElementById("SecTbl");
//     header = table.createTHead();
//     row = header.insertRow(0);
//     for (var ind=0; ind<p._deck.length; ind++) {
//        cell = row.insertCell(0);
//        cell.innerHTML="("+p._deck[ind].sign+")"+" "+p._deck[ind].order+" "+p._deck[ind].hide;   
//        
//    };
    
//     table = document.getElementById("SecTbl2");
//     header = table.createTHead();
//     row = header.insertRow(0);
//     for (var ind=0; ind<pp._deck.length; ind++) {
//        cell = row.insertCell(0);
//        cell.innerHTML="("+pp._deck[ind].sign+")"+" "+pp._deck[ind].order+" "+pp._deck[ind].hide;   
//        
//    } 
//    
//     table = document.getElementById("ThrTbl");
//     header = table.createTHead();
//     row = header.insertRow(0);
//     for (var ind=0; ind<mp._deck.length; ind++) {
//        cell = row.insertCell(0);
//        cell.innerHTML="("+mp._deck[ind].sign+")"+" "+mp._deck[ind].order+" "+mp._deck[ind].hide;   
        
      

for (var tt=0; tt<7; tt++)
{
    pe=document.getElementById(p[tt].elementId);
    for (var i=0; i<tt; i++) 
    {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(p[tt]._deck[i].order+" ("+p[tt]._deck[i].sign+")"));
        pe.appendChild(entry);
    };
};
};
//    pe=document.getElementById(pp.elementId);
//    for (var i=0; i<pp.CardsInDeck; i++) 
//    {
//        var entry = document.createElement('li');
//        entry.appendChild(document.createTextNode(pp._deck[i].order+" ("+pp._deck[i].sign+")"));
//        pe.appendChild(entry);
//    }
//    var table = document.getElementById("ThrTbl");
//    var header = table.createTHead();
//    var t=0;
//    for (var y=0; y<4; y++) {
//         var row = header.insertRow(0); 
//    for (var x=0; x<13; x++) {
//         var cell = row.insertCell(0);  
//
//         if (t<x*y) {
//         cell.innerHTML="("+mp._deck[t].sign+")"+" "+mp._deck[t].order;
//     }
//         t++;
//    }
//    }
//    document.getElementById("Top").innerHTML="Top 1st: "+p.topCard().order + " 2nd: "+pp.topCard().order;
//    document.getElementById("Top").innerHTML=p.remove().order;
//    document.getElementById("Top").innerHTML="Top 1st: "+p.topCard().hide;
////    p.TransferShuffle(mp,3);
//};