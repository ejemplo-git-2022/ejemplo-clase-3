package edu.curso.java.spring;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("nuevoNombreComponente3")
@Scope("prototype")
public class Componente3Impl implements Componente3 {

	public Componente3Impl() {
		System.out.println("Creando un nuevo Componente3Impl");
	}
	
	@Override
	public void hacerAlgoEnComponente3() {
		System.out.println("Ejecutando hacerAlgoEnComponente1 en Componente1Impl");
	}
}
