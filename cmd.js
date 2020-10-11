var nodeCmd = require('node-cmd');
function runCmdTest() {

    // nodeCmd.run('chcp 936');
    nodeCmd.get(
        'ipconfig',
        function(err, data, stderr){
            console.log(data);
        }
    );
 

}
// runCmdTest()