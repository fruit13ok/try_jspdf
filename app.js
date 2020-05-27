// npm install jspdf --save

$(document).ready(function(){
    // Default export is a4 paper, portrait, using millimeters for units
    $("#cmd").click(function(){
        // basic text version
        // resource:
        // https://github.com/MrRio/jsPDF
        // var doc = new jsPDF()
        // urls.forEach((url, index) => {
        //     doc.text(
        //         20, 20 + (index * 10),
        //         "url: " + url.url + "\t|\t" + "status: " + url.status
        //     );
        // });
        // doc.save('test.pdf')



        // basic table version
        // resource:
        // http://raw.githack.com/MrRio/jsPDF/master/
        //      choose example cell
        // http://raw.githack.com/MrRio/jsPDF/master/docs/module-cell.html#~table
        // https://github.com/MrRio/jsPDF/issues/2223
        
        // test data like JSON
        var data = [
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200},
            {url: "www.google.com", status: 200}, 
            {url: "www.yahoo.com", status: 200}, 
            {url: "www.bing.com", status: 200}
        ];
        // add "id" property to data, it is like table primary key
        for (var i = 0; i < data.length; i++) {
            data[i].id = (i+1);
        }
        // table header data, need the next function createHeaders()
        var header = createHeaders(["id", "url", "status"]);

        // this function is require createHeaders(),
        // documentation unclear, so just copy / paste and use it,
        // if don't want id then remove "id: keys[i]" here, 
        // and don't add "id" property to data 
        function createHeaders(keys) {
            var result = [];
            for (var i = 0; i < keys.length; i += 1) {
                result.push({
                    id: keys[i],
                    name: keys[i],
                    prompt: keys[i],
                    width: 65,
                    align: "center",
                    padding: 0
                });
            }
            return result;
        }

        // invoke jsPDF, create table(), save() as PDF for download
        var doc = new jsPDF()
        console.log("header: ",header);
        console.log("data: ",data);
        doc.table(1, 1, data, header)
        doc.save('test.pdf')
    });
});