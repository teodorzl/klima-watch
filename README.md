# KlimaWatch - A simple weather app

## Description
This is a Saxion University project for the course "Software Engineering". 
The goal of the project is to create a simple weather app using the LoRa sensor.
Recieved data is stored in a database and displayed in the app.

The app is written in C# using the .NET Core framework.

## Installation
1. Clone the repository and install dotnet core 6 or 7 and a DB server, preferably MsSQL. 
2. Open Data/KlimaWatchContext.cs, uncomment the local connection string line and change the password to the correct one (other things may need to be changed if another DB server is used). 
3. Go to the project folder and type – ```dotnet ef database update```
Note: if the ef module is not installed, follow https://stackoverflow.com/questions/56862089/cannot-find-command-dotnet-ef  
4. In the same folder, type ```dotnet run```
5. Click on one of the links shown in the terminal to open the website.

## Team members
- Teodor Zlatkov 542734 542734@student.saxion.nl
- Thanh Tran 516467 516467@student.saxion.nl
- Tycho Jurjens 518030 518030@student.saxion.nl
- Jurijs Zuravlovs  440882 440882@student.saxion.nl
