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
     * @Rest\Get("/vins/{paginate}/{page}/{limit}")
     */
    public function getMenuAction(Request $request, $paginate = 1, $page = 1, $limit = 5) {
        $Menu = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Vins2')
                ->createQueryBuilder('v');

        if ($paginate) {
            $Menu_clone = clone($Menu);
            $lists['count'] = (int) $Menu->select('COUNT(v) as list')->getQuery()->getResult()[0]['list'];

            // Check offset to be valid
            $limit = (int) $limit;
            $page = (int) $page;
            $page = ($page > 0 && $page <= ceil($lists['count'] / $limit)) ? $page : 1;
            $offset = ($page * $limit) - $limit;

            $lists['contain'] = $Menu_clone->setFirstResult($offset)->setMaxResults($limit)->getQuery()->getResult();

            $lists['p_current'] = $page;
            $lists['p_prev'] = $page - 1 < 0 ? $page : $page - 1;
            $lists['p_next'] = $page + 1 > $lists['contain'] ? $page : $page + 1;
        } else {
            $lists['contain'] = $Menu->getQuery()->getResult();
        }

        return $lists;
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