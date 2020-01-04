<?php

namespace App\Controller;

use App\Document\Product;
use App\Repository\ProductRepository;
use App\Service\SerializeService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/products")
 */
class ProductController extends AbstractController
{
    private $documentManager;
    private $serializeService;

    public function __construct(DocumentManager $documentManager, SerializeService $serializeService)
    {
        $this->documentManager = $documentManager;
        $this->serializeService = $serializeService;
    }

    /**
     * Get products
     * @Route("/", name="get_products",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getProducts(Request $request)
    {
        $filter = ($request->get('filter')[0]) ?? $request->get('filter')[0];
        $sort = ($request->get('sort')[0]) ?? $request->get('sort')[0];
        $name = ($request->get('name')[0]) ?? $request->get('name')[0];
        $pages = ($request->get('pages')[0]) ? $request->get('pages')[0] : 10;
        $products = $this->serializeService->serialize($this->documentManager->getRepository(Product::class)->getAll($filter, $sort, $name, $pages));
        return new JsonResponse($products, 200);
    }

    /**
     * Get product by id
     * @Route("/{id}", name="get_product_by_id",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getProductById(Request $request, $id)
    {
        $product = $this->serializeService->serialize($this->documentManager->getRepository(Product::class)->find($id));
        if ($product === "null")
            return new JsonResponse(["error" => "Product doesn't exist"], 500);
        return new JsonResponse($product, 200);
    }

    /**
     * Get products by category id
     * @Route("/{category_id}/category", name="get_product_by_cat_id",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getProductsByCategoryId(Request $request, $category_id)
    {
        $products = $this->serializeService->serialize($this->documentManager->getRepository(Product::class)->findBy(['category' => $category_id]));
        return new JsonResponse($products, 200);
    }
}