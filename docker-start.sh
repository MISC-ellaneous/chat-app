docker run -it --rm \
  -p 3000:3000 \
  --name chat-app \
  -v $(pwd)/app:/usr/src/app \
  -w /usr/src/app node:0.10.32 \
  node index.js;
