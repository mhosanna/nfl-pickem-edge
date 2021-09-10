// from https://gist.github.com/DiesIrae/67182f7c6547500a99e5982b1b3c4eba
import { ListHooks } from "@keystone-next/types"
import { BaseGeneratedListTypes } from "@keystone-next/types/src/utils"

type BeforeDeleteType = Exclude<
  ListHooks<BaseGeneratedListTypes>["beforeDelete"],
  undefined
>
type BeforeDeleteParameter = Parameters<BeforeDeleteType>[0] & {
  fieldKey: string
}

type HookConfig = {
  ref: string
}

type Id = NonNullable<any>
type IdObject = { id: Id }


export const deleteOneBeforeDeleteHook =
  ({ ref }: HookConfig) =>
  async ({ existingItem, context, fieldKey }: BeforeDeleteParameter) => {
    const idPath = fieldKey + "Id"
    const id = (existingItem as { [idPath: string]: Id })[idPath]
    if (id) await context.lists[ref].deleteOne({ where: {id}})
  }

export const deleteManyBeforeDeleteHook =
  ({ ref }: HookConfig) =>
  async ({
    existingItem,
    context,
    fieldKey,
    listKey,
  }: BeforeDeleteParameter) => {
    const { id } = existingItem as IdObject
    const parentWithChildren = await context.lists[listKey].findOne({
      where: { id },
      query: `${fieldKey} { id }`,
    })

    const children = parentWithChildren[fieldKey] as [IdObject] | undefined
    const ids = (children || []).map(({ id }) => { return {id} })

    await context.db.lists[ref].deleteMany({where: ids })
  }