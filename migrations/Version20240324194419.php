<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240324194419 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD type_user VARCHAR(255) NOT NULL, ADD picture_profil VARCHAR(255) DEFAULT NULL, ADD firstname VARCHAR(255) NOT NULL, ADD lastname VARCHAR(255) NOT NULL, ADD phone_number VARCHAR(255) DEFAULT NULL, ADD name_of_company VARCHAR(255) DEFAULT NULL, ADD siret_number VARCHAR(255) DEFAULT NULL, ADD address_siege VARCHAR(255) DEFAULT NULL, ADD address VARCHAR(255) DEFAULT NULL, ADD postal_code VARCHAR(255) NOT NULL, ADD city VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `user` DROP type_user, DROP picture_profil, DROP firstname, DROP lastname, DROP phone_number, DROP name_of_company, DROP siret_number, DROP address_siege, DROP address, DROP postal_code, DROP city');
    }
}
