# Sử dụng môi trường Node.js nhẹ
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file cấu hình vào trước để tận dụng cache của Docker
COPY package*.json ./
RUN npm install

# Copy toàn bộ code còn lại
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["npm", "start"]