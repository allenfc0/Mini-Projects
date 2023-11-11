
//add event listener to the convert button
const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', clickConvertBtn);

function clickConvertBtn() {

    try {
        let data;
        let file;
        //get the data
        data = {
            "Product": {
                "0": "Cola",
                "1": "Lemon",
                "2": "Orange",
                "3": "Litchi"
            }, 
            "Quantity": {
                "0": 700,
                "1": 250,
                "2": 100,
                "3": 200
            }
        };

        

        //data = document.getElementById("json-textfield").value;

        //formatting starts here
        let csvRows = "";

        //get all the headers for the .csv file
        let headers = Object.keys(data);
        csvRows += headers.join(",") + "\n";
    

        //switch object(json format) to an array in order to loop through it

        //enter the corresponding data for each column
        //this code only works for this specific data object variable - Will ix this later
        //possible solution: convert json object to an array
        let values = "";
        for(let i = 0; i < Object.values(data.Product).length; i++) {
            //console.log(data["Product"][i]);
            values += data["Product"][i] + ",";

            //console.log(data["Quantity"][i]);
            values += data["Quantity"][i];
            
            csvRows += values + "\n";
            
            
            values = "";
        }
        

        createCsv(csvRows);
    } catch (e) {
        console.log(e);
    }
    
    
    
}

const createCsv = (csvRows) => {
    //create a file to download directly to the computer
    const blob = new Blob([csvRows], {type: "txt/csv"});
    const url = window.URL.createObjectURL(blob);
    const aLink = document.createElement("a");
    const aLinkText = document.createTextNode("download.csv");
    //set attributes for the download link
    aLink.setAttribute("href", url);
    aLink.setAttribute("download", "download.csv");
    aLink.setAttribute("id", "csv-download-link");
    aLink.appendChild(aLinkText);

    //add the a tag to the document
    document.getElementById("json-results").appendChild(aLink);
}

