package com.demo.DemoExample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component(value="getMaruti")
public class Maruti implements Car {
	
	@Autowired
	@Qualifier("mrfTyres")
	Tyre tyre;
	
	@Autowired
	@Qualifier("bridgestone")
	Tyre tyre2;
	
	public void start() {
		// TODO Auto-generated method stub
		System.out.println("Maruti Here!");
		tyre.run();
		tyre2.run();
	}

}
