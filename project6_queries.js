printjson("****************************************************************");
printjson("1) logical AND and range query and filter on embedded field that is one levels deep and sort");
printjson(db.data.find({"callLetters": "VCSZ","airTemperature.value":{$gt: -3.2, $lt: -3.0}},{st: 1, callLetters: 1}).sort({callLetters:1}));

printjson("****************************************************************");
printjson("2) logical AND and range query and filter on embedded field that is two levels deep");
printjson(db.data.find({"dataSource": "4","wind.speed.rate":{$gt: 900, $lt: 1100}},{st: 1, callLetters: 1,dataSource:1,wind:1,_id:0}).limit(1));

printjson("****************************************************************");
printjson("3) Embedded object in array matches x and sort");
printjson(db.data.find({presentWeatherObservationManual:{$elemMatch:{condition:"01"}}},{st:1,presentWeatherObservationManual:1}).limit(1).sort({st:1}));

printjson("****************************************************************");
printjson("4) Element in array matches x and Logical OR");
printjson(db.data.find({$or:[{'sections':'AG1'},{'sections':'MD2'}]},{st:1,sections:1}).limit(1));

printjson("****************************************************************");
printjson("5) Embedded object in array matches x and filter on embedded field that is two levels deep");
printjson(db.data.find({pastWeatherObservationManual:{$elemMatch:{'atmosphericCondition.value':'7'}}},{st:1,pastWeatherObservationManual:1}).limit(1));

printjson("****************************************************************");
printjson("6) logical OR and sort and filter of embedded field that is one level deep");
printjson(db.data.find({$or:[{'airTemperature.value':-26.7},{'dewPoint.value':999.9}]},{st:1,airTemperature:1,dewPoint:1}).limit(3).sort({airTemperature:1}));

printjson("****************************************************************");
printjson("7) Element in array matches x and sort");
printjson(db.data.find({sections:"MW1"},{st:1,sections:1}).limit(3).sort({st:1}));

printjson("****************************************************************");
printjson("8) logical AND and sort");
printjson(db.data.find({callLetters:'EMIO',qualityControlProcess:"V020"},{st:1,callLetters:1,qualityControlProcess:1}).limit(3).sort({callLetters:1}));

printjson("****************************************************************");
printjson("9) range query and sort");
printjson(db.data.find({'dewPoint.value':{$gt:-35,$lt:-20}},{st:1,dewPoint:1}).limit(3).sort({dewPoint:1}));

printjson("****************************************************************");
printjson("10) logical AND and sort");
printjson(db.data.find({elevation:9999,dataSource:"4"},{st:1,elevation:1,dataSource:1}).limit(3).sort({st:1}));