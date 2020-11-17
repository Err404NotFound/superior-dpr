package edu.csupomona.cs4800.controller;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import java.util.Random;

import com.google.common.math.IntMath;
@CrossOrigin
@RestController
public class WebController {

	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String angular() {
		return "index";
	}
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String endpoints() {
		return String.format("There are other pages at: /hello and /serena and /world and /guava and /jsoup");
	}

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

	@RequestMapping(value = "/world", method = RequestMethod.GET)
	public String world() {
		return String.format("Matthew Graca wuz here x2");
	}

	@RequestMapping(value = "/guava", method = RequestMethod.GET)
	public String guavaTest(){
		// store 10 random ints into an array
		int[] n = new int[10];
		Random rng = new Random();
		String msg = "integers in the array: ";
		for (int i = 0; i < n.length; i++)
		{
			n[i] = rng.nextInt(10000);
			msg = msg + " " + n[i];
		}

		// find a prime number in that array
		int i = 0;
		boolean primeNotFound = true;
		int firstPrime = 0;
		while(i < n.length && primeNotFound)
		{
			if (IntMath.isPrime(n[i]))
			{
				firstPrime = n[i];
				primeNotFound = false;
			}
			i++;
		}

		// create message for if a prime number was found
		if (primeNotFound)
		{
			msg = msg + ": A prime number was not found :(";
		}
		else
		{
			msg = msg + String.format(": Prime number found! The first prime number is " + firstPrime);
		}

		return msg + ". Refresh for a new set of values!";
	}

	@RequestMapping(value = "/jsoup", method = RequestMethod.GET)
	public String jsoup() throws IOException {
		String format = "<h1>Headings for CS Internships<br></h1>";
		Document internship = Jsoup.connect("https://www.cpp.edu/sci/computer-science/undergraduate-program/internship.shtml").get();
		Elements headings = internship.select("h3");
		for (Element h : headings) {
			format += String.format("%s<br>", h.text());
		}
		return format;
	}
}
