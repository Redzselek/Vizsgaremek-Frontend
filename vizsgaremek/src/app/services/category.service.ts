import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Category ID to name mapping
  private categoryMapping: { [key: string]: string } = {
    '1': 'Action',
    '2': 'Animation',
    '3': 'Bollywood',
    '4': 'Crime',
    '5': 'Family',
    '6': 'Cyberpunk',
    '7': 'Dystopian',
    '8': 'Documentary',
    '9': 'Drama',
    '10': 'Biography',
    '11': 'Experimental',
    '12': 'Fantasy',
    '13': 'Adult',
    '14': 'Film-Noir',
    '15': 'Gastronomy',
    '16': 'Gangster',
    '17': 'Kids',
    '18': 'War',
    '19': 'Horror',
    '20': 'Adventure',
    '21': 'Disaster',
    '22': 'Spy',
    '23': 'Ghost',
    '24': 'Mystery',
    '25': 'Personal Life',
    '26': 'Thriller',
    '27': 'Musical',
    '28': 'Neo-Noir',
    '29': 'Occult',
    '30': 'Political',
    '31': 'Post-Apocalyptic',
    '32': 'Psychological',
    '33': 'Road Movie',
    '34': 'Romantic',
    '35': 'Sci-Fantasy',
    '36': 'Sci-Fi',
    '37': 'Satire',
    '38': 'Superhero',
    '39': 'Steampunk',
    '40': 'Sports',
    '41': 'Dance',
    '42': 'Social',
    '43': 'Suspense',
    '44': 'Historical',
    '45': 'Survival',
    '46': 'Comedy',
    '47': 'Western',
    '48': 'Music',
    '49': 'Genre Parody'
  };

  // List of all available categories
  getAllCategories(): string[] {
    return Object.values(this.categoryMapping);
  }

  // Convert category ID to name
  getCategoryNameFromId(id: string): string {
    return this.categoryMapping[id] || id; // Return the ID itself if no mapping found
  }

  // Convert a list of category IDs to names
  getCategoryNamesFromIds(categoryIds: string[]): string[] {
    if (!categoryIds || !Array.isArray(categoryIds)) {
      return [];
    }
    return categoryIds.map(id => this.getCategoryNameFromId(id));
  }

  // Parse category string (handles JSON arrays, comma-separated lists, etc.)
  parseCategoryString(categoriesString: string): string[] {
    if (!categoriesString || categoriesString.trim() === '') {
      return [];
    }

    try {
      let parsedCategories: any[] = [];
      
      if (categoriesString.startsWith('[') && categoriesString.endsWith(']')) {
        // It's a JSON array
        parsedCategories = JSON.parse(categoriesString);
      } else {
        // It might be a comma-separated list
        parsedCategories = categoriesString.split(',').map(item => item.trim());
      }
      
      if (Array.isArray(parsedCategories) && parsedCategories.length > 0) {
        // Convert IDs to category names
        return parsedCategories.map(catId => this.getCategoryNameFromId(catId.toString()));
      }
      
      return [];
    } catch (e) {
      console.error('Error parsing categories:', e);
      // If parsing fails, try to use it as a single category
      if (categoriesString && typeof categoriesString === 'string' && categoriesString.trim() !== '') {
        const categoryName = this.getCategoryNameFromId(categoriesString);
        return [categoryName];
      }
      return [];
    }
  }
}
