package com.examples.angularspringmysql

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LaunchApplication

fun main(args: Array<String>) {
    runApplication<LaunchApplication>(*args)
}
