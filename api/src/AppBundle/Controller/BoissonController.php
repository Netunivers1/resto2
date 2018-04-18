<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Boissonr2;
use AppBundle\Form\Boissonr2Type;

class BoissonController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/boisson")
     */
    public function getBoissonAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Boissonr2')
                ->findAll();

        return $Boisson;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/boisson")
     */
    public function postBoissonAction(Request $request) {
        $boissonr2 = new boissonr2();
        $form = $this->createForm(boissonr2Type::class, $boissonr2);

        $form->submit($request->request->all());

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($boissonr2);
            $em->flush();
            return $boissonr2;
        } else {
            return $form;
        }
    }    

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/boisson/{id}")
     */
    public function removeBoissontAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $boissonr2 = $em->getRepository('AppBundle:Boissonr2')
                    ->find($request->get('id'));

        if ($boissonr2) {
            $em->remove($boissonr2);
            $em->flush();
        }
    }

}