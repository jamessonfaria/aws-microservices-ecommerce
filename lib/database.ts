import { RemovalPolicy } from "aws-cdk-lib";
import { AttributeType, BillingMode, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class SwnDatabase extends Construct {
    public readonly productTable: ITable;
    public readonly basketTable: ITable;

    constructor(scope: Construct, id: string){
        super(scope, id);

        const productTable = new Table(this, 'product', {
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING
            },
            tableName: 'product',
            removalPolicy: RemovalPolicy.DESTROY,
            billingMode: BillingMode.PAY_PER_REQUEST,
        });

        this.productTable = productTable;

        const basketTable = new Table(this, 'basket', {
            partitionKey: {
                name: 'userName',
                type: AttributeType.STRING
            },
            tableName: 'basket',
            removalPolicy: RemovalPolicy.DESTROY,
            billingMode: BillingMode.PAY_PER_REQUEST,
        });

        this.basketTable = basketTable;
    }
}