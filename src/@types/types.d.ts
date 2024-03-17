type Developer = {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
};

type Developers = Developer[];

type DevelopersResponse = {
  count: number;
  total_pages: number;
  total_users: number;
  users: Developers;
};

type Position = {
  id: number;
  name: string;
};

type Positions = Position[];

type NewDeveloper = {
  name: string;
  email: string;
  phone: string;
  photo: file;
  position_id: number;
};
