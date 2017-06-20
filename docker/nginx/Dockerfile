FROM nginx:1.13.1

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD ./docker/nginx/nginx.conf /etc/nginx/
#
COPY ./docker/nginx/index.html /etc/nginx/

#RUN chmod +x /etc/nginx/entrypoint.sh

#ENTRYPOINT ["/etc/nginx/entrypoint.sh"]

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Set the default command
# when creating a new container
CMD service nginx start