package com.examples.angularspringmysql.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.servlet.ModelAndView

@Controller
class WebController {

    @RequestMapping("/")
    internal fun home(modelAndView: ModelAndView): ModelAndView {
        modelAndView.viewName = "home"
        return modelAndView
    }
}