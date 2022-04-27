-- Create Schema
CREATE SCHEMA p2;
GO

-- Drop Schema
-- DROP SCHEMA IF EXISTS p2;

-- Create User Table
CREATE TABLE p2.Users (
    Id INT NOT NULL PRIMARY KEY IDENTITY,
    Username VARCHAR(40)
        CHECK(LEN(Username) > 0),
    Password VARCHAR(40)
        CHECK(LEN(Password) > 6),
    Email VARCHAR(40)
        CHECK(LEN(Email) > 4)
);

-- Drop Users Table
-- DROP TABLE p2.Users;

-- Create Comment Table
CREATE TABLE p2.Comment (
    Id INT NOT NULL PRIMARY KEY IDENTITY,
    UserId INT NOT NULL
        FOREIGN KEY REFERENCES p2.Users (Id) ON DELETE CASCADE,
    Content VARCHAR(3000)
);

-- Drop Comment Table
-- DROP TABLE p2.Comment;

-- Create Progress Table
CREATE TABLE p2.Progress (
    UserId INT NOT NULL
        FOREIGN KEY REFERENCES p2.Users (Id) ON DELETE CASCADE,
    Chapter1 BIT,   -- 1 if completed, 0 if not completed
    Challenge101 BIT  -- 1 if completed, 0 if not completed
)

-- DROP Progress Table
-- DROP TABLE p2.Progress;

-- CREATE Challenge Table
CREATE TABLE p2.Challenge (
    Id INT NOT NULL PRIMARY KEY IDENTITY,
    Description VARCHAR(4000)
);

-- Drop Challenge Table
-- DROP TABLE p2.Challenge;

-- Populate User Table
INSERT INTO p2.Users (Username, Password, Email)
VALUES
    ('username', 'password', 'email@gmail.com'),
    ('username1', 'password1', 'email1@gmail.com'),
    ('username2', 'password2', 'email2@gmail.com');

-- Populate Comment Table
INSERT INTO p2.Comment (UserId, Content)
VALUES
    (1, 'this is a comment.'),
    (2, 'this is another comment'),
    (2, 'this is also a comment.');

-- Populate Progress Table
INSERT INTO p2.Progress (UserId, Chapter1, Challenge101)
VALUES
    (1, 1, 1),
    (2, 1, 0);

-- Populate Challenge Table
INSERT INTO p2.Challenge (Description)
VALUES
    ('This is a description of challange id 1.'),
    ('This is a description of challenge id 2.'),
    ('this is a description of challenge id 3.');

-- Show Tables
SELECT * FROM p2.Users;
SELECT * FROM p2.Comment;
SELECT * FROM p2.Progress;
SELECT * FROM p2.Challenge;

-- To add more chapters and challenges to p2.Progress
ALTER TABLE p2.Progress
ADD Challenge102 BIT NOT NULL DEFAULT (0), 
    Chapter2 BIT NOT NULL DEFAULT (0), 
    Challenge201 BIT NOT NULL DEFAULT (0), 
    Challenge202 BIT NOT NULL DEFAULT (0);

-- To add more challenges to p2.Challenges
INSERT INTO p2.Challenge (Description)
VALUES
    ('This is a newly added challenge number 4');