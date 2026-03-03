import { Student } from "./models/student.model";

export class StudentFactory {
  private static currentId = 1;

  static createStudent(data: Omit<Student, "id">): Student {
    return {
      id: this.currentId++,
      ...data,
      registrationDate: data.registrationDate ?? new Date()
    };
  }
}