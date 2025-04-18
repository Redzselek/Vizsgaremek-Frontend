import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

interface UploadForm {
  id: number | null;
  title: string;
  description: string;
  category: any;
  type: string;
  season: number | null;
  episode: number | null;
}

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadForm!: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  fileError = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCategories();
  }

  initForm(): void {
    this.uploadForm = this.formBuilder.group<UploadForm>({
      id: null,
      title: '',
      description: '',
      category: [],
      type: '',
      season: null,
      episode: null
    });
    // Listen for changes to the type field to handle conditional validation
    this.uploadForm.get('type')?.valueChanges.subscribe(type => {
      if (type === 'sorozat') {
        this.uploadForm.get('season')?.setValidators([Validators.required]);
        this.uploadForm.get('episode')?.setValidators([Validators.required]);
      } else {
        this.uploadForm.get('season')?.clearValidators();
        this.uploadForm.get('episode')?.clearValidators();
      }
      this.uploadForm.get('season')?.updateValueAndValidity();
      this.uploadForm.get('episode')?.updateValueAndValidity();
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file = input.files[0];

      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        this.fileError = 'Invalid file type. Please upload JPG, JPEG, PNG, or WEBP.';
        this.selectedFile = null;
        this.imagePreview = null;
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        this.fileError = 'File is too large. Maximum size is 5MB.';
        this.selectedFile = null;
        this.imagePreview = null;
        return;
      }

      this.fileError = '';
      this.selectedFile = file;

      // Create image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.uploadForm.invalid || !this.selectedFile) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.uploadForm.controls).forEach(key => {
        this.uploadForm.get(key)?.markAsTouched();
      });

      if (!this.selectedFile) {
        this.fileError = 'Please select an image file.';
      }

      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('id', this.uploadForm.get('id')?.value);
    formData.append('title', this.uploadForm.get('title')?.value);
    formData.append('description', this.uploadForm.get('description')?.value);

    // Használjuk a kategóriák tömböt JSON formátumban
    formData.append('category', this.getCategoriesJson());
    formData.append('type', this.uploadForm.get('type')?.value);

    if (this.uploadForm.get('type')?.value === 'series') {
      formData.append('season', this.uploadForm.get('season')?.value);
      formData.append('episode', this.uploadForm.get('episode')?.value);
    } else {
      formData.append('season', "1");
      formData.append('episode', "0");
    }

    formData.append('file', this.selectedFile!);

    // Get auth token from localStorage
    const token = localStorage.getItem('auth_token');

    // Set up headers with authentication
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // });

    // Send the request to the backend
    this.http.post('https://egyedirobi.moriczcloud.hu/vizsga-api/upload-show', formData)
      .subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          this.successMessage = 'Show uploaded successfully! Status: 200 OK';
          this.uploadForm.reset();
          this.selectedFile = null;
          this.imagePreview = null;
          this.categories = [];

          setTimeout(() => {
            this.router.navigate(['/movies-series']);
          }, 2000);
        },
        error: (error) => {
          this.isSubmitting = false;

          if (error.status === 422) {
            // Validation errors
            if (error.error && error.error.errors) {
              const errorMessages = Object.values(error.error.errors).flat();
              this.errorMessage = errorMessages.join(', ');
            } else {
              this.errorMessage = 'Validation failed. Please check your input.';
            }
          } else if (error.status === 401) {
            this.errorMessage = 'You must be logged in to upload shows.';

            // Redirect to login page after a short delay
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000);
          } else {
            this.errorMessage = 'An error occurred while uploading. Please try again.';
          }
        }
      });
  }

  predefinedCategories: any[] = [];
  categories: any[] = [];
  selectedCategory = '';
  availableCategories: any[] = [];
  categoriesJson: string = '';
  categoriesForm: string = '';

  getCategories() {
    this.http.get('https://egyedirobi.moriczcloud.hu/vizsga-api/get-categories').subscribe({
      next: (response: any) => {
        this.predefinedCategories = response;
        this.updateAvailableCategories();
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  getCategoryNames(categoryIds: number[]): string[] {
    if (!categoryIds) {
      return [];
    }
    console.log(categoryIds.map(id => this.predefinedCategories.find(cat => cat.id === id)?.category));

    return categoryIds.map(id => this.predefinedCategories.find(cat => cat.id === id)?.category);
  }

  updateAvailableCategories(): void {
    this.availableCategories = this.predefinedCategories.filter(
      category => !this.categories.includes(category)
    );
  }

  addSelectedCategory(): void {
    if (this.selectedCategory && !this.categories.find(category => category.id === this.selectedCategory) && this.categories.length < 5) {
      const categoryName = this.getCategoryNames([parseInt(this.selectedCategory)])[0];
      this.categories.push({ id: this.selectedCategory, category: categoryName });
      this.selectedCategory = '';
      this.updateAvailableCategories();
    }
  }

  removeCategory(index: number): void {
    this.categories.splice(index, 1);
    this.updateAvailableCategories();
  }

  getCategoriesJson(): string {
    this.categoriesJson = '[';
    for (let i = 0; i < this.categories.length; i++) {
      if (i > 0) {
        this.categoriesJson += ',';
      }
      this.categoriesJson += this.categories[i].id;
    }
    this.categoriesJson += ']';
    return this.categoriesJson;
  }
}
