FROM node:22.14-bookworm-slim AS builder
WORKDIR /app
COPY . .
# Big packages cause false network connectivity alarms:
# https://github.com/yarnpkg/yarn/issues/4890
RUN yarn install --network-timeout 1000000
RUN yarn next build

FROM node:22.14-bookworm-slim AS final
ENV NODE_ENV production
WORKDIR /app
COPY --from=builder /app .

EXPOSE 80
EXPOSE 443

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
