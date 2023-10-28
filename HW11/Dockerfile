FROM node:18.18-alpine

# Create app directory
WORKDIR /todo-api-app

# install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run application
CMD npm start