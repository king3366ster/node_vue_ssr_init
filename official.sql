DROP TABLE IF EXISTS `backend_packagemanager`;
DROP TABLE IF EXISTS `backend_bannermanager`;
DROP TABLE IF EXISTS `backend_seomanager`;
DROP TABLE IF EXISTS `backend_casetop`;
DROP TABLE IF EXISTS `backend_casetype`;
DROP TABLE IF EXISTS `backend_casecontent`;
DROP TABLE IF EXISTS `backend_casetopdetail`;


CREATE TABLE `backend_packagemanager` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `client` varchar(128) NOT NULL,
  `application` varchar(128) NOT NULL,
  `version` varchar(128) NOT NULL,
  `filetype` varchar(128) NOT NULL DEFAULT "",
  `filelink` varchar(256) NOT NULL DEFAULT "",
  `operator` varchar(256) NOT NULL DEFAULT "",
  `etag` varchar(256) NOT NULL DEFAULT "",
  `extra` varchar(1024) NOT NULL DEFAULT "",
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY (`client`),
  KEY (`application`),
  KEY (`version`),
  KEY (`filetype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `backend_bannermanager` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `banner_type` varchar(128) NOT NULL DEFAULT "",
  `product_type` varchar(128) NOT NULL DEFAULT "",
  `title` varchar(128) NOT NULL DEFAULT "",
  `title_hidden` tinyint(1) NOT NULL DEFAULT 0,
  `desc` varchar(128) NOT NULL DEFAULT "",
  `desc_hidden` tinyint(1) NOT NULL DEFAULT 0,
  `image_url` varchar(256) NOT NULL DEFAULT "",
  `button_name` varchar(128) NOT NULL DEFAULT "",
  `button_link` varchar(256) NOT NULL DEFAULT "",
  `is_shown` tinyint(1) NOT NULL DEFAULT 1,
  `show_order` int(11) NOT NULL DEFAULT 999,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY (`product_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `backend_seomanager` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `desc` varchar(256) NOT NULL DEFAULT "",
  `title` varchar(256) NOT NULL DEFAULT "",
  `keywords` varchar(256) NOT NULL DEFAULT "",
  `description` varchar(1024) NOT NULL DEFAULT "",
  `author` varchar(256) NOT NULL DEFAULT "",
  `robots` varchar(256) NOT NULL DEFAULT "",
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `backend_casetop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_name` varchar(128) NOT NULL,
  `case_pic` varchar(256) NOT NULL DEFAULT "",
  `case_tt` varchar(128) NOT NULL DEFAULT "",
  `case_desc` varchar(1024) NOT NULL DEFAULT "",
  `case_link` varchar(256) NOT NULL DEFAULT 0,
  `case_lt_pic` varchar(256) NOT NULL DEFAULT "",
  `case_lt_logo` varchar(256) NOT NULL DEFAULT "",
  `is_shown` tinyint(1) NOT NULL DEFAULT 1,
  `show_order` int(11) NOT NULL DEFAULT 999,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `case_name` (`case_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `backend_casetype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_type` varchar(128) NOT NULL,
  `is_shown` tinyint(1) NOT NULL DEFAULT 1,
  `show_order` int(11) NOT NULL DEFAULT 999,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `case_type` (`case_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `backend_casecontent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_name` varchar(128) NOT NULL,
  `case_type` varchar(128) NOT NULL,
  `case_logo` varchar(256) NOT NULL DEFAULT "",
  `case_logo_link` varchar(128) NOT NULL DEFAULT "",
  `case_desc` varchar(1024) NOT NULL DEFAULT "",
  `used_product` varchar(256) NOT NULL DEFAULT "",
  `desc_link` varchar(256) NOT NULL DEFAULT "",
  `is_shown` tinyint(1) NOT NULL DEFAULT 1,
  `show_order` int(11) NOT NULL DEFAULT 999,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `case_name` (`case_name`),
  KEY (`case_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `backend_casetopdetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_name` varchar(128) NOT NULL,
  `link_name` varchar(128) NOT NULL,
  `seo_title` varchar(256) NOT NULL DEFAULT "",
  `seo_keywords` varchar(256) NOT NULL DEFAULT "",
  `seo_desc` varchar(1024) NOT NULL DEFAULT "",
  `video` varchar(256) NOT NULL DEFAULT "",
  `top_pic` varchar(256) NOT NULL DEFAULT "",
  `logo_url` varchar(256) NOT NULL DEFAULT "",
  `case_types` varchar(256) NOT NULL DEFAULT "",
  `case_home` varchar(256) NOT NULL DEFAULT "",
  `case_ios_down` varchar(256) NOT NULL DEFAULT "",
  `case_aos_down` varchar(256) NOT NULL DEFAULT "",
  `case_down` varchar(256) NOT NULL DEFAULT "",
  `used_product` varchar(256) NOT NULL DEFAULT "",
  `area1_tt` varchar(256) NOT NULL DEFAULT "",
  `area1_desc` varchar(1024) NOT NULL DEFAULT "",
  `area2_tt` varchar(256) NOT NULL DEFAULT "",
  `area2_desc` varchar(1024) NOT NULL DEFAULT "",
  `area3_tt` varchar(256) NOT NULL DEFAULT "",
  `area31_pic` varchar(256) NOT NULL DEFAULT "",
  `area31_desc` varchar(1024) NOT NULL DEFAULT "",
  `area32_pic` varchar(256) NOT NULL DEFAULT "",
  `area32_desc` varchar(1024) NOT NULL DEFAULT "",
  `area33_pic` varchar(256) NOT NULL DEFAULT "",
  `area33_desc` varchar(1024) NOT NULL DEFAULT "",
  `area34_pic` varchar(256) NOT NULL DEFAULT "",
  `area34_desc` varchar(1024) NOT NULL DEFAULT "",
  `case_remark` varchar(1024) NOT NULL DEFAULT "",
  `case_man` varchar(256) NOT NULL DEFAULT "",
  `case_man_position` varchar(256) NOT NULL DEFAULT "",
  `is_shown` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `case_name` (`case_name`),
  UNIQUE KEY `link_name` (`link_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
