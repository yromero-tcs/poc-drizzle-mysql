CREATE TABLE `poc_client` (
	`uid` varchar(100) NOT NULL,
	`email` varchar(100),
	`appType` varchar(100),
	`status` enum('complete','incomplete') NOT NULL,
	CONSTRAINT `poc_client_uid` PRIMARY KEY(`uid`),
	CONSTRAINT `poc_client_email_unique` UNIQUE(`email`)
);
