FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

# Build the app for production
RUN yarn build

# Expose port 3000
EXPOSE 3001

# Start the app
CMD ["yarn", "start"]
