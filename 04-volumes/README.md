# 04 Volumes

## Running the application

1. Run `make start` or `docker compose up -d`.
2. Go to [http://localhost:4000](http://localhost:4000) in your web browser.
3. See the backend's message (number of requests) printed in your browser.
4. Run `make stop` or `docker compose down`.

## Viewing the files in the named volume

1. Start the services.
2. Run `make inspect-volume` or `docker volume inspect 04-volumes_backend-logs`.
3. Open the `mountpoint` path in your file explorer program.
