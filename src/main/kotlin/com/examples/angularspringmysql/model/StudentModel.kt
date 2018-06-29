package com.examples.angularspringmysql.model

import java.io.Serializable
import javax.persistence.*


@Entity
@Table(name = "students")
data class StudentModel(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id:Long=0,

        @Column(name = "rollNo")
        val rollNo:String="",

        @Column(name = "name")
        val name:String="",

        @Column(name = "email")
        val email:String="",

        @Column(name = "mobile")
        val mobile:String="",

        @Column(name = "addess")
        val addess:String=""

):Serializable
