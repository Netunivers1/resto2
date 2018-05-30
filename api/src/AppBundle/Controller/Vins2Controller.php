<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Vins2;

class Vins2Controller extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/vins")
     */
    public function getVinsAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Vins2')
                ->findAll();

        return $Boisson;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/vins")
     */
    public function postVinsAction(Request $request) {
        $values = $request->request->all();
        foreach ($values as $key => $value) {
            if (!$value)
                return false;
        }
        $data = new Vins2();
        $data->setNom($values['nom']);
        $data->setPm($values['pm']);
        $data->setGm($values['gm']);

        $entity_manager = $this->getDoctrine()->getManager();
        $entity_manager->persist($data);
        $save = $entity_manager->flush();

        return $save ? [$values, gettype($values)]: false;
    }    

     /**
     * @Rest\View()
     * @Rest\Get("/vins/delete/{id}")
     */
    public function removeVinsAction(Request $request, $id) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Vins2 = $em->getRepository('AppBundle:Vins2')
                    ->find($request->get('id'));

        if ($Vins2) {
            $em->remove($Vins2);
            $delete = $em->flush();
            return $delete;
        }
        return false;
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/vins/update/{id}")
     */
    public function updateVinsAction(Request $request) {
        $entity_manager = $this->getDoctrine()->getManager();
        $product = $entity_manager->getRepository(Vins2::class)->find($request->get('id'));

        if (!$product)
            return new JsonResponse(
                ['message' => 'Vins2 non trouvé'], 
                Response::HTTP_NOT_FOUND
            );

        $values = $request->request->all();
        foreach ($values as $key => $value) {
            if (!$value)
                return false;
        }
        $product->setNom($values['nom']);
        $product->setPm($values['pm']);
        $product->setGm($values['gm']);

        $update = $entity_manager->flush();

        return ($update) ? $values : false;
    }
}