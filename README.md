# coding_test_CondoWorks
Coding_Test for condoworks coop

This assesment was completed by Sanchit Gogia on April 26, 2022
It includes a parser for utility bills, and a web scraper for condoworks. It was made and compiled in a linux virtual environment using Ubuntu.

Steps for running the programs:
1. Clone the repository
2. Navigate to the working directory in the console
3. Type "npm install"
4. For question 1, run the command "node q1 <filepath>"
5. For question 2, run the command "node q2"

NOTE: For question 2, there is a 10 second wait at the end of the program to make sure that the download finishes and browser instance is closed. The code will provide
  provide the download path of the file after the browser has closed. The code works but the progress may be hard to see due to the browser being launched in headless mode,
  to view real time progress, set "headless" parameter in line 6 "const browser =  await puppeteer.launch({headless: true, slowMo: 75, defaultViewport: null});" to be false.
  
