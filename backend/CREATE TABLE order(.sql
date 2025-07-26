CREATE TABLE order(
order_id INT PRIMARY key,
product_name VARCHAR(100),
QUANTITY INT,
status VARCHAR(50)
);

CREATE TABLE user(
    user_id INT auto_increment PRIMARY key,
    username VARCHAR(50)
);

CREATE TABLE conversation(
conversation_id INT auto_increment PRIMARY key,
user_id int,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN key(user_id) references users(user_id)
);

CREATE table message(
id int auto_increment PRIMARY key,
conversation_id int ,
sender VARCHAR(10),
message text,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN key (conversation_id) references conversation(conversation_id)
);