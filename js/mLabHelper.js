var mLabhelper = function(api_key){
    
    var _apikey = api_key;
    var _dbname = '';
    var _colname= '';
    
    this.setDBname = function(dbname){
        _dbname = dbname;
    }
    this.setColname = function(colname){
        _colname = colname;
    }
    
    this.searchMlabSkill = function(callback){
        var baseURL ="https://api.mlab.com/api/1/databases/"+_dbname+"/collections/"+skill+"?apiKey="+_apikey;
         $.ajax({url:baseURL,type:"GET",async:true,timeout:20000,success:callback,
                 error:function(xhr,status,err){alert(err);}
    });}
    this.searchMlabPortfolio = function(callback){
    var baseURL ="https://api.mlab.com/api/1/databases/"+_dbname+"/collections/"+portfolio+"?apiKey="+_apikey;
     $.ajax({url:baseURL,type:"GET",async:true,timeout:20000,success:callback,
             error:function(xhr,status,err){alert(err);}
    });}
    this.searchMlabVisitor = function(callback){
    var baseURL ="https://api.mlab.com/api/1/databases/"+_dbname+"/collections/"+visitor+"?apiKey="+_apikey;
     $.ajax({url:baseURL,type:"GET",async:true,timeout:20000,success:callback,
             error:function(xhr,status,err){alert(err);}
    });}
        
    this.insertMlab = function(dataObj, callback){
        var baseURL ="https://api.mlab.com/api/1/databases/"+_dbname+"/collections/"+_colname+"?apiKey="+_apikey;
    $.ajax( { url:baseURL,
		  data: JSON.stringify( dataObj ),
		  type: "POST",
		  contentType: "application/json" } );
        
        
    }
}