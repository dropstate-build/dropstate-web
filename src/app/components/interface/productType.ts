export interface ProductType {
    productImage: string[],
    type: string,
    name: string,
    designedBy: string,
    sizeChart: string[],
    colorChart: string[],
    availableQuantity: number,
    price: number,
    deliveryDetails: {
        returnPeriod: number,
        guarantee: boolean,
        qualityAssured: boolean,
        codAvailable: boolean
    },
    designFeature: {
        description: string,
        material: string,
        washing: string,
        print: string,
        ironing: string
    },
    src: string
}