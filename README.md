# react-todo

# How to use Todo-client'

####Without Docker
                
+ clone master and cd to root
+ npm install --save
+ cd src/config && add your base URL of API
+ npm start

####With Docker
                
+ clone master and cd to root
    + docker build -t frontend:latest .
    + docker run -d -p 3000:80 frontend:latest
