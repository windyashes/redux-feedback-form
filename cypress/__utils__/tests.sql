DROP TABLE IF EXISTS "gallery";


CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR,
    "title" VARCHAR,
    "description" TEXT,
    "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" ("url", "title", "description", "likes")
VALUES ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.', 2),
         ('images/goat_small.jpg', 'Different...', 'Not the same goat!', 1),
         ('images/goat_small.jpg', 'Something Else!', 'Not at all the same!', 0);