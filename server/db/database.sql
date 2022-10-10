CREATE DATABASE portfolio;

CREATE TABLE blogs(blog_id SERIAL PRIMARY KEY, title VARCHAR(255), author VARCHAR(100), content VARCHAR(2000), likes INT);

INSERT INTO blogs(title, content, author, likes) VALUES('My first blog', 'This is my first blog', 'anon', 0);