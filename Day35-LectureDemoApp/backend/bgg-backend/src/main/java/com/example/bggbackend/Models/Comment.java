package com.example.bggbackend.Models;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public record Comment(String user, String text, int rating, int gameId) {
	public JsonObject toJson() {
		return Json.createObjectBuilder()
			.add("user", user)
			.add("gameId", gameId)
			.add("text", text)
			.add("rating", rating)
			.build();
	}
}