# Makefile for the 'volumes' example

include ../include/make/init.mk

start: ## Start services
	@printf "\n\033[1;33m%s\033[0m\n\n" "Starting services..."
	@docker compose up -d

restart: ## Restart Docker services
	@printf "\n\033[1;33m%s\033[0m\n\n" "Restarting services..."
	@docker compose restart

stop: ## Stop services
	@printf "\n\033[1;33m%s\033[0m\n\n" "Stopping services..."
	@docker compose down

inspect-volume: ## Inspect the backend-logs named volume
	@printf "\n\033[1;33m%s\033[0m\n\n" "Inspecting the backend-logs named volume..."
	@docker volume inspect 04-volumes_backend-logs
	@printf "\n\033[1;35m%s\033[0m\n\n" "💡 You can view the contents of the volume by opening the mountpoint in your file explorer."
