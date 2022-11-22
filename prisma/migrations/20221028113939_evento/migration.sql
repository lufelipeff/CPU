-- CreateTable
CREATE TABLE "evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_evento" TEXT NOT NULL,
    "data_hora_evento" DATETIME NOT NULL,
    "local_evento" TEXT NOT NULL,
    "maximo_pessoas" INTEGER NOT NULL,
    "idade_minima" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "cliente_evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_cliente" INTEGER NOT NULL,
    "id_evento" INTEGER NOT NULL,
    CONSTRAINT "cliente_evento_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "evento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cliente_evento_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
