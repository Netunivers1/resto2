<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Menu;
use AppBundle\Form\MenuType;
use AppBundle\Entity\Plat;
use AppBundle\Form\PlatType;

class MenuController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/menu")
     */
    public function getMenuAction(Request $request) {
        $Menus = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Menu')
                ->findAll();

        return $Menus;
    }

     /**
     * @Rest\View()
     * @Rest\Post("/menu")
     */
    public function postMenuAction(Request $request) {
        $Menu = new Menu();
        $form = $this->createForm(MenuType::class, $Menu);

        $form->submit($request->request->all()); // Validation des données

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Menu);
            $em->flush();
            return $Menu;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/menu/{id}")
     */
    public function removeMenuAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Menu = $em->getRepository('AppBundle:Menu')
                    ->find($request->get('id'));

        if ($Menu) {
            $em->remove($Menu);
            $em->flush();
        }
    }

    /**
     * @Rest\View()
     * @Rest\Put("/menu/{id}")
     */
    public function updateMenuAction(Request $request) {
        $Menu = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Menu')
                ->find($request->get('id')); // L'identifiant en tant que paramètre n'est plus nécessaire

        if (empty($Menu)) {
            return new JsonResponse(
                ['message' => 'Menu non trouvé'], 
                Response::HTTP_NOT_FOUND
            );
        }

        $form = $this->createForm(MenuType::class, $Menu);

         // Le paramètre false dit à Symfony de garder les valeurs dans notre 
         // entité si l'utilisateur n'en fournit pas une dans sa requête
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            // l'entité vient de la base, donc le merge n'est pas nécessaire.
            // il est utilisé juste par soucis de clarté
            $em->merge($Menu);
            $em->flush();
            return $Menu;
        } else {
            return $form;
        }
    }

    /**
     * @Rest\View()
     * @Rest\Get("/plat")
     */
    public function getPlatAction(Request $request) {
        $Plat = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Plat')
                ->findAll();

        return $Plat;
    }

     /**
     * @Rest\View()
     * @Rest\Post("/plat")
     */
    public function postPlatAction(Request $request) {
        $Plat = new Plat();
        $form = $this->createForm(PlatType::class, $Plat);

        $form->submit($request->request->all()); // Validation des données

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Plat);
            $em->flush();
            return $Plat;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/plat/{id}")
     */
    public function removePlatAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Plat = $em->getRepository('AppBundle:Plat')
                    ->find($request->get('id'));

        if ($Plat) {
            $em->remove($Plat);
            $em->flush();
        }
    }

    /**
     * @Rest\View()
     * @Rest\Put("/plat/{id}")
     */
    public function updatePlatAction(Request $request) {
        $Plat = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Plat')
                ->find($request->get('id')); // L'identifiant en tant que paramètre n'est plus nécessaire

        if (empty($Plat)) {
            return new JsonResponse(
                ['message' => 'Plat non trouvé'], 
                Response::HTTP_NOT_FOUND
            );
        }

        $form = $this->createForm(PlatType::class, $Plat);

         // Le paramètre false dit à Symfony de garder les valeurs dans notre 
         // entité si l'utilisateur n'en fournit pas une dans sa requête
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            // l'entité vient de la base, donc le merge n'est pas nécessaire.
            // il est utilisé juste par soucis de clarté
            $em->merge($Plat);
            $em->flush();
            return $Plat;
        } else {
            return $form;
        }
    }    

}