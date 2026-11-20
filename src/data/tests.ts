
export type TestSummary = {
    id: string;
    name: string;
    description: string;
    numberOfTasks: number;
};

export const TESTS: TestSummary[]  = [
    {
        id: "history",
        name: "Historia",
        description: "Rzym, Grecja i wszytsko pomiędzy",
        numberOfTasks: 20
    },
    {
        id: "geography",
        name: "Geografia",
        description: "Stolice, rzeki i szczyty",
        numberOfTasks: 15
    },
    {
        id: "cs",
        name: "Informatyka",
        description: "Sieci, systemy i języki",
        numberOfTasks: 12
    }
]

export const findTest = (id: string): TestSummary | undefined => {
    return TESTS.find((test) => test.id === id);
}