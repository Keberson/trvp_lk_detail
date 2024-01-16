# Сборка и запуск

## Фронтенд
Для сборки клиентской части приложения используется следующая команда:
```shell
npm run build
```
В последствие приложение запускается с помощью *serve*, для его установки используется:
```shell
npm install -g server
```
Для запуска клиентской части используется:
```shell
serve -s build
```

## Бэкенд
Требуется добавить Enviroment variable:

| Название     | Значение                                |
|--------------|-----------------------------------------|
| POSTGRES_URL | <Строка подключения к БД\>              |
| PORT         | <Порт для бэкенда\>                     |
| CORS         | <Список разрешенных URL через пробел \> |


Для сборки серверной части используется следующая команда:
```shell
npm run build
```
Для запуска серверной части используется
```shell
npm start
```

## База данных
Для использования базы данных требуется запустить следующие скрипты:
- Создание таблицы `users`:
```
CREATE TABLE users (
	id varchar NOT NULL,
	login varchar NOT NULL,
	"password" varchar NOT NULL
);
```
- Создание таблицы `products`:
```
CREATE TABLE products (
	id int4 NOT NULL,
	"name" varchar(100) NULL,
	"number" int4 NOT NULL,
	CONSTRAINT check_number_positive CHECK ((number >= 0)),
	CONSTRAINT products_pk PRIMARY KEY (id)
);
```
- Создание таблицы `order_info`:
```
CREATE TABLE order_info (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	customer varchar(100) NULL,
	order_date date NOT NULL,
	CONSTRAINT order_info_pk PRIMARY KEY (id)
);
```
- Создание таблицы `order_row`:
```
CREATE TABLE order_row (
	id varchar(100) NOT NULL,
	product int4 NOT NULL,
	"number" int4 NOT NULL,
	"order" int4 NULL,
	CONSTRAINT order_row_pk PRIMARY KEY (id),
	CONSTRAINT order_row_fk FOREIGN KEY ("order") REFERENCES order_info(id) ON DELETE CASCADE,
	CONSTRAINT order_row_product_fk FOREIGN KEY (product) REFERENCES products(id)
);
```
- Создание функций для триггеров:
```
CREATE OR REPLACE FUNCTION delete_row_trigger_func()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
	begin
		update products 
		set "number" = (select "number" from products where id=old.product) + old."number"
		where id=old.product;
	return NEW;
	END;
$function$
;
```
```
CREATE OR REPLACE FUNCTION public.edit_row_trigger_func()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
	begin
		update products 
		set "number" = (select "number" from products where id=old.product) + old."number"
		where id=old.product;
		UPDATE products
		SET "number" = (SELECT "number" FROM products WHERE id=NEW.product) - NEW."number"
		WHERE id=NEW.product;
	return NEW;
	END;
$function$
;
```
```
CREATE OR REPLACE FUNCTION public.new_row_trigger_func()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
	UPDATE products
	SET "number" = (SELECT "number" FROM products WHERE id=NEW.product) - NEW."number"
	WHERE id=NEW.product;
	return NEW;
END;
$function$
;
```
- Создание триггеров в таблице `order_row`:
```
create trigger edit_row_trigger after
update
    on
    public.order_row for each row execute function edit_row_trigger_func();
```
```
create trigger new_row_trigger after
insert
    on
    public.order_row for each row execute function new_row_trigger_func();
```