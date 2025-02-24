# stage-1
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
# stage-2
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules


EXPOSE 3000

CMD ["npm", "start"]
