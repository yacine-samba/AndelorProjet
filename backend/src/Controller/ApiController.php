<?php

namespace App\Controller;

use App\Entity\Users;
use App\Repository\UsersRepository;
use App\Entity\Exposition;
use App\Entity\Reservation;
use App\Repository\ExpositionRepository;
use App\Repository\ReservationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Csrf\TokenStorage\TokenStorageInterface;
use Symfony\Component\Security\Http\Attribute\CurrentUsers;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use function PHPUnit\Framework\returnValue;

class ApiController extends AbstractController
{

    private $manager;
    private $res;
    private $expo;
    // private $jwtEncoder;
    // private $email;
    // private $user;

    public function __construct(EntityManagerInterface $manager, ReservationRepository $res, ExpositionRepository $expo)
    {
        $this->manager = $manager;
        $this->res = $res;
        $this->expo = $expo;
    }



    /**
     * @Route("/api/reservation", name="api_reservation", methods={"POST"})
     */
    public function reservation(Request $request): Response
    {

        $data = json_decode($request->getContent(), true);

        $nom = $data['nom'] ?? null;
        $prenom = $data['prenom'] ?? null;
        $email = $data['email'] ?? null;
        $telephone = $data['telephone'] ?? null;
        $nombre_billet = $data['nombre_billet'] ?? null;
        $date_reservation = new \DateTimeImmutable($data['date_reservation']);
        $heure_reservation = \DateTimeImmutable::createFromFormat('H', $data['heure_reservation']);
        $id = $data['exposition_id'] ?? null;

        $exposition = $this->expo->find($id);

        if (!$exposition) {
            throw $this->createNotFoundException('L\'exposition correspondant à l\'ID ' . $id . ' n\'a pas été trouvée.');
        }


        // Create a new user object and set its properties
        $reservation = new Reservation();
        $reservation->setNom($nom);
        $reservation->setPrenom($prenom);
        $reservation->setEmail($email);
        $reservation->setTelephone($telephone);
        $reservation->setNombreBillet($nombre_billet);
        $reservation->setDateReservation($date_reservation);
        $reservation->setHeureReservation($heure_reservation);
        $reservation->setExposition($exposition);
        $reservation->setCreatedAt(new \DateTimeImmutable());

        // Persist the reservation object to the database
        $this->manager->persist($reservation);
        $this->manager->flush();

        // Récupérer l'objet de réservation correspondant
        // $reservationId = $reservation->getId();
        // $reservation = $this->res->find($reservationId);

        return $this->json($reservation);
    }


    // public function __construct(EntityManagerInterface $manager, UsersRepository $email, JWTEncoderInterface  $jwtEncoder)
    // {
    //     $this->manager = $manager;
    //     $this->jwtEncoder = $jwtEncoder;
    //     $this->email = $email;
    // }

    // /**
    //  * @Route("/api/login", name="api_login", methods={"POST"})
    //  */
    // public function login(Request $request): Response
    // {
    //     $data = json_decode($request->getContent(), true);

    //     $email = $data['email'] ?? null;
    //     $password = $data['password'] ?? null;

    //     if (!$email || !$password) {
    //         return new Response('Email and password are required', Response::HTTP_BAD_REQUEST);
    //     }

    //     // Chargement de l'utilisateur avec son email depuis la base de donnée
    //     $email = $this->email->findOneBy(['email' => $email]);

    //     if (!$email || !password_verify($data['password'], $email->getPassword())) {
    //         return new JsonResponse(['message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
    //     }

    //     // Génerer un JWT token
    //     $token = $this->jwtEncoder->encode([
    //         'email' => $email->getEmail(),
    //         'prenom' => $email->getPrenom(),
    //         'nom' => $email->getNom(),
    //         'roles' => $email->getRoles(),
    //         'exp' => time() + 3600 // Expires in 1 hour.
    //     ]);

    //     // Return the JWT token.
    //     return new JsonResponse(['token' => $token]);
    // }

    // /**
    //  * @Route("/api/register", name="api_register", methods={"POST"})
    //  */
    // public function register(Request $request): Response
    // {
    //     $data = json_decode($request->getContent(), true);

    //     $email = $data['email'] ?? null;
    //     $password = $data['password'] ?? null;
    //     $nom = $data['nom'] ?? null;
    //     $prenom = $data['prenom'] ?? null;
    //     $telephone = $data['telephone'] ?? null;


    //     if (!$email || !$password) {
    //         return new Response('Email and password are required', Response::HTTP_BAD_REQUEST);
    //     }

    //     // Check if the email is already registered
    //     $existingUser = $this->email->findOneBy(['email' => $email]);
    //     if ($existingUser) {
    //         return new JsonResponse(['message' => 'Email already registered'], Response::HTTP_CONFLICT);
    //     }

    //     // Hash the password
    //     $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    //     // Create a new user object and set its properties
    //     $user = new Users();
    //     $user->setEmail($email);
    //     $user->setPassword($hashedPassword);
    //     $user->setPrenom($prenom);
    //     $user->setNom($nom);
    //     $user->setTelephone($telephone);
    //     $user->setCreatedAt(new \DateTimeImmutable());
    //     $user->setRoles(["ROLE_USER"]);

    //     // Persist the user object to the database
    //     $this->manager->persist($user);
    //     $this->manager->flush();

    //     // Generate JWT token
    //     $token = $this->jwtEncoder->encode([
    //         'email' => $user->getEmail(),
    //         'prenom' => $user->getPrenom(),
    //         'nom' => $user->getNom(),
    //         'roles' => $user->getRoles(),
    //         'exp' => time() + 3600 // Expires in 1 hour.
    //     ]);

    //     // Return the JWT token
    //     return new JsonResponse(['token' => $token]);
    // }


    // #[Route('/api/getAllUsers', name: 'get_allusers', methods: 'GET')]
    // public function getAllUsers(): Response
    // {
    //     $email = $this->email->findAll();

    //     return $this->json($email, 200);
    // }

    // #[Route('/api/getprenom', name: 'get_prenom', methods: 'GET')]
    // public function getPrenom(): Response
    // {
    //     $email = $this->getUser();
    //     $prenom = $email->getPrenom();

    //     return $this->json($prenom);
    // }

    // /**
    //  * @Route("/api/logout", name="api_logout")
    //  */
    // public function logout(TokenStorageInterface $tokenStorage): JsonResponse
    // {
    //     // Récupération du token de l'utilisateur connecté
    //     $token = $tokenStorage->getToken();

    //     // Si l'utilisateur est connecté
    //     if ($token instanceof TokenInterface) {
    //         // Déconnexion de l'utilisateur
    //         $tokenStorage->setToken(null);
    //     }

    //     // Création de la réponse JSON
    //     $response = new JsonResponse([
    //         'message' => 'Déconnexion réussite'
    //     ]);

    //     // Suppression du cookie de session
    //     $response->headers->clearCookie('PHPSESSID');

    //     return $response;
    // }
}
