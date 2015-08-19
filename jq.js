/**
 * Created by xuesongdu on 16/08/15.
 */

(function($){

    $.fn.render = function(){

        $(this).click(function(){

            var url = 'test.jsonp';

            $.ajax({

                type: 'GET',

                async: false,

                url: url,

                jsonpCallback: 'cb',

                contentType: "application/json",

                dataType: 'jsonp',

                success: function(result){
// the first result

                    alert(result.length);

                    document.getElementById("json").innerHTML=JSON.stringify(result,undefined,2);

                    var table = prettyPrint(result);
                    document.body.appendChild(table);

                    $("#div1").html(result[0].description);

                },

                error:function(e){

                    console.log(e.message);

                }

            });
        });


        /*
        this.click( function(){

            alert("a");

            document.getElementById("results").style.display = "block";

            $.ajax({

                type: 'GET',

                async: false,

                url: 'test.jsonp',

                jsonpCallback: 'cb',

                contentType: "application/json",

                dataType: 'jsonp',

                success: function(result){

                    alert(result[0].updates.length);

                    //document.getElementById("json").innerHTML=JSON.stringify(result,undefined,2);

                    var table = prettyPrint(result);
                    document.body.appendChild(table);

                },

                error:function(e){

                    console.log(e.message);

                }

            });


        });
        */
    }

}(jQuery));