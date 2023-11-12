
//add event listener to the convert button
const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', clickConvertBtn);

function clickConvertBtn() {

    let data;
    let file;

    

    try {
        //get the data
        data = JSON.parse(document.getElementById("json-textfield").value + "");
        console.log(data);

        //formatting starts here
        let csvRows = "";

        //all the keys are the headers for the .csv
        let headers = Object.keys(data[0]);
        //convert the headers array to a string and separate by a ","
        csvRows += headers.join(",");
        //go to a new line
        csvRows += "\n";

        //enter the corresponding values for each column
        for(let i = 0; i < data.length; i++) {
            for(let value in data[i]) {
                csvRows += data[i][value] + ",";
            }
            csvRows += "\n";
        }
        
        createCsv(csvRows);
    } catch (e) {
        console.log(e);
    }
    
    
    
}

const convertJsonToArray = () => {

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

