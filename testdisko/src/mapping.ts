import {
  ResolutionApproved as ResolutionApprovedEvent,
  ResolutionCreated as ResolutionCreatedEvent,
  ResolutionUpdated as ResolutionUpdatedEvent
} from "../generated/ResolutionMock/ResolutionMock"
import {
  ResolutionApproved,
  ResolutionCreated,
  ResolutionUpdated
} from "../generated/schema"

export function handleResolutionApproved(event: ResolutionApprovedEvent): void {
  let entity = new ResolutionApproved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.approvedFrom = event.params.approvedFrom
  entity.approvedId = event.params.approvedId
  entity.save()
}

export function handleResolutionCreated(event: ResolutionCreatedEvent): void {
  let entity = new ResolutionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.createdFrom = event.params.createdFrom
  entity.createdId = event.params.createdId
  entity.save()
}

export function handleResolutionUpdated(event: ResolutionUpdatedEvent): void {
  let entity = new ResolutionUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.updatedFrom = event.params.updatedFrom
  entity.updatedId = event.params.updatedId
  entity.save()
}
