package com.example.bggbackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bggbackend.Repositories.GamesRepository;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;


@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping(path="/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class GameController {

	@Autowired
	private GamesRepository gamesRepo;

	// GET /api/game/search?name=abc
	@GetMapping(path="/games/search")
	public ResponseEntity<String> getGameSearch(@RequestParam String name) {
		JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
		gamesRepo.findGameByName(name).stream()
			.map(g -> g.toJson())
			.forEach(arrBuilder::add);

		return ResponseEntity.ok(arrBuilder.build().toString());
	}

    // GET /api/game/:gid/comments
	@GetMapping(path="/game/{gameId}/comments")
	public ResponseEntity<String> getCommentsByGameId(@PathVariable int gameId) {
		JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
		gamesRepo.findCommentsByGameId(gameId).stream()
			.map(c -> c.toJson())
			.forEach(arrBuilder::add);

		return ResponseEntity.ok(arrBuilder.build().toString());
	}

}