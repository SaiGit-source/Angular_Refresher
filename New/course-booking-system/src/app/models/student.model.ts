export interface Student {
    id: number;
    name: string;
    email: string;
    enrolledCourseIds: number[]; // Array of course IDs the student is enrolled in
    phoneNumber?: string; // Optional phone number
    registrationDate?: Date; // Date when the student registered
}
