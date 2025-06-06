import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent {
  
constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  
  logout() {
    
  const modalEl = document.getElementById('logoutModal');
  if (modalEl) {
    const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modalInstance.hide();
  }

  // Remove modal backdrop
  const backdrops = document.getElementsByClassName('modal-backdrop');
  while (backdrops.length > 0) {
    backdrops[0].parentNode?.removeChild(backdrops[0]);
  }

  // Clear session/local storage if needed
  sessionStorage.clear();
  localStorage.clear();

  // Navigate to login

  this.router.navigate(['/login']);
  }
  goToStudent(){
    const modalEl = document.getElementById('studentModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();
  }

  this.router.navigate(['/main/student']);
  }
}
