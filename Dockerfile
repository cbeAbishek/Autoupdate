# Use the official Nginx base image
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files into the container
COPY . /usr/share/nginx/html

# Expose port 
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
