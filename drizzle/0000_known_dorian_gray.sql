CREATE TABLE `poc_client` (
	`uid` varchar(100) NOT NULL,
	`status` enum('complete','incomplete') NOT NULL,
	CONSTRAINT `poc_client_uid` PRIMARY KEY(`uid`)
);
