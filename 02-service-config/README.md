# 02 Service Configuration

1. Run `make start` or `docker compose up -d`.
2. Go to [http://localhost:4000](http://localhost:4000) in your web browser.
3. See the "Hello world!" message printed in your browser.
4. Run `make stop` or `docker compose down`.

- You shouldn't be able to get to [http://localhost:3000](http://localhost:3000) in your web browser.
    - Even though our Node.js server is listening on port 3000, our Docker service publishes to port 4000 on the host.
