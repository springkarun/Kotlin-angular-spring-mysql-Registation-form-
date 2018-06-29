package com.examples.angularspringmysql.repo

import com.examples.angularspringmysql.model.StudentModel
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface StudentRepository : JpaRepository<StudentModel, Long> {

    @Query(value = "SELECT * FROM students WHERE roll_No = ?1", nativeQuery = true)
    fun findByName(rollNo: String): List<StudentModel>
}