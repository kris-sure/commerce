<?php

namespace App\Repository;

use Doctrine\ODM\MongoDB\Repository\DocumentRepository;


class ProductRepository extends DocumentRepository
{
    public function getAll($filter)
    {
        $categoryArray = $this->createCategoryIn($filter);
        $query = $this->createQueryBuilder();
        if ($filter) {
            $query->field('category')->in($categoryArray);
        }
        return $query->getQuery()->execute();
    }

    private function createCategoryIn($filter)
    {
        return explode('_', $filter);
    }


}