import React from "react";

import { Pagination, Stack } from "@material-ui/core";

export const PaginationComponent = ({ usersPerPage, totalUsers, paginate }) => {
  return (
    // onClick={() => paginationList()}
    <Stack spacing={2}>
      <Pagination
        onClick={(e) => paginate(e.target.ariaLabel[11])}
        count={totalUsers / usersPerPage}
        color="primary"
      />
    </Stack>
  );
};
