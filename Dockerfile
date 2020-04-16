FROM node:12.16.1-alpine3.11

# set working directory
WORKDIR /app

# copy files to working directory
COPY client/package.json /app/client/package.json

# install react cli
RUN yarn global add react-scripts --silent

# install dependencies -> rebuild node-sass for linux
RUN cd client && yarn install --silent --pure-lockfile --ignore-scripts --check-files
RUN rm -rf /app/client/node_modules/node-sass/vendor/**/*
RUN mkdir -p /app/client/node_modules/node-sass/vendor/linux_musl-x64-72
RUN wget https://github.com/sass/node-sass/releases/download/v4.13.1/linux_musl-x64-72_binding.node -P /app/client/node_modules/node-sass/vendor/linux_musl-x64-72
RUN cd client && npm rebuild node-sass

# copy files to working directory
COPY package.json /app/package.json

# install server dependencies
RUN yarn install --silent --pure-lockfile --ignore-scripts --check-files

# copy files to working directory
COPY . .

# build react app
RUN cd client && yarn build

# expose port
EXPOSE 3852

# run application
CMD ["node", "server.js"]
