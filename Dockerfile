FROM nginx
COPY /dist/front /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]