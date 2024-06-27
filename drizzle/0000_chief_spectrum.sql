CREATE TABLE `users` (
	`uid` varchar(100) NOT NULL,
	`status` enum('complete','incomplete') NOT NULL,
	CONSTRAINT `users_uid` PRIMARY KEY(`uid`)
);