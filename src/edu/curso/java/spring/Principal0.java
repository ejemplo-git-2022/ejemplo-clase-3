package edu.curso.java.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Principal0 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		AbstractApplicationContext appContext = new ClassPathXmlApplicationContext("applicationContext.xml");
		Componente3 componente3_1 = (Componente3) appContext.getBean("nuevoNombreComponente3");
		componente3_1.hacerAlgoEnComponente3();

		Componente3 componente3_2 = (Componente3) appContext.getBean("nuevoNombreComponente3");
		componente3_2.hacerAlgoEnComponente3();

	}

}
