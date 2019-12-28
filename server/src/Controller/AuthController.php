<?php

namespace App\Controller;

use App\Document\User;
use App\Service\SerializeService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/auth")
 */
class AuthController
{
    private $documentManager;
    private $serializeService;

    public function __construct(DocumentManager $documentManager, SerializeService $serializeService)
    {
        $this->documentManager = $documentManager;
        $this->serializeService = $serializeService;
    }

    /**
     * Login
     * @Route("/login", name="login",  methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        $data = $request->request->all();
        $user = $this->documentManager->getRepository(User::class)->findBy(['email' => $data['email'], 'password' => $data['password']]);
        $result = ($user != null) ? true : false;
        return new JsonResponse($result, 200);
    }
}