# Makefile for the 'basic' example

include ../include/make/init.mk

start: ## Start the example
	@printf "\n\033[1;33m%s\033[0m\n\n" "Starting the example..."
	@docker compose up

cleanup: ## Cleanup any stopped containers
	@printf "\n\033[1;33m%s\033[0m\n\n" "Cleaning up stopped containers..."
	@docker compose down
