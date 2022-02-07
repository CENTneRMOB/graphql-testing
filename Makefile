migrate:
	npx sequelize-cli db:migrate

drop:
	npx sequelize-cli db:migrate:undo