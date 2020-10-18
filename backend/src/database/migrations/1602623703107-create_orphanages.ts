import {MigrationInterface, QueryRunner, Table} from "typeorm";

// Comando para criar arquivo da tabela "orphanages": yarn typeorm migration: create -n create_orphanages
// Rodar novamente yarn typeorm migration:run para criar essa tabela "orphanages"
// Comando para reverter: yarn typeorm migration:revert

export class createOrphanages1602623703107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZAR ALTERAÇÕES NO BANCO DE DADOS
        // CRIAR TABELAS, CRIAR CAMPOS E DELETAR CAMPOS
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                }, 
                {
                    name: 'phone',
                    type: 'varchar'
                }, 
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                }, 
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DESFAZ O QUE FOI FEITO NO UP

        await queryRunner.dropTable('orphanages')
    }

}
