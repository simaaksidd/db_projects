printjson("****************************************************************");
printjson("1) insertOne");
printjson(db.data.insertOne({'st':"x+47600-046969",
                             "callLetters": "VCSZ",
                             "dataSource":"3",
                             "type":"FM-13",
                             'sections':["AG1","MW1"]}));


printjson("****************************************************************");
printjson("2) insertMany");
printjson(db.data.insertMany([{'st':"x+33300-4206969",
                             "callLetters": "LOPT",
                             "dataSource":"1",
                             "type":"RR-21",
                             'sections':["BBD","SSF"]},
                            
                             {'st':"x+47420-046969",
                             "callLetters": "BCAZ",
                             "dataSource":"5",
                             "type":"PG-13",
                             'sections':["ABC","DEF"]}]));

printjson("****************************************************************");
printjson("3) insertMany");
printjson(db.data.insertMany([{'st':"x+12300-4206969",
                             "callLetters": "POPT",
                             "dataSource":"3",
                             "type":"RR-11",
                             'airTemperature':{"value":-2,"quality":"2"}},
                            
                             {'st':"x+33356-4206969",
                             "callLetters": "HUPT",
                             "dataSource":"2",
                             "type":"RR-29",
                             'airTemperature':{"value":-3,"quality":"1"}}]));

printjson("****************************************************************");
printjson("4) updateOne");
printjson(db.data.updateOne({'st':"x+12300-4206969",
                             "callLetters": "POPT",
                             "dataSource":"3",
                             "type":"RR-11",
                             'airTemperature':{"value":-2,"quality":"2"}},
                            {$set:{"type":"RR-21"}}));

printjson("****************************************************************");
printjson("5) updateOne and $push");
printjson(db.data.updateOne({'st':"x+47420-046969",
                             "callLetters": "BCAZ",
                             "dataSource":"5",
                             "type":"PG-13",
                             'sections':["ABC","DEF"]},
                            {$push:{"sections":"HIJ"}}));

printjson("****************************************************************");
printjson("6) updateMany");
printjson(db.data.updateMany({'st':"x+47600-046969",
                             "callLetters": "VCSZ",
                             "dataSource":"3"},
                            {$set:{"callLetters":"BBDD"}}));

printjson("****************************************************************");
printjson("7) updateMany");
printjson(db.data.updateMany({'st':"x+12300-4206969",
                             "callLetters": "POPT",
                             "dataSource":"3"},
                            {$set:{"dataSource":"1"}}));

printjson("****************************************************************");
printjson("8) deleteOne");
printjson(db.data.deleteOne({'st':"x+47420-046969",
                             "callLetters": "BCAZ",
                             "dataSource":"5",
                             "type":"PG-13",
                             'sections':["ABC","DEF","HIJ"]}));

printjson("****************************************************************");
printjson("9) deleteMany");
printjson(db.data.deleteMany({'st':"x+47600-046969"}));

printjson("****************************************************************");
printjson("10) deleteMany");
printjson(db.data.deleteMany({'st':"x+33300-4206969"}));