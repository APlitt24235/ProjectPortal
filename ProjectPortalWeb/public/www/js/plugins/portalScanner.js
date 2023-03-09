//=============================================================================
// portalScanner.js
//=============================================================================
/*:
 * @plugindesc PortalScanner
 * @author Luke Thompson
 *
 * @param thumbsVariable
 * @desc The varaible that stores your thumb status.
 * @default 21
 *
 * @help This plugin lets you swap characters.
 *      Commands:
 *          scan
 * 
 * 
 * 
 * 
 * 
 */


var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'scan') {
        var newChar = prompt("Which character do you want to play as now?")
        console.log(newChar);
        if (newChar === null) {
            charNum = 100
            console.log("hi");
            $gameVariables.setValue(1, charNum);
        }
        else if (newChar != null) {
            while (newChar != "doenmvpwsfyrnmvklwj" && newChar != "hwqpdjolncikebgufwkndk" && newChar != "wesrdtfgkorhjnlihguiwgqdqwhbk" && newChar != "iwanknafkcnefhwqfcklnoqfinhqo") {
                newChar = prompt("Please input a valid character.")
                if (newChar === null) {
                    charNum = 100
                    console.log("hi");
                    $gameVariables.setValue(1, charNum);
                    break
                }
            }
            $gameParty.removeActor(charNum)
            switch (newChar) {
                case "doenmvpwsfyrnmvklwj":
                    var charNum = 2
                    break;
                case "hwqpdjolncikebgufwkndk":
                    var charNum = 3
                    break;
                case "wesrdtfgkorhjnlihguiwgqdqwhbk":
                    var charNum = 4
                    break;
                case "iwanknafkcnefhwqfcklnoqfinhqo":
                    var charNum = 7
                    break;
                default:
                    break;
            }
            $gameVariables.setValue(1, charNum);
            console.log($gameVariables.value(1));
        }


    }
    if (command === "fishing") {

        var chances = []
        var fishermanChances = Math.floor($gameParty.highestLevel() / 5) + 2
        console.log(fishermanChances);
        console.log($gameParty.highestLevel() + " is the fisherman's level");
        console.log($gameVariables.value(12));
        if ($gameVariables.value(12) > 7) {
            for (let i = 0; i < fishermanChances - 1; i++) {
                chances.push(Math.round(Math.random() * 150))
            }
        }
        else {
            for (let i = 0; i < fishermanChances; i++) {
                chances.push(Math.round(Math.random() * 100))
            }
        }


        // if (player == "fishguy") {
        //     for (const chance of chances) {
        //         chance += 5;
        //     }
        // }
        chances = chances.sort(function (a, b) { return a - b });
        $gameVariables.setValue(13, chances[chances.length - 1]);
        console.log(chances[chances.length - 1]);

    }
}