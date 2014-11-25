var systemDB;
 
/*! Initialize the systemDB global variable. */
function init()
{
 
 
try {
    if (!window.openDatabase) {
        alert('not supported');
    } else {
        var shortName = 'mydatabase';
        var version = '1.0';
        var displayName = 'My Important Database';
        var maxSize = 65536; // in bytes
        var myDB = openDatabase(shortName, version, displayName, maxSize);
 
        // You should have a database instance in myDB.
 
    }
} catch(e) {
    // Error handling code goes here.
    if (e == INVALID_STATE_ERR) {
        // Version number mismatch.
    alert("Invalid database version.");
    } else {
    alert("Unknown error "+e+".");
    }
    return;
}
 
// alert("Database is: "+myDB);
 
createTables(myDB);
systemDB = myDB;
 
}