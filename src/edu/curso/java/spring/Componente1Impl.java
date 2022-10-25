package edu.curso.java.spring;

public class Componente1Impl implements Componente1 {
	
	public Componente1Impl() {
		System.out.println("Creando un nuevo Componente1Impl");
	}
	
	@Override
	public void hacerAlgoEnComponente1() {
		System.out.println("Ejecutando hacerAlgoEnComponente1 en Componente1Impl");
	}

}
