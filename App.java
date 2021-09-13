package com.demo.DemoExample;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
//        Car car = new Toyota();
//        car.start();
    	ApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
    	Car car = (Car) context.getBean(Maruti.class);
    	car.start();
    }
}
