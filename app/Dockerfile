# Dockerfile for Job Board Web Application
# Hardening: Run as non-root user (node:node)
FROM node:20-alpine

# Install dumb-init to handle PID 1 properly
RUN apk add --no-cache dumb-init

ENV NODE_ENV=production
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy application source code
COPY --chown=node:node . .

# Ensure logs and uploads directories exist with proper write permissions for node user
RUN mkdir -p /app/logs /app/uploads && chown -R node:node /app/logs /app/uploads

# Hardening: Switch to non-root user
USER node

EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "src/server.js"]
