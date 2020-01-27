<?php

namespace App\Controller;

use App\Document\Category;
use App\Document\Product;
use App\Document\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/")
 */
class SeedController extends AbstractController
{
    private $documentManager;

    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    /**
     * User
     * @Route("/seed", name="seed",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function seed(Request $request)
    {
        /*for($i = 1; $i <= 5; $i++) {
            $user = new User();
            $user->setEmail('user'.$i.'@gmail.com');
            $user->setPassword('123');
            $roleArray = [User::$ROLE_ADMIN, User::$ROLE_USER];
            $user->setRole($roleArray[array_rand($roleArray)]);
            $user->setCreated(date("Y-m-d"));
            $user->setUpdated(date("Y-m-d"));
            $this->documentManager->persist($user);
        }
        $this->documentManager->flush();

        $category1 = new Category();
        $category1->setName('Category 1');
        $category1->setCreated(date("Y-m-d"));
        $category1->setUpdated(date("Y-m-d"));
        $this->documentManager->persist($category1);

        $category2 = new Category();
        $category2->setName('Category 2');
        $category2->setCreated(date("Y-m-d"));
        $category2->setUpdated(date("Y-m-d"));
        $this->documentManager->persist($category2);

        $category3 = new Category();
        $category3->setName('Category 3');
        $category3->setCreated(date("Y-m-d"));
        $category3->setUpdated(date("Y-m-d"));
        $this->documentManager->persist($category3);

        $category4 = new Category();
        $category4->setName('Category 4');
        $category4->setCreated(date("Y-m-d"));
        $category4->setUpdated(date("Y-m-d"));
        $this->documentManager->persist($category4);


        for($i = 1; $i <= 150; $i++) {
            $product = new Product();
            $product->setName('Product ' . $i);
            $categoryArray = [$category1->getId(), $category2->getId(), $category3->getId(), $category4->getId()];
            $product->setCategory($categoryArray[array_rand($categoryArray)]);
            $product->setDesc('Description ' . $i);
            $priceArray = [100, 300, 4500, 9999, 450, 600, 900, 120, 50, 580, 3000, 4000, 2600, 8600];
            $product->setPrice($priceArray[array_rand($priceArray)]);
            $product->setImg('img' . $i . '.jpg');
            $product->setCreated(date("Y-m-d"));
            $product->setUpdated(date("Y-m-d"));
            $this->documentManager->persist($product);
        }
        $this->documentManager->flush();*/

        /*$product = $this->documentManager->getRepository(Category::class)->find('5e05d802e58a8f16d633fa54');
        $this->documentManager->remove($product);
        $this->documentManager->flush();*/

        return new JsonResponse(['result' => 'Seeded success!!!'], 201);
    }
}