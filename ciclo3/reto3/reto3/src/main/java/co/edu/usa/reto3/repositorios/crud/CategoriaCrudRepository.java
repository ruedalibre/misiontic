/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.reto3.repositorios.crud;

import co.edu.usa.reto3.modelo.Categoria;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author andresruedalibre
 */
public interface CategoriaCrudRepository extends CrudRepository<Categoria, Integer> {
    
}
