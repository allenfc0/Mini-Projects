
//add event listener to the convert button
const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', clickConvertBtn);
let createdFile;

function clickConvertBtn() {

    let data;    

    try {
        //get the data
        data = (document.getElementById("json-textfield").value + "");

        if(!data) {
            console.log("no text here. Checking for file");
            data = document.getElementById("json-file-input").files;
            console.log(data);
        }

        let parseData = JSON.parse(data);

        //formatting starts here
        let csvRows = "";

        //all the keys are the headers for the .csv
        let headers = Object.keys(parseData[0]);
        //convert the headers array to a string and separate by a ","
        csvRows += headers.join(",");
        //go to a new line
        csvRows += "\n";

        //enter the corresponding values for each column
        for(let i = 0; i < parseData.length; i++) {
            for(let value in parseData[i]) {
                csvRows += parseData[i][value] + ",";
            }
            csvRows += "\n";
        }
        
        createCsv(csvRows);
    } catch (e) {
        console.log(e);
    }
    
    
    
}

//csvRows is formatted json for csv files
const createCsv = (csvRows) => {

    let url;
    let aLink;
    let aLinkText;
    let documentExists = document.getElementById("csv-download-link");

    if(documentExists) {
        documentExists.remove();
    }
    

    //create a file to download directly to the computer
    const blob = new Blob([csvRows], {type: "txt/csv"});
    
    url = window.URL.createObjectURL(blob);
    aLink = document.createElement("a");
    aLinkText = document.createTextNode("download.csv");
    //set attributes for the download link
    aLink.setAttribute("href", url);
    aLink.setAttribute("download", "download.csv");
    aLink.setAttribute("id", "csv-download-link");
    aLink.appendChild(aLinkText);
    //add the a tag to the document
    document.getElementById("json-results").appendChild(aLink);
    
}

