/*
 * This script is responsible for changing the name of the 
 * location to respect the correct pattern.
 */

function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var MenuEntries = [{
        name: "Replace Location",
        functionName: "replaceaddresss"
    }];
    ss.addMenu("Replace Location Names", MenuEntries);
};


function replaceaddresss() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    //Logger.log("DEBUG: sheet name: "+sheet.getSheetName());//DEBUG
    //Logger.log("DEBUG: range: "+range.getA1Notation());//DEBUG
    var Avals = ss.getRange("A1:A").getValues();
    var Alast = Avals.filter(String).length;
    //Logger.log("DEBUG: last row in A: "+Alast);//DEBUG
    var range = sheet.getRange(1, 1, Alast)
        //Logger.log("DEBUG: range: "+range.getValues());//DEBUG
    var columnValues = range.getValues();
    // Logger.log("DEBUG: column values: "+columnValues)

    // STATES
    // A 
    var acreAdresses = ['acre', 'ac'];
    var acreReplace = ['Acre'];
    var alagoasAdresses = ['alagoas', 'ap'];
    var alagoasReplace = ['Alagoas'];
    var amapaAdresses = ['amapa', 'ap', 'amápa'];
    var amapaReplace = ['Amapá'];
    var amazonasAdresses = ['amazonas', 'am'];
    var amazonasReplace = ['Amazonas']
        // B
    var bahiaAdresses = ['bahia', 'ba'];
    var bahiaReplace = ['Bahia'];
    // C
    var cearaAdresses = ['ceara', 'ceára', 'ce'];
    var cearaReplace = ['Ceará'];
    // E
    var espiritoSantoAdresses = ['espirito santo', 'es', 'espírito santo'];
    var espiritoSantoReplace = ['Espírito Santo'];
    // G 
    var goiasAdresses = ['goias', 'goiás', 'go'];
    var goiasReplace = ['Goiás'];
    // S
    var saoPauloAdresses = ['sp', 'são paulo', 'sao paulo'];
    var saoPauloReplace = "São Paulo";


    for (i = 0; i < Alast; i++) {
        if (saoPauloAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = saoPauloReplace;
        } else if (acreAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = acreReplace;
        } else if (alagoasAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = alagoasReplace;
        } else if (amapaAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = amapaReplace;
        } else if (amazonasAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = amazonasReplace;
        } else if (bahiaAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = bahiaReplace;
        } else if (cearaAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = cearaReplace;
        } else if (espiritoSantoAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = espiritoSantoReplace;
        } else if (goiasAdresses.includes(columnValues[i][0].toLowerCase())) {
            columnValues[i][0] = goiasReplace;
        }
    };
    range.setValues(columnValues);
}