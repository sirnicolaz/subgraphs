// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ResolutionApproved extends ethereum.Event {
  get params(): ResolutionApproved__Params {
    return new ResolutionApproved__Params(this);
  }
}

export class ResolutionApproved__Params {
  _event: ResolutionApproved;

  constructor(event: ResolutionApproved) {
    this._event = event;
  }

  get approvedFrom(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approvedId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ResolutionCreated extends ethereum.Event {
  get params(): ResolutionCreated__Params {
    return new ResolutionCreated__Params(this);
  }
}

export class ResolutionCreated__Params {
  _event: ResolutionCreated;

  constructor(event: ResolutionCreated) {
    this._event = event;
  }

  get createdFrom(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get createdId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ResolutionUpdated extends ethereum.Event {
  get params(): ResolutionUpdated__Params {
    return new ResolutionUpdated__Params(this);
  }
}

export class ResolutionUpdated__Params {
  _event: ResolutionUpdated;

  constructor(event: ResolutionUpdated) {
    this._event = event;
  }

  get updatedFrom(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get updatedId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ResolutionMock__getResolutionResultResolutionStruct extends ethereum.Tuple {
  get dataURI(): string {
    return this[0].toString();
  }

  get approveTimestamp(): BigInt {
    return this[1].toBigInt();
  }

  get resolutionTypeId(): BigInt {
    return this[2].toBigInt();
  }
}

export class ResolutionMock__getResolutionResult {
  value0: ResolutionMock__getResolutionResultResolutionStruct;
  value1: BigInt;
  value2: BigInt;
  value3: string;

  constructor(
    value0: ResolutionMock__getResolutionResultResolutionStruct,
    value1: BigInt,
    value2: BigInt,
    value3: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    return map;
  }
}

export class ResolutionMock__resolutionTypesResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: string, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class ResolutionMock__resolutionsResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: string, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class ResolutionMock extends ethereum.SmartContract {
  static bind(address: Address): ResolutionMock {
    return new ResolutionMock("ResolutionMock", address);
  }

  createResolution(dataURI: string, resolutionTypeId: BigInt): BigInt {
    let result = super.call(
      "createResolution",
      "createResolution(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(dataURI),
        ethereum.Value.fromUnsignedBigInt(resolutionTypeId)
      ]
    );

    return result[0].toBigInt();
  }

  try_createResolution(
    dataURI: string,
    resolutionTypeId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createResolution",
      "createResolution(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(dataURI),
        ethereum.Value.fromUnsignedBigInt(resolutionTypeId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getResolution(resolutionId: BigInt): ResolutionMock__getResolutionResult {
    let result = super.call(
      "getResolution",
      "getResolution(uint256):((string,uint256,uint256),uint256,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(resolutionId)]
    );

    return changetype<ResolutionMock__getResolutionResult>(
      new ResolutionMock__getResolutionResult(
        changetype<ResolutionMock__getResolutionResultResolutionStruct>(
          result[0].toTuple()
        ),
        result[1].toBigInt(),
        result[2].toBigInt(),
        result[3].toString()
      )
    );
  }

  try_getResolution(
    resolutionId: BigInt
  ): ethereum.CallResult<ResolutionMock__getResolutionResult> {
    let result = super.tryCall(
      "getResolution",
      "getResolution(uint256):((string,uint256,uint256),uint256,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(resolutionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ResolutionMock__getResolutionResult>(
        new ResolutionMock__getResolutionResult(
          changetype<ResolutionMock__getResolutionResultResolutionStruct>(
            value[0].toTuple()
          ),
          value[1].toBigInt(),
          value[2].toBigInt(),
          value[3].toString()
        )
      )
    );
  }

  resolutionTypes(param0: BigInt): ResolutionMock__resolutionTypesResult {
    let result = super.call(
      "resolutionTypes",
      "resolutionTypes(uint256):(string,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ResolutionMock__resolutionTypesResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_resolutionTypes(
    param0: BigInt
  ): ethereum.CallResult<ResolutionMock__resolutionTypesResult> {
    let result = super.tryCall(
      "resolutionTypes",
      "resolutionTypes(uint256):(string,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ResolutionMock__resolutionTypesResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  resolutions(param0: BigInt): ResolutionMock__resolutionsResult {
    let result = super.call(
      "resolutions",
      "resolutions(uint256):(string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ResolutionMock__resolutionsResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_resolutions(
    param0: BigInt
  ): ethereum.CallResult<ResolutionMock__resolutionsResult> {
    let result = super.tryCall(
      "resolutions",
      "resolutions(uint256):(string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ResolutionMock__resolutionsResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveResolutionCall extends ethereum.Call {
  get inputs(): ApproveResolutionCall__Inputs {
    return new ApproveResolutionCall__Inputs(this);
  }

  get outputs(): ApproveResolutionCall__Outputs {
    return new ApproveResolutionCall__Outputs(this);
  }
}

export class ApproveResolutionCall__Inputs {
  _call: ApproveResolutionCall;

  constructor(call: ApproveResolutionCall) {
    this._call = call;
  }

  get resolutionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApproveResolutionCall__Outputs {
  _call: ApproveResolutionCall;

  constructor(call: ApproveResolutionCall) {
    this._call = call;
  }
}

export class CreateResolutionCall extends ethereum.Call {
  get inputs(): CreateResolutionCall__Inputs {
    return new CreateResolutionCall__Inputs(this);
  }

  get outputs(): CreateResolutionCall__Outputs {
    return new CreateResolutionCall__Outputs(this);
  }
}

export class CreateResolutionCall__Inputs {
  _call: CreateResolutionCall;

  constructor(call: CreateResolutionCall) {
    this._call = call;
  }

  get dataURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resolutionTypeId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateResolutionCall__Outputs {
  _call: CreateResolutionCall;

  constructor(call: CreateResolutionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateResolutionCall extends ethereum.Call {
  get inputs(): UpdateResolutionCall__Inputs {
    return new UpdateResolutionCall__Inputs(this);
  }

  get outputs(): UpdateResolutionCall__Outputs {
    return new UpdateResolutionCall__Outputs(this);
  }
}

export class UpdateResolutionCall__Inputs {
  _call: UpdateResolutionCall;

  constructor(call: UpdateResolutionCall) {
    this._call = call;
  }

  get resolutionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get dataURI(): string {
    return this._call.inputValues[1].value.toString();
  }

  get resolutionTypeId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateResolutionCall__Outputs {
  _call: UpdateResolutionCall;

  constructor(call: UpdateResolutionCall) {
    this._call = call;
  }
}
