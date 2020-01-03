<?php

namespace App\Repository;

use Doctrine\ODM\MongoDB\Repository\DocumentRepository;


class ProductRepository extends DocumentRepository
{
    public function getAll($filter, $sort, $name)
    {
        $categoryArray = $this->createCategoryIn($filter);
        $query = $this->createQueryBuilder();

        if ($filter) {
            $query->field('category')->in($categoryArray);
        }

        if ($name) {
            $query->field('name')->equals(['$regex' => $name]);
        }

        if ($sort) {
            $query->sort('price', $sort);
        }

        return $query->getQuery()->execute();
    }

    private function createCategoryIn($filter)
    {
        return explode('_', $filter);
    }


}