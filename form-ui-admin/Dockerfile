# Create image based on the official Node image from dockerhub
FROM node:14.20 as cache-image

# Bundle app source
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN npm install

## Serve the app
CMD [ "npm", "start"]

# # Build frontend
# FROM cache-image as builder
# WORKDIR /usr/src/app
# COPY . /usr/src/app

# #read REACT_APP_API_URL from build arguments of Docker
# ARG REACT_APP_API_URL=${REACT_APP_API_URL}
# ENV REACT_APP_API_URL=${REACT_APP_API_URL}

# ARG PROJECT_NAME=${PROJECT_NAME}
# ENV PROJECT_NAME=${PROJECT_NAME}

# ARG REACT_APP_PROJECT_NAME=${REACT_APP_PROJECT_NAME}
# ENV REACT_APP_PROJECT_NAME=${REACT_APP_PROJECT_NAME}

# ARG NODE_ENV=${NODE_ENV}
# ENV NODE_ENV=${NODE_ENV}

# #replace new build version
# RUN sed -i "s/REACT_APP_BUILD_VERSION=/REACT_APP_BUILD_VERSION=$(date +%Y%m%d%H%M)/g" .env

# #run command to build and notify
# RUN npm run build

# # PROD environment
# # Create image based on the official NGINX image from dockerhub
# FROM nginx:1.16.0-alpine as deploy-image

# ## Set timezones
# RUN cp /usr/share/zoneinfo/Asia/Singapore /etc/localtime

# # Get all the builded code to root folder
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# # Copy nginx template to container
# COPY --from=builder /usr/src/app/ops/config/nginx.template.conf /etc/nginx/nginx.conf
# COPY --from=builder /usr/src/app/ops/config/default.template.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /usr/src/app/start-container.sh /etc/nginx/start-container.sh
# RUN chmod +x /etc/nginx/start-container.sh
# RUN mkdir -p /usr/share/nginx/html/media
# ## Serve the app
# CMD [ "/bin/sh", "-c", "/etc/nginx/start-container.sh" ]
