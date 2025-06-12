# ProApache     Instrucciones para construir y correr la imagen

Este proyecto contiene una imagen Docker que sirve una aplicación Angular estática mediante Apache, utilizando Debian como imagen base.


## Pasos para construir y ejecutar

### 1 Compilar la aplicación Angular
ng build --configuration=production
### 2 Construir la imagen Docker (angular-apache)
docker build -t angular-apache .
### 3 Ejecutar contenedor
docker run -p 8080:80 angular-apache
### 4 volumenes para el desarrollo para realizar cambios en el codigo sin la necesidad de reconstruir la imagen
### usamos el comando ---> docker run -v<host>:<contenedor> <imagen>
docker run -v C:\Users\Nasly\Desktop\proApache\dist\pro-apache\browser:/var/www/html -p 8085:80 angular-apache
###    Modifique por su  ruta local
###   docker run -v C:\ruta\al\nombreproyecto\dist\pro-apache\browser:/var/www/html -p 8085:80 angular-apache

### 4 Luego acceda a la app en el navegador
http://localhost:8085
















### INFORME
### 1)npm install -g @angular/cli
### 2)ng new webPractica  
### 3)cd webPractica
### 4) ng serve -o
### 5)MODIFICAR app.component.html
### <h1>¡Bienvenido a mi servidor Docker con Angular!</h1>
### 6)construir
### ng build --configuration=production
### verificar:Archivos compilados 
### C:\Users\Nasly\Desktop\proApache\dist\pro-apache
### Todo listo para servir los archivos estáticos desde Apache en Docker.
### 8)Comando para construir y correr
###  docker build -t angular-apache .
### 9)ejecutar contenedor
### docker run -p 8080:80 angular-apache
### 10) para volumenes desde host y hacer cambios en el codigo sin necesidad de reconstruir la imagen usamos el comando --->docker run -v<host>:<contenedor> <imagen>
###  docker run -v C:\Users\Nasly\Desktop\proApache\dist\pro-apache\browser:/var/www/html -p 8085:80 angular-apache
###  EXPLICACION:
### -v Monta la carpeta local donde están los archivos compilados
###  C:\Users\Nasly\Desktop\proApache\dist\pro-apache\browser:/var/www/html	 (index.html, main.js, etc.) en la ruta que Apache sirve dentro del contenedor.

### "Docker, monta todos los archivos y carpetas dentro de C:\Users\Nasly\Desktop\proApache\dist\pro-apache\browser dentro del contenedor en /var/www/html."

### 11) subir al dockerhub
### 1 docker login
### 2 docker images
### 3 docker tag angular-apache nataliacontreras154/angular-apache:latest
### 4 docker push nataliacontreras154/angular-apache:latest