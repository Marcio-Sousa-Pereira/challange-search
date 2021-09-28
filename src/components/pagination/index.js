import React, { useState } from "react";

import { Pagination, Stack } from "@material-ui/core";

export const PaginationComponent = ({ usersPerPage, totalUsers, paginate }) => {
  
  const pages = Math.round(totalUsers / usersPerPage);

  return (
    // onClick={() => paginationList()}
    <Stack spacing={2}>
      <Pagination
      style={{ width: '100%' }}
        onChange={(e, page) => paginate(page)}
        count={pages}
        color="primary"
      />
    </Stack>
  );
};
