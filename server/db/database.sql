CREATE DATABASE portfolio;

CREATE TABLE blogs(blog_id SERIAL PRIMARY KEY, title VARCHAR(255), content VARCHAR(2000), likes INT);

INSERT INTO blogs(title, content, likes) VALUES('My first blog', 'This is my first blog', 0);