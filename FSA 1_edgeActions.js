
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Search}","click",function(sym,e){window.open("http://fsastockexchange.com/manager/listStocks","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Dashboard}","click",function(sym,e){window.open("http://fsastockexchange.com/welcome-page","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Portfolio}","click",function(sym,e){window.open("http://fsastockexchange.com/fantasy_stocks/portfolio","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Buy_Credits}","click",function(sym,e){window.open("http://fsastockexchange.com/products","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Account_Settings}","click",function(sym,e){window.open("http://fsastockexchange.com/user","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-92559202");