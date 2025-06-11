import React from "react";
import Link from "next/link";

const UsersPage = () => {
  return (
    <>
      <div>UsersPage</div>
      <Link href="/users/new">➡️ new</Link>
    </>
  );
};

export default UsersPage;
