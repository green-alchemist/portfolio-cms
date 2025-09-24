
# Strapi Dockerfile
FROM node:22-alpine

# Installing build dependencies for sharp
RUN apk update && apk add --no-cache curl build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Copy only package files and install dependencies first to leverage caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 1337

# Start the development server
CMD ["yarn", "develop"]
