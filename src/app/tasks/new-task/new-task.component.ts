import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeDialogBox = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  enteredTtitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.closeDialogBox.emit();
  }

  onAddTask() {
    this.tasksService.addUserTask(
      {
        title: this.enteredTtitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.closeDialogBox.emit();
  }
}
