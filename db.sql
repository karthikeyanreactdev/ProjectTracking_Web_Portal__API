
--for creating random UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--user table 
CREATE TABLE "users" (
	"id"  uuid DEFAULT uuid_generate_v4 (),
	"name" VARCHAR(255) NULL,
	"role" VARCHAR(100) NULL
)
;
--project table
CREATE TABLE "projects" (
	"id"  uuid DEFAULT uuid_generate_v4 (),
	"projectname" VARCHAR(255) NULL,
	"startdate" DATE NULL,
	"enddate" DATE NULL,
	"status" VARCHAR(100) NULL
)
;