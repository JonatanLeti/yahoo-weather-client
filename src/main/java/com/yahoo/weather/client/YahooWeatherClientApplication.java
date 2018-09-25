package com.yahoo.weather.client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.annotation.PostConstruct;
import java.time.ZoneOffset;
import java.util.TimeZone;


@SpringBootApplication
@EntityScan(basePackageClasses = {
		YahooWeatherClientApplication.class,
		Jsr310JpaConverters.class
},
basePackages = {"com.yahoo.weather.client.model"}
)
public class YahooWeatherClientApplication {

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone(ZoneOffset.UTC));
	}

	public static void main(String[] args) {
		SpringApplication.run(YahooWeatherClientApplication.class, args);
	}
}
