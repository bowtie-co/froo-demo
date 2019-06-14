####################################################
# Base node image for dev + builder
####################################################
FROM node:9.6.1 AS dev

LABEL maintainer "Charlie McClung <charlie@bowtie.co>"

# Install chrome
RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json package-lock.json /usr/src/app/
RUN npm install

# Add app
COPY . /usr/src/app

# Start app
CMD [ "npm", "start" ]

####################################################
# run builder from dev for both staging & production
####################################################
FROM dev as builder

LABEL maintainer "Charlie McClung <charlie@bowtie.co>"

ENV BASE_DIR /app

RUN mkdir -p ${BASE_DIR}

RUN npm run build:staging && mv dist/atomic-angular-demo ${BASE_DIR}/staging
RUN npm run build:production && mv dist/atomic-angular-demo ${BASE_DIR}/production

####################################################
# run staging/production environment (based on ENV)
####################################################
FROM nginx:1.13.9-alpine

LABEL maintainer "Charlie McClung <charlie@bowtie.co>"

ENV BASE_DIR /app

RUN rm -rf /etc/nginx/conf.d

COPY nginx-entrypoint.sh /
COPY nginx /etc/nginx
COPY --from=builder ${BASE_DIR} ${BASE_DIR}

EXPOSE 80

ENTRYPOINT [ "/nginx-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]
