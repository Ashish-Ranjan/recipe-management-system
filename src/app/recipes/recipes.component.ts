import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeSevice: RecipeService,
    private authService: AuthService
  ) {
    this.recipeSevice.getRecipesFromDB();
  }

  ngOnInit() {
  }

  createNew() {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['new'], { relativeTo: this.route });
    }
  }

  loadMoreRecipes() {
    this.recipeSevice.getRecipesFromDB();
  }
}
