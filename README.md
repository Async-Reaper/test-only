## Инструкция по запуску

Стандартный запуск

```sh
yarn install
yarn start
```

Запуск через Docker

```sh
docker build -t only .
docker run -p 6002:80 only
```
После запуска открыть http://localhost:6002
