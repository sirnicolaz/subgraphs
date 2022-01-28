// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ResolutionApproved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("approvedFrom", Value.fromBytes(Bytes.empty()));
    this.set("approvedId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ResolutionApproved entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ResolutionApproved entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ResolutionApproved", id.toString(), this);
    }
  }

  static load(id: string): ResolutionApproved | null {
    return changetype<ResolutionApproved | null>(
      store.get("ResolutionApproved", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get approvedFrom(): Bytes {
    let value = this.get("approvedFrom");
    return value!.toBytes();
  }

  set approvedFrom(value: Bytes) {
    this.set("approvedFrom", Value.fromBytes(value));
  }

  get approvedId(): BigInt {
    let value = this.get("approvedId");
    return value!.toBigInt();
  }

  set approvedId(value: BigInt) {
    this.set("approvedId", Value.fromBigInt(value));
  }
}

export class ResolutionCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdFrom", Value.fromBytes(Bytes.empty()));
    this.set("createdId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ResolutionCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ResolutionCreated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ResolutionCreated", id.toString(), this);
    }
  }

  static load(id: string): ResolutionCreated | null {
    return changetype<ResolutionCreated | null>(
      store.get("ResolutionCreated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdFrom(): Bytes {
    let value = this.get("createdFrom");
    return value!.toBytes();
  }

  set createdFrom(value: Bytes) {
    this.set("createdFrom", Value.fromBytes(value));
  }

  get createdId(): BigInt {
    let value = this.get("createdId");
    return value!.toBigInt();
  }

  set createdId(value: BigInt) {
    this.set("createdId", Value.fromBigInt(value));
  }
}

export class ResolutionUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("updatedFrom", Value.fromBytes(Bytes.empty()));
    this.set("updatedId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ResolutionUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ResolutionUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ResolutionUpdated", id.toString(), this);
    }
  }

  static load(id: string): ResolutionUpdated | null {
    return changetype<ResolutionUpdated | null>(
      store.get("ResolutionUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get updatedFrom(): Bytes {
    let value = this.get("updatedFrom");
    return value!.toBytes();
  }

  set updatedFrom(value: Bytes) {
    this.set("updatedFrom", Value.fromBytes(value));
  }

  get updatedId(): BigInt {
    let value = this.get("updatedId");
    return value!.toBigInt();
  }

  set updatedId(value: BigInt) {
    this.set("updatedId", Value.fromBigInt(value));
  }
}
