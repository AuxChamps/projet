<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TestRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TestRepository::class)]
#[ApiResource]
class Test
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $kadem = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getKadem(): ?string
    {
        return $this->kadem;
    }

    public function setKadem(string $kadem): static
    {
        $this->kadem = $kadem;

        return $this;
    }
}
