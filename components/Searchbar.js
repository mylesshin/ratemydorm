import React from "react";
import { Input, InputGroup, Flex, Center, Select, Button } from "@chakra-ui/react";

function SearchBar({
  onSearch,
  onTagChange,
  searchQuery,
  selectedTag,
}) {
  return (
    <Flex justifyContent="center" mt={2}>
      <Center>
        <InputGroup>
          <Input
            type="text"
            placeholder="Search for dorms"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            w="600px"
            data-testid="search-input"
          />
        </InputGroup>

        <Select
          ml={2}
          onChange={(e) => onTagChange(e.target.value)}
          data-testid="Location"
          value={selectedTag}
        >
          <option value="">Location</option>
          <option value="Commons">Commons</option>
          <option value="main">Main</option>
          <option value="highland">Highland Quad</option>
        </Select>
      </Center>
    </Flex>
  );
}

export default SearchBar;
