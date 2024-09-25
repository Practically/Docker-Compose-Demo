# Makefile for the 'service-config' example

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
