import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../../models/weather-response.model';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  repos: GithubRepo[] = [];
  isLoading = false;
  error: string | null = null;

  public readonly githubUsername = 'sarccasm';

  // 👇 мок-дані погоди
  weather: WeatherResponse = {
    coord: { lon: 30.52, lat: 50.45 },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 293.15,
      feels_like: 293.15,
      temp_min: 293.15,
      temp_max: 293.15,
      pressure: 1012,
      humidity: 50,
    },
    visibility: 10000,
    wind: { speed: 3.6, deg: 180 },
    clouds: { all: 0 },
    dt: 1600000000,
    sys: {
      type: 1,
      id: 1234,
      country: 'UA',
      sunrise: 1600000000,
      sunset: 1600040000,
    },
    timezone: 7200,
    id: 703448,
    name: 'Kyiv',
    cod: 200,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos(): void {
    this.isLoading = true;
    this.error = null;

    this.http.get<GithubRepo[]>(`https://api.github.com/users/${this.githubUsername}/repos`).subscribe({
      next: (repos) => {
        this.repos = repos;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load repositories';
        this.isLoading = false;
      },
    });
  }
}
