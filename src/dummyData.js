valueTypes = ['TEXT', 'TRUE_ONLY', 'FILE_RESOURCE', 'BOOLEAN', 'INTEGER_POSITIVE', 'NUMBER', 'DATE', 'LONG_TEXT', 'INTEGER', 'INTEGER_ZERO_OR_POSITIVE', 'PERCENTAGE', ]

export const patientData = [
    {
        name: "Name",
        valueType: "TEXT",
        optionSetValue: false,
    },
]


const dataElements = [
    {
        id: "qR2egL2KtTM",
        dataElement: {
            name: "Name",
            id: "Vk1tzSQxvOR",
            valueType: "TEXT",
            optionSetValue: false,
        }
    },
    {
        id: "qR2egL2KtTM",
        dataElement: {
            name: "Gender",
            id: "Vk1tzSQxvOR",
            valueType: "TEXT",
            optionSetValue: true,
            optionSet: {
                name: "Gender",
                id: "isYOcVDBgJo",
                options: [
                    {
                        name: "Male",
                        id: "SGnpWzOu1Bq"
                    },
                    {
                        name: "Female",
                        id: "iNZU6alTXAP"
                    },
                ]
            }
        }
    },
    {
        id: "qR2egL2KtTM",
        dataElement: {
            name: "Wives",
            id: "Vk1tzSQxvOR",
            valueType: "NUMBER",
            optionSetValue: false,
        }
    },
    {
        id: "qR2egL2KtTM",
        dataElement: {
            name: "Use of alcohol",
            id: "Vk1tzSQxvOR",
            valueType: "TRUE_ONLY",
            optionSetValue: false,
        }
    },
    {
        id: "qR2egL2KtTM",
        dataElement: {
            name: "Use of tobacco",
            id: "Vk1tzSQxvOR",
            valueType: "BOOLEAN",
            optionSetValue: false,
        }
    },
]