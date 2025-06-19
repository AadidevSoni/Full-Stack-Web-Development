import * as fs from 'fs/promises'

//Creating directory
try {
  await fs.mkdir('/Users/aadidev/Desktop/sprites/promises')
  console.log('Folder created...');

  //await fs.mkdir('/Users/aadidev/Desktop/sprites/folderCreation/promises') //will give error
  await fs.mkdir('/Users/aadidev/Desktop/sprites/folderCreation/promises',{recursive: true});  //Lets us create both folders
} catch (error) {
  console.log(error);
}


//Read Content
try {
  const files = await fs.readdir("/Users/aadidev/Desktop/sprites/promises");
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}


//Remove Folder/Directory
//Inorder to remove a folder, it should be empty
try {
  await fs.rmdir("/Users/aadidev/Desktop/sprites/promises");  
  console.log("Remmoved folder...");
} catch (error) {
  console.log(error);
}
  

//Create and Write Files
try {
  await fs.writeFile('README.md',"Hello NodeJS"); //be default if we run again,  it replaces it
} catch (error) {
  console.log(erro);
}
  

//Read File
try {
  const data = await fs.readFile("README.md",'utf-8')
  console.log(data);
} catch (error) {
  console.log(error);
}


//Appending data 
try {
  await fs.appendFile('README.md',"NODEJS IS THE BEST"); //be default if we run again,  it replaces it
} catch (error) {
  console.log(error);
}


//Copy File
try {
  await fs.copyFile("README.md","info.txt");
} catch (error) {
  console.log(error);
}


//Get File Information
try {
  const info = await fs.stat("info.txt");
  console.log(info);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log(error);
}