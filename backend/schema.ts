import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import type { Lists } from ".keystone/types";

export const lists: Lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      password: password({ validation: { isRequired: true } }),
      posts: relationship({ ref: "Post.author", many: true }),
      createdAt: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
  }),

  Post: list({
    access: allowAll,
    fields: {
      content: text({ validation: { isRequired: true } }),
      author: relationship({
        ref: "User.posts",
        many: false,
      }),
    },
  }),
};
