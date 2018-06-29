package com.examples.angularspringmysql.controller

import com.examples.angularspringmysql.model.Response
import com.examples.angularspringmysql.model.StudentModel
import com.examples.angularspringmysql.repo.StudentRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api")

class CustomerController {



    @Autowired
    internal var repository: StudentRepository? = null



    @PostMapping("/student")
    fun postCustomer(@RequestBody model: StudentModel) {
        repository!!.save(model)
    }

    @GetMapping("/findall")
    fun findAll(): Response {
        val model = repository!!.findAll()
        return Response("Done", model)
    }

    @GetMapping("/student/{id}")
    fun findCustomerById(@PathVariable("id") rollNo: Int): Response {
        val customer = repository!!.findById(rollNo.toLong())
        return Response("Done", customer)
    }


    @GetMapping("/findByrRollNo")
    fun findByLastName(@RequestParam("rollNo") rollNo: String): Response {
        val customers = repository!!.findByName(rollNo)
        return Response("Done", customers)
    }
}
