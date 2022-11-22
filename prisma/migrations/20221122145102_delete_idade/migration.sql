/*
  Warnings:

  - You are about to drop the column `idade_minima` on the `evento` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_evento" TEXT NOT NULL,
    "data_hora_evento" DATETIME NOT NULL,
    "local_evento" TEXT NOT NULL,
    "maximo_pessoas" INTEGER NOT NULL
);
INSERT INTO "new_evento" ("data_hora_evento", "id", "local_evento", "maximo_pessoas", "nome_evento") SELECT "data_hora_evento", "id", "local_evento", "maximo_pessoas", "nome_evento" FROM "evento";
DROP TABLE "evento";
ALTER TABLE "new_evento" RENAME TO "evento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
