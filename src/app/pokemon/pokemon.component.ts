import { Component, OnInit } from "@angular/core";
import { PokemonService } from "./pokemon.service";

@Component({
    selector: "ns-items",
    templateUrl: "./pokemon.component.html"
})
export class PokemonComponent implements OnInit {
    pokemons;

    constructor(private itemService: PokemonService) { }

    ngOnInit(): void {
        this.pokemons.getPokemons().subscribe((response) => {
            this.pokemons = response.results;
            console.log(this.pokemons);
        }
        );
    }
}
