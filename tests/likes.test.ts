import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { Like } from "../generated/schema"
import { Like as LikeEvent } from "../generated/Likes/Likes"
import { handleLike } from "../src/likes"
import { createLikeEvent } from "./likes-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let fullTableNameHash = "Example string value"
    let fullTableName = "Example string value"
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let newLikeEvent = createLikeEvent(fullTableNameHash, fullTableName, user)
    handleLike(newLikeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Like created and stored", () => {
    assert.entityCount("Like", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Like",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fullTableNameHash",
      "Example string value"
    )
    assert.fieldEquals(
      "Like",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fullTableName",
      "Example string value"
    )
    assert.fieldEquals(
      "Like",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
