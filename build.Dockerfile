## === STAGE 1: Build ===
FROM node:current-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

## === STAGE 2: Production Files ===
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# to copy resume do
# k cp Resume.pdf portfolio/portfolio-59c89f6499-nkvxz:/usr/share/nginx/html