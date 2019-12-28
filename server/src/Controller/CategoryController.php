<?php

namespace App\Controller;

use App\Document\Category;
use App\Service\SerializeService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/categories")
 */
class CategoryController extends AbstractController
{
    private $documentManager;
    private $serializeService;

    public function __construct(DocumentManager $documentManager, SerializeService $serializeService)
    {
        $this->documentManager = $documentManager;
        $this->serializeService = $serializeService;
    }

    /**
     * Get categories
     * @Route("/", name="get_categories",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getCategories(Request $request)
    {
        $categories = $this->serializeService->serialize($this->documentManager->getRepository(Category::class)->findAll());
        return new JsonResponse($categories, 200);
    }
}