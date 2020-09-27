import { Component, OnInit } from "@angular/core";
import { NgttTournament } from "../../projects/ng-tournament-tree/src/lib/declarations/interfaces";

@Component({
  selector: "tt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public TreeTournament: NgttTournament;

  public renderedTree: "se" | "de" = "de";

  constructor() {}

  ngOnInit() {
    this.TreeTournament = {
      rounds: [
        {
          type: "Winnerbracket",
          matches: [
            {
              teams: [
                { name: "The Idolmaster", score: 3 },
                { name: "BanG Dream!", score: 2 },
              ],
            },
            {
              teams: [
                { name: "The Idolmaster CG", score: 1 },
                { name: "Revue Starlight", score: 0 },
              ],
            },
            {
              teams: [
                { name: "LoveLive!", score: 4 },
                { name: "K-ON!", score: 2 },
              ],
            },
            {
              teams: [
                { name: "Wake Up Girls !", score: 3 },
                { name: "Kilari", score: 0 },
              ],
            },
          ],
        },
        {
          type: "Winnerbracket",
          matches: [
            {
              teams: [
                { name: "The Idolmaster", score: 1 },
                { name: "The Idolmaster CG", score: 0 },
              ],
            },
            {
              teams: [
                { name: "LoveLive!", score: 2 },
                { name: "Wake Up Girls !", score: 1 },
              ],
            },
          ],
        },
        {
          type: "Final",
          matches: [
            {
              teams: [
                {
                  name: "The Idolmaster",
                  score: 4,
                },
                {
                  name: "LoveLive!",
                  score: 3,
                },
              ],
            },
            {
              teams: [
                {
                  name: "The Idolmaster CG",
                  score: 1,
                },
                {
                  name: "Wake Up Girls !",
                  score: 2,
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
