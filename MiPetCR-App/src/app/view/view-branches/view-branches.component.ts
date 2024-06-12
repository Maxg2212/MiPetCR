import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewBranchesService } from 'src/app/controller/Client/viewBranches/view-branches.service';
import { BranchI } from 'src/app/model/Client/branch-model';



@Component({
  selector: 'app-view-branches',
  templateUrl: './view-branches.component.html',
  styleUrl: './view-branches.component.css'
})
export class ViewBranchesComponent implements OnInit{

  branchList: BranchI[] = [];
  branch: BranchI | undefined;

  constructor(private router: Router, 
    private api: ViewBranchesService) {}

    ngOnInit(): void {
      this.updateBranches();
    }

    updateBranches(): void {
      this.api.getAllBranches().subscribe((data) => {
        console.log(data);
        this.branchList = data.result;
      });
    }



}
