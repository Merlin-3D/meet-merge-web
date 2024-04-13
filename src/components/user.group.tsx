interface UserGroupInterface {
  users: string[];
}

export default function UserGroup({ users }: UserGroupInterface) {
  return (
    <div className="flex mr-2">
      {users.map((item) => {
        return (
          <img
            key={item}
            className="border-2 border-primary-white rounded-full h-10 w-10 -mr-4"
            src={item}
            alt=""
          />
        );
      })}

      <span className="flex items-center justify-center bg-primary-blue-accent text-sm text-primary-blue font-medium border-2 border-primary-white rounded-full h-10 w-10">
        +9
      </span>
    </div>
  );
}
