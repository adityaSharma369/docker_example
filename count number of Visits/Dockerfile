FROM node:alpine


WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .


CMD ["npm","start"]
CMD ["chmod","-R","777","."]

volume:
  - ./data/uploads:/build/uploads
  - ./data/thumbnails:/build/thumbnails

