# GifTastic
This is a demo web application built as a group project created for a Full Stack JavaScript Coding Boot. The actual Application name is called Giftastic.

Giftastic is Gif - API loading applicaiton that allows the user to access Gif's from Giphy.com to pull select Gif's from the page for the user to see and enjoy.

A demo of the application is deployed via GitHub Pages at [https://swolfmn78.github.io/GifTastic/](https://swolfmn78.github.io/GifTastic/)
The main technologies used are [jQuery](https://jquery.com/). 
Additional technologies used are apis [Giphy](https://api.giphy.com).

### Overview

The goal of the application is to allow users to pull and view Gif's.  If they want to play a selected Gif all which would need be done is to click on the selected image which they want to view.  One click to start the Gif and another to stop it.


### Running the app yourself:
#### Clone the repository

```
git clone https://github.com/SWolfMN78/GifTastic.git
#or using SSH
git clone git@github.com:SWolfMN78/GifTastic.git
cd project1JeRKS
```

You need a Firebase database available, and then modify the firebase configuration section in the file assets/javascript/app.js . We are not able to provide instructions. For right now, we have implemented secure authentication for users, but not a good way for guests to authenticate without creating a login, and so we require the data bases read and write rules to be open:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

However, if you just require your guests to create a login, you can use the default rules:
```
{
  "rules": {
   ".read": "auth != null",
    ".write": "auth != null"
  }
}
```