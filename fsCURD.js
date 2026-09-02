const fs = require('fs');

const operation = process.argv[2];
if(operation=='write'){
    const name = process.argv[3];
    const content = process.argv[4];

    let fullname = "text/" + name + ".txt";
    fs.writeFileSync(fullname,content);
}
else if(operation=='read'){
    console.log("Enter full file name")
    const file = process.argv[2];
    let data = fs.readFileSync("text/"+file);
    console.log(data);
}
else if(operation=='delete'){
    console.log("Enter file name");
    let name = process.argv[2];
    fs.unlinkSync("text/"+name);   
}
else if(operation=="update"){
    let name = process.argv[2];
    let content = process.argv[3];
    fs.appendFileSync("text/"+name,content);
}
else{
    console.log("invalid choice");
}
// fs.writeFileSync("text/apple.txt","This is a fruit");

// let data = fs.readFileSync("text/apple.txt","utf-8");
// console.log(data);

// fs.unlinkSync("text/apple.txt");

// fs.appendFileSync("text/apple.txt"," and healthy also");