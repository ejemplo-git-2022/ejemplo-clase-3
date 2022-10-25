package edu.curso.java.spring;

public class Componente2Impl implements Componente2 {

	private Componente1 componente1;
	
	@Override
	public void hacerAlgoEnComponente2() {
		System.out.println("Ejecutando hacerAlgoEnComponente2 en Componente2Impl");
		componente1.hacerAlgoEnComponente1();
	}
	
	public Componente1 getComponente1() {
		return componente1;
	}

	public void setComponente1(Componente1 componente1) {
		System.out.println("Ejecutando el setComponente1.....");
		this.componente1 = componente1;
	}

	public Componente2Impl() {
		System.out.println("Creando un nuevo Componente2Impl");
	}
	

}
