var oracledb = require('oracledb');
oracledb.getConnection(
	  {
		      user          : "danny",
		      password      : "danny",
		      connectString : "172.17.0.2/pdb1.localdomain"
		    },
	  function(err, connection)
	  {
		      if (err) { console.error(err); return; }
		      connection.execute(
			            "SELECT * "
			          + "FROM TABLE1 ",
			            function(err, result)
			            {
					            if (err) { console.error(err); return; }
					            console.log(result.rows);
					          });
		    });
