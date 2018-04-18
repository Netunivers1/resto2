<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use AppBundle\Entity\Dessert;
use AppBundle\Form\DessertType;


class DessertController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/dessert")
     */
    public function getDessertsAction(Request $request) {
        $Dessert = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Dessert')
                ->findAll();

        return $Dessert;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/dessert")
     */
    public function postDessertAction(Request $request) {
        $Dessert = new Dessert();
        $form = $this->createForm(DessertType::class, $Dessert);

        $form->submit($request->request->all());

        if ($form->isValid()) {      	
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Dessert);
            $em->flush();
            return $Dessert;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/dessert/{id}")
     */
    public function removeDessertAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Dessert = $em->getRepository('AppBundle:Dessert')
                    ->find($request->get('id'));

        if ($Dessert) {
            $em->remove($Dessert);
            $em->flush();
        }
    }    

}