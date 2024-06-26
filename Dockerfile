# step 1 빌드를 하기 위한 과정
FROM node:16-alpine AS build
COPY    ./package* /usr/src/app/
WORKDIR /usr/src/app
RUN     npm install
COPY . /usr/src/app
ENV REACT_APP_BACKEND_ADDR=https://good-companion.shop
RUN npm run build

# step 2 실행 스테이지를 위한 과정
FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx/conf.d
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]