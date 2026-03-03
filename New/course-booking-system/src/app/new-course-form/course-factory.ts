import { Course } from "../models/course.model";

export class CourseFactory {
  private static currentId = 5; // Starting ID for new courses (assuming existing courses have IDs 1-4)

  static createCourse(data: Omit<Course, "id">): Course {
    return {
      id: this.currentId++,
      name: data.name ?? "",
      description: data.description ?? "",
      price: data.price,
      date: data.date ?? new Date(),
      soldOut: data.soldOut ?? false,
      img: data.img,
      onSale: data.onSale ?? false
    };
  }
}