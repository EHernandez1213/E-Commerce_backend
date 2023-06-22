# E-Commerce backend

  ## Description

  This project was created because I wanted to store items in a database for an e-commerce store where I can categorize and tag items so it would be easier for users to look through the inventory.
  What this does is it uses models to categorize and tag products and uses routes to view, create, replace, and delete items in the database.
  What I learned from project was how to use models and sequelize to store data in mysql. I also learned how to use routes to modify the data in the database.

  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)
  
  [Credits](#credits)

  [License](#license)

  [Badge](#badge)

  [Contribute](#contribute)

  [Test](#test)

  [Questions](#questions)

  ## Installation

  N/A

  ## Usage

  To start this off you will have to go into mysql by inputing in the terminal "mysql -u root -p". Afterwards you will be asked for yout password which you will input. Next you will source the schema file by inputing "source db/schema.sql" in the terminal. Now you can type "quit" in the terminal to exit out of mysql. Next step is to seed the database by typing "npm run seed". Now you can run the server by inputing "node server.js" in the terminal. Now you can open up Insomnia to look at the routes. If you do http://localhost:3001/api/ followed by tags/ categories/ or products/ you will do something with those routes. if you do a GET you will view all of the contents to the given routes. if you add a number follow by a / "1/" you will see whatever item is in that id value. For a POST request it will add whatever you put in the JSON tab to the route selected. It does have to be an object and it has to be stringified. For a PUT you will have to give it an id like how we viewed specific items, and it will replace that item with what is in the JSON tab. For the DELETE you will also give it the id we want to delete and it will be deleted.
  Video Demonstration: https://drive.google.com/file/d/1yh__QNdBAepZ7T9vF1Ww-l0n03GY983V/view


  ## Credits
  
  N/A

  ## License
    
  Copyright (C) 2023 Elenilson Hernandez
    
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
  associated documentation files (the "Software"), to deal in the Software without restriction, 
  including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do 
  so, subject to the following conditions:
    
  The above copyright notice and this permission notice shall be included in all copies or substantial
  portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  

  ## Badge

![License](https://img.shields.io/badge/License-MIT-green)

  ## Contribute

  There is currently no way to contribute.

  ## Test

  There is currently no way for someone to test this project.

  ## Questions

  If you have any questions you can reach me at elenilson.hernandez1213@gmail.com or my Github account, https://github.com/EHernandez1213
