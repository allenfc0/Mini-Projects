
//add event listener to the convert button
const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', clickConvertBtn);

function clickConvertBtn() {

    let data;
    let file;

    //sample data
    data = [
        {
            "beverage":"coke",
            "quantity":750,
            "company":"the coca-cola company",
            "flavor":"cola"
        },
        {
            "beverage":"sprite",
            "quantity":250,
            "company":"the coca-cola company",
            "flavor":"lemon-lime"
        },
        {
            "beverage":"sunny d",
            "quantity":500,
            "company":"sunny delight beverages",
            "flavor":"orange"
        }
    ];

    try {
        //get the data
        //data = document.getElementById("json-textfield").value;

        //formatting starts here
        let csvRows = "";

        //all the keys are the headers for the .csv
        let headers = Object.keys(data[0]);
        //convert the headers array to a string and separate by a ","
        csvRows += headers.join(",");
        //go to a new line
        csvRows += "\n";

        //enter the corresponding values for each column
        let values = "";
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < data[0].length; j++) {
                values += data[i][j] + ",";
                console.log(data[i][j]);
            }
            csvRows += values + "\n";
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

