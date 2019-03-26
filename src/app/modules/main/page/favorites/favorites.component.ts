import { Component, OnInit } from '@angular/core';
import { MainModuleService } from '../../services/main-module.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public favorites: any[] = [];
  public favoritesCopy: any[] = [];

  constructor(private mainModuleService: MainModuleService) { }

  ngOnInit() {
    this.mainModuleService.getAllFavorites()
    .subscribe(data => {
      this.favorites.push(data);
      this.favoritesCopy.push(data);
    });
  }

  setFavorite(data: any): void {
    if (data.favorite === true) {
      data.favorite = false;
      this.mainModuleService.searchDeleteFavorite(data.videoId);
    } else {
      data.favorite = true;
      this.mainModuleService.addFavorite(data);
    }
  }

  onFilter(filter: string): void {
    this.favoritesCopy = this.favorites.filter((item) => {
      const { title } = item.data.snippet;
      return (title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    });
  }

}
