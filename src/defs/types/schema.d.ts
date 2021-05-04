declare namespace SCHEMA {
  interface Question {
    _id: !string;
    title?: string;
    description?: string;
    section?: string;
    isPublic?: boolean;
    subcats?: Category;
    createdBy?: User;
    publishedAt?: string;
  }

  interface Section {
    _id: !string;
    name?: !string;
    urlToImage?: string;
    description?: string;
    isActive?: !boolean;
    totalQuestions?: !Int;
    lastQuestionAt?: string;
  }

  interface Category {
    _id?: string;
    _englishName?: string;
    _dutchName?: string;
  }

  interface CategoryInputs {
    _englishName?: string;
    _dutchName?: string;
  }

  interface User {
    _id: !string;
    username?: string;
    email?: string;
    token?: string;
    createdAt?: string;
  }

  interface Profile {
    _id: !string;
    user: !string;
    avatar: Image;
    createdAt: !string;
  }

  interface Image {
    path: string;
    filename: string;
    mimetype: string;
  }

  type UserProfile = User & Profile;

  interface TVariables {
    start: number;
    limit: number;
  }

  interface ReactiveAction {
    _id?: string;
    type?: 'delete' | 'update' | string;
  }
}
