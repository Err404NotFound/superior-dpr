package edu.csupomona.cs4800.controller;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;   
import java.io.File;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

@RestController
public class HelloController {

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
	
	@RequestMapping(value = "/serena", method = RequestMethod.GET)
	public String serena(@RequestParam(value = "something", defaultValue = "serena") String name) {
		return String.format("%s is very tired!", name);
	}
	
	@RequestMapping(value = "/pdfbox", method = RequestMethod.GET)

		public String pdfbox(@RequestParam(value = "something", defaultValue = "pdfbox") String name)  throws IOException
	    {
	        //String fileName = "C:\\Users\\singi\\Desktop\\cs4800a3\\ihatemylife\\demo-web-project\\visitor\\src\\main\\java\\edu\\csupomona\\cs356\\sample.pdf"; // provide the path to pdf file
	        String fileName=".\\sample.pdf";
	    	
	    	PDDocument document = null;
	        String text="";
	        try
	        {
	            document = PDDocument.load( new File(fileName));
	            PDFTextStripper stripper = new PDFTextStripper();
	            String pdfText = stripper.getText(document).toString();
	            System.out.println( "Text in the area:" + pdfText);
	            text=pdfText;
	        }
	        finally
	        {
	            if( document != null )
	            {
	                document.close();
	            }
	        }
	        return String.format("Text in the area:%s", text);
	    }

}
