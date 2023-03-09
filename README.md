<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo API

1.- Clonar el proyecto

```
yarn install
```

2.- Clonar archivo `.env/template` y renombrarlo a `.env`

3.- Cambiar las variables de entorno

4.- Levantar la base de datos

```
docker-compose up -d
```

5.- Para llenar la base de datos ejecutar el seed con:
```
http://localhost:3000/api/seed
```

6.- Levantar modo de desarrollo 
```
yarn start:dev
```
