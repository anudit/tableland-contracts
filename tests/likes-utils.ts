import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { Like, Unlike } from "../generated/Likes/Likes"

export function createLikeEvent(
  fullTableNameHash: string,
  fullTableName: string,
  user: Address
): Like {
  let likeEvent = changetype<Like>(newMockEvent())

  likeEvent.parameters = new Array()

  likeEvent.parameters.push(
    new ethereum.EventParam(
      "fullTableNameHash",
      ethereum.Value.fromString(fullTableNameHash)
    )
  )
  likeEvent.parameters.push(
    new ethereum.EventParam(
      "fullTableName",
      ethereum.Value.fromString(fullTableName)
    )
  )
  likeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return likeEvent
}

export function createUnlikeEvent(
  fullTableNameHash: string,
  fullTableName: string,
  user: Address
): Unlike {
  let unlikeEvent = changetype<Unlike>(newMockEvent())

  unlikeEvent.parameters = new Array()

  unlikeEvent.parameters.push(
    new ethereum.EventParam(
      "fullTableNameHash",
      ethereum.Value.fromString(fullTableNameHash)
    )
  )
  unlikeEvent.parameters.push(
    new ethereum.EventParam(
      "fullTableName",
      ethereum.Value.fromString(fullTableName)
    )
  )
  unlikeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return unlikeEvent
}
