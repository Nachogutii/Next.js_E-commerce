# Descripción



## Ejecutar en dev

1. Clonar el repositorio
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno
3. Instalar dependencias ```npm install```
4. Levantar la bbdd ```docker compose up -d```
5. Ejecutar las migraciones de prisma ```npx prisma migrate dev```
6. Ejecutar el seed ```npm run seed```
7. Ejecutar el proyecto ```npm run dev```



## Ejecutar en prod
