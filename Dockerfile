FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY "package.json" "package-lock.json*" /app/

RUN npm install

COPY . /app

EXPOSE 5000

CMD ["npm" , "run" , "serve" ]
