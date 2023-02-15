FROM node:16-alpine

# Create app directory
WORKDIR /app
# Copy source files
COPY . .
# Install dependencies
RUN npm install
# Build application
RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "start" ]