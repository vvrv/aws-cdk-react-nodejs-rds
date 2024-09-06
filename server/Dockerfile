FROM node:20-alpine3.19
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package*.json ./
COPY ecosystem.config.js .
RUN npm install
COPY src/ src/
EXPOSE 3000
CMD ["npm", "start"]
# CMD [ "npm", "run", "pm2:start"]
