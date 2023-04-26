# Mailchimp-Newsletter-Subscription-Page

This is a newsletter signup page using the Mailchimp API.

## Setup

1. Open your console/terminal and use ```cd FOLDER_PATH``` to change directory to your desired folder
2. Run ```git clone https://github.com/Niksome/Mailchimp-Newsletter-Subscription-Page.git``` in your console
3. Download [Node.js](https://nodejs.org/en)
4. Run ```npm install``` in your console
5. [Create a Mailchimp account](https://login.mailchimp.com/signup/?_gl=1*1h7w37y*_up*MQ..*_ga*NTgwMjUxNDQ2LjE2ODI1MTIzMDU.*_ga_N5HD1RTH6E*MTY4MjUxMjMwNS4xLjEuMTY4MjUxMjMxMy4wLjAuMA..)
6. Rename the ```.env_sample``` file to ```.env```
7. Paste your Mailchimp API key instead of ```YOUR_API_KEY_HERE```
8. Paste your list id instead of ```YOUR_LIST_ID_HERE```
9. Go to the public folder -> img folder and delete Niksome Logo.jpg
10. Put your logo in this folder
11. Go to line 24 in the ```signup.html``` file and change the link to ```img/YOUR_IMGE_NAME```
12. Go to line 32 in the ```signup.html``` file and change ```Niksome``` to your name
13. Go to line 42 in the ```app.js``` file and change ```niksome``` to your name

Now you are ready to go!

## Start the server

### Local server

Run ```node app.js``` in your console. Now you can open up a web browser and type ```localhost:3000``` in the searchfield.
Great your server is running localy and you can now start using the application!

If you want for other people to be able to visit your newsletter subscription page you will have to upload the files to a server:

### Uploading the files to Heroku

Documentation comming soon.
