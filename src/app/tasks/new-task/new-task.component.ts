import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
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
