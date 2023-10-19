FROM node:14-alpine

# Create app directory
WORKDIR /app

# Copy only the necessary files for dependency installation
COPY package*.json ./

# Install all dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Copy the rest of the application source
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Command to run the application using nodemon
CMD ["./node_modules/.bin/nodemon", "./src/app.ts"]