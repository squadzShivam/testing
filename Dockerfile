FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
# RUN npm run build

COPY . .

# Expose port 4000 for the application
EXPOSE 4000

# CMD ["prisma", "generate"]
# Correct CMD instruction with commas between arguments
CMD ["npm", "start"]
RUN cd ../../../
RUN ls -la
# CMD

