import { Address, Bytes } from "@graphprotocol/graph-ts";
import {
  Like as LikeEvent,
  Unlike as UnlikeEvent
} from "../generated/Likes/Likes"
import { Like, Table } from "../generated/schema"
import { store } from '@graphprotocol/graph-ts'

export function handleLike(event: LikeEvent): void {
  let entity = new Table(
    event.params.fullTableNameHash
  )
  entity.fullTableName = event.params.fullTableName
  entity.save()

  let id = Bytes.fromHexString(event.params.fullTableNameHash.toHex().concat(event.params.user.toHex().slice(2)))
  let likeEntity = new Like(
    id
  )
  likeEntity.tableName = event.params.fullTableNameHash;
  likeEntity.timestamp = event.block.timestamp;
  likeEntity.address = event.params.user.toHexString()
  likeEntity.timestamp = event.block.timestamp;

  likeEntity.save()

}

export function handleUnlike(event: UnlikeEvent): void {
  let id = Bytes.fromHexString(event.params.fullTableNameHash.toHex().concat(event.params.user.toHex().slice(2)))
  
  store.remove('Like', id.toHex())

}
